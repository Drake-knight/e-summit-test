/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from "react";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
import { firebaseApp } from "./firebaseconfig";

import axios from "axios";

const PushNotificationHandler = () => {
    const [subscription, setSubscription] = useState(null);
    const sendTokenToLambda = async (token) => {
        const lambdaEndpoint = "https://8znns98cv2.execute-api.eu-north-1.amazonaws.com/default/Esummit";

        const lambdaPayload = {
            deviceToken: token,
        };

        try {
            await axios.post(lambdaEndpoint, lambdaPayload, {
                headers: {
                    "Content-Type": "application/json",
                },
            });

            console.log("Token sent to Lambda successfully");
        } catch (error) {
            console.error("Error sending token to Lambda:", error);
        }
    };



    const getFCMToken = async () => {
        const messaging = getMessaging(firebaseApp);

        try {
            const permission = Notification.permission;

            if (permission === "default") {
                await Notification.requestPermission();
            }

            const currentToken = await getToken(messaging);
            setSubscription(currentToken);
            console.log("FCM Token:", currentToken);
            sendTokenToLambda(currentToken);
        } catch (error) {
            console.error("Error handling notification permission or getting Firebase token:", error);
        }
    };

    const initializeFirebaseMessaging = async () => {
        const messaging = getMessaging(firebaseApp);

        try {
            await getFCMToken();

            const unsubscribe = onMessage(messaging, (message) => {
                console.log("Received message:", message)

            });

            return () => {
                unsubscribe();
            };
        } catch (error) {
            console.error("Error initializing Firebase messaging:", error);
        }
    };

    useEffect(() => {
        initializeFirebaseMessaging();
    }, []);

    return null;
};

export default PushNotificationHandler;
