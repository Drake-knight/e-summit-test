import React, { useEffect, useState } from 'react';
import useUserAgent from '../hooks/useUserAgent';
import PWAPrompt from "./PWAPrompt";

const InstallPrompt = ({
  timesToShow = 1,
  promptOnVisit = 1,
  permanentlyHideOnDismiss = true,
  copyTitle = "Add to Home Screen",
  copyBody = "This website has app functionality. Add it to your home screen to use it in fullscreen and while offline.",
  copyShareButtonLabel = "1) Press the 'Share' button on the menu bar below.",
  copyAddHomeButtonLabel = "2) Press 'Add to Home Screen'.",
  copyClosePrompt = "Cancel",
  delay = 10,
  debug = false,
  onClose = () => {},
}) => {
  const { userAgent } = useUserAgent();
  console.log(userAgent);

  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showPrompt, setShowPrompt] = useState(false);
  console.log("hello");

  useEffect(() => {
    const handleBeforeInstallPrompt = (event) => {
      event.preventDefault();
      setDeferredPrompt(event);
      setShowPrompt(true);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const calculateTop = () => {
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    const topPosition = (viewportHeight - 300) / 2; 
    return topPosition;
  };

  const handleInstallClick = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the A2HS prompt');
        } else {
          console.log('User dismissed the A2HS prompt');
        }
        setShowPrompt(false);
      });
    }
  };

  const renderMobilePrompt = () => {
    console.log('Rendering prompt for:', userAgent);

    if (userAgent !== 'Safari' && userAgent !== 'ChromeiOS') {
      console.log('Rendering default prompt');
      return (
        showPrompt && (
          <div
            style={{
              position: 'fixed',
              top: `${calculateTop()}px`,
              left: '50%',
              transform: 'translateX(-50%)',
              background: '#ffffff',
              padding: '20px',
              borderRadius: '12px',
              boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
              zIndex: '1001',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              maxWidth: '300px',
            }}
          >
            <p style={{ marginBottom: '10px', textAlign: 'center' }}>
              Install our app for a better experience!
            </p>
            <button
              style={{
                backgroundColor: '#4caf50',
                color: '#fff',
                padding: '10px 15px',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
              }}
              onClick={handleInstallClick}
            >
              Install App
            </button>
          </div>
        )
      );
    } else {

    return (
        showPrompt && (
          <PWAPrompt
            delay={delay}
            copyTitle={copyTitle}
            copyBody={copyBody}
            copyAddHomeButtonLabel={copyAddHomeButtonLabel}
            copyShareButtonLabel={copyShareButtonLabel}
            copyClosePrompt={copyClosePrompt}
            permanentlyHideOnDismiss={permanentlyHideOnDismiss}
            maxVisits={timesToShow + promptOnVisit}
            onClose={onClose}
          />
        )
      );
    }
  };

  return showPrompt ? renderMobilePrompt() : null;
};

export default InstallPrompt;
