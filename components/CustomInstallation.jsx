import React, { useEffect, useState } from 'react';
import useUserAgent from '../hooks/useUserAgent';
import { FaTimes } from 'react-icons/fa';
import { TbShare2 } from 'react-icons/tb';
import { AiOutlinePlusSquare } from 'react-icons/ai';
import { ImArrowDown, ImArrowUp } from 'react-icons/im';

const InstallPrompt = () => {
  const { userAgent } = useUserAgent();
  console.log(userAgent);

  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showPrompt, setShowPrompt] = useState(false);
  console.log("hello");

  const promptStyles = {
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    height: '60%',
    zIndex: 50,
    paddingBottom: 12,
    paddingLeft: 16,
    paddingRight: 16,
    color: 'white',
  };

  const iconStyles = {
    fontSize: '1.5rem',
  };

  const promptStyles2 = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    height: '70%',
    zIndex: 50,
    paddingTop: 12,
    paddingLeft: 16,
    paddingRight: 16,
    color: 'white',
  };

  const iconStyles2 = {
    fontSize: '1.5rem',
  };

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

    if (userAgent === 'Safari') {
      return (
        <div style={promptStyles}>
          <div style={{ ...promptStyles, backgroundColor: "white" }}>
            <button style={{ position: 'absolute', top: 0, right: 0, padding: 12 }}>
              <FaTimes style={iconStyles} />
            </button>
            <p className="text-lg">For the best experience, we recommend installing the Valley Trader app to your home screen!</p>
            <div className="flex gap-2 items-center text-lg">
              <p>Click the</p>
              <TbShare2 style={{ ...iconStyles, fontSize: '2rem' }} />
              <p>icon</p>
            </div>
            <div className="flex flex-col gap-2 items-center text-lg w-full px-4">
              <p>Scroll down and then click:</p>
              <div className="bg-zinc-800 flex justify-between items-center w-full px-4 py-2 rounded-lg">
                <p>Add to Home Screen</p>
                <AiOutlinePlusSquare style={iconStyles} />
              </div>
            </div>
            <button className="border-2 p-1" >Don&apos;t show again</button>
            <ImArrowDown className="text-4xl absolute -bottom-[50px] text-indigo-700 -z-10 animate-bounce" />
          </div>
        </div>
      );
    } else if (userAgent === 'ChromeiOS') {
      return (
        <div style={promptStyles2}>
          <div style={{ ...promptStyles2, backgroundColor: "white" }}>
            <ImArrowUp style={{ fontSize: '2.5rem', position: 'absolute', top: '-40px', right: 0, color: '#4f46e5', zIndex: 10 }} className="animate-bounce" />
            <button style={{ position: 'absolute', top: 0, right: 0, padding: 12 }} >
              <FaTimes style={iconStyles2} />
            </button>
            <p className="text-lg">For the best experience, we recommend installing the Valley Trader app to your home screen!</p>
            <div className="flex gap-2 items-center text-lg">
              <p>Click the</p>
              <TbShare2 style={{ ...iconStyles2, fontSize: '2rem' }} />
              <p>icon</p>
            </div>
            <div className="flex flex-col gap-2 items-center text-lg w-full px-4">
              <p>Scroll down and then click:</p>
              <div className="bg-zinc-800 flex items-center justify-between w-full px-8 py-2 rounded-lg">
                <p>Add to Home Screen</p>
                <AiOutlinePlusSquare style={iconStyles} />
              </div>
            </div>
            <button className="border-2 p-1" >Don&apos;t show again</button>
          </div>
        </div>
      );
    } else {
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
    }
  };



  return showPrompt ? renderMobilePrompt() : null;
};

export default InstallPrompt;
