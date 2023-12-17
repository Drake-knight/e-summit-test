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
       
        deferredPrompt?.current.prompt();
        // Wait for the user to respond to the prompt
        let status = false;
       
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

 
    if (isInstallable && !isInstalled) {
      if (deferredPrompt.current) {
        // Check if the device is Android before triggering the installation prompt
        if (device.isAndroid) {
          showInstallationPrompt();
        } else if (device.isIOS ||(device.isTablet&&device.isIOS)) {
          // Check if the device is iOS before triggering the manual installation prompt
          manualPrompt({
            doNotShowAgain,
            alreadyInstalled,
          });
        }
      }
    } else if (!isInstallable && !isInstalled) {

      showInstallationPrompt();
    }
}, [device.isAndroid, device.isIOS, deferredPrompt.current]);


    return <>{children}</>;
    }
