import React, { Fragment } from "react";
import ShareIcon from "./ShareIcon";
import HomeScreenIcon from "./HomeScreenIcon";
import styles from "./PWAPrompt.module.css";
import { confirmAlert } from "react-confirm-alert";
// ... (previous code)

export const  manualPrompt = async ({ doNotShowAgain }) => {
  confirmAlert({
    customUI: ({ onClose }) => (
      <Fragment>
        <div
          className={`${styles.pwaPromptOverlay}  iOSPWA-overlay`}
          aria-label="Close"
          role="button"
          onClick={onClose}
        />
        <div
          className={`${styles.pwaPrompt}  iOSPWA-container`}
          aria-describedby="pwa-prompt-description"
          aria-labelledby="pwa-prompt-title"
          role="dialog"
        >
          <div className={`${styles.pwaPromptHeader} iOSPWA-header`}>
            <p
              id="pwa-prompt-title"
              className={`${styles.pwaPromptTitle} iOSPWA-title`}
            >
              Add to Home Screen
            </p>
            <button
              className={`${styles.pwaPromptCancel} iOSPWA-cancel`}
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
          <div className={`${styles.pwaPromptBody} iOSPWA-body`}>
            <div className={`${styles.pwaPromptDescription} iOSPWA-description`}>
              <p
                id="pwa-prompt-description"
                className={`${styles.pwaPromptCopy} iOSPWA-description-copy`}
              >
                This website has app functionality. Add it to your home screen
                to use it in fullscreen and while offline.
              </p>
            </div>
          </div>
          <div className={`${styles.pwaPromptInstruction} iOSPWA-steps`}>
            <div className={`${styles.pwaPromptInstructionStep} iOSPWA-step1`}>
              <ShareIcon
                className={`${styles.pwaPromptShareIcon} iOSPWA-step1-icon`}
              />
              <p
                className={`${styles.pwaPromptCopy} ${styles.bold} iOSPWA-step1-copy`}
              >
                Press the &apos;Share&apos; button on the menu bar below.
              </p>
            </div>
            <div className={`${styles.pwaPromptInstructionStep} iOSPWA-step2`}>
              <HomeScreenIcon
                className={`${styles.pwaPromptHomeIcon} iOSPWA-step2-icon`}
              />
              <p
                className={`${styles.pwaPromptCopy} ${styles.bold} iOSPWA-step2-copy`}
              >
                Press &apos;Add to Home Screen&apos;.
              </p>
            </div>
          </div>
          <div className={`${styles.pwaPromptFooter} iOSPWA-footer`}>
            <button
              className={`${styles.pwaPromptAction} iOSPWA-action`}
              onClick={() =>  doNotShowAgain(() => onClose())}
            >
              Already Installed
            </button>
          </div>
        </div>
      </Fragment>
    ),
  });
};

// ... (remaining code)
