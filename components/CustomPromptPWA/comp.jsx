    // Comp.jsx

    import { useEffect, useRef } from "react";
    import { installationPrompt} from "./InstallationPrompt";
    import { manualPrompt } from "./ManualPrompt";
    import "react-confirm-alert/src/react-confirm-alert.css";
    import { UAParser } from "ua-parser-js";
    import {
    APP_INSTALLED,
    BEFORE_INSTALL_PROMPT,
    INSTALLATION_MESSAGE,
    INSTALLATION_STATUS,
    } from "./constants.helper";
    import { getDeviceInfo } from "./pwa.helper";

    export default function Comp({ children }) {
    const { device, pwa } = getDeviceInfo(new UAParser());
    const deferredPrompt = useRef(null);

    const appInstalled = () => {
        localStorage.setItem(INSTALLATION_STATUS, INSTALLATION_MESSAGE);
        deferredPrompt.current = null;
    };

    const doNotShowAgain = (close) => {
        appInstalled();
        close();
    };

    const alreadyInstalled = doNotShowAgain;

    const onInstall = (close) => {
        if (deferredPrompt.current) {
        // @ts-ignore
        deferredPrompt?.current.prompt();
        // Wait for the user to respond to the prompt
        let status = false;
        // @ts-ignore
        deferredPrompt.current.userChoice.then((choiceResult) => {
            status = choiceResult.outcome === "accepted";
        });
        if (status) {
            appInstalled();
            deferredPrompt.current = null;
        }
        close();
        }
    };

    const showInstallationPrompt = () => {
        installationPrompt({
          doNotShowAgain: (close) => doNotShowAgain(close),
          onInstall: (close) => onInstall(close),
        });
      };
    useEffect(() => {
        window.addEventListener(BEFORE_INSTALL_PROMPT, (e) => {
        e.preventDefault();
        deferredPrompt.current = e;
        });
        window.addEventListener(APP_INSTALLED, appInstalled);

        return () => {
        // Cleanup event listeners when the component unmounts
        window.removeEventListener(BEFORE_INSTALL_PROMPT, (e) => {
            e.preventDefault();
            deferredPrompt.current = e;
        });
        window.removeEventListener(APP_INSTALLED, appInstalled);
        };
    }, []);

    useEffect(() => {
        // Trigger PWA installation prompt on mobile devices and web/PC
        const isInstallable = device.isMobile || (device.isMobile && !pwa.isStandalone(window));
        const isInstalled = localStorage.getItem(INSTALLATION_STATUS);

        setTimeout(() => {
        if (isInstallable && !isInstalled)
            if (deferredPrompt.current) {
            installationPrompt({
                doNotShowAgain,
                onInstall,
            });
            } else {
            manualPrompt({
                doNotShowAgain,
                alreadyInstalled,
                isIOS: device.isIOS,
                isAndroid: device.isAndroid,
            });
            }
        else if (!isInstallable && !isInstalled) {
            // Show the custom installation prompt for non-mobile devices (web/PC)
            showInstallationPrompt();
        }
        }, 1e3);
    }, [device.isAndroid, device.isIOS, deferredPrompt.current]);

    return <>{children}</>;
    }
