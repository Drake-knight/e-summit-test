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
    useEffect(() => {
      window.addEventListener(BEFORE_INSTALL_PROMPT, (e) => {
       e.preventDefault()
       deferredPrompt.current = e
      })
      window.addEventListener(APP_INSTALLED, appInstalled)
     }, [])

     useEffect(() => {
      const isInstallable = device.isMobile && !pwa.isStandalone(window);

      const isInstalled = localStorage.getItem(INSTALLATION_STATUS)
      setTimeout(() => {
       if (isInstallable && !isInstalled)
        if (deferredPrompt.current) {
         installationPrompt({
          doNotShowAgain,
          onInstall
         })
        } else {
         manualPrompt({
          doNotShowAgain,
          alreadyInstalled,
         })
        }
      }, 10)
     }, [device.isAndroid, device.isIOS, deferredPrompt.current])
     

    return <>{children}</>;
    }
