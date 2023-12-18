import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCHTCHrkx75W46v7iJ4cPTEqhC4ygMeCs0",
    authDomain: "esummit-86c5c.firebaseapp.com",
    projectId: "esummit-86c5c",
    storageBucket: "esummit-86c5c.appspot.com",
    messagingSenderId: "927886998692",
    appId: "1:927886998692:web:e04743740d20e82e81fa31",
    measurementId: "G-YMKZWZF0RM",
};

let app = null;
let analytics = null;

// Check if the app is already initialized to avoid re-initialization
if (typeof window !== "undefined") {
    import("firebase/analytics").then(({ getAnalytics }) => {
        app = initializeApp(firebaseConfig);
        analytics = getAnalytics(app);
    });
}

export { app as firebaseApp, analytics };
