import React, { Fragment } from "react";
import ShareIcon from "./ShareIcon";
import HomeScreenIcon from "./HomeScreenIcon";
import styles from "./PWAPrompt.styles.module.scss";
import { confirmAlert } from "react-confirm-alert";

export const manualPrompt = async ({ doNotShowAgain, alreadyInstalled, isIOS, isAndroid }) => {
  confirmAlert({
    customUI: ({ onClose: close }) => (
      <Fragment>
        <div
          className={`${styles.pwaPromptOverlay} iOSPWA-overlay`}
          aria-label="Close overlay"
          role="button"
          onClick={close}
        />
        <div
          className={`${styles.pwaPrompt} iOSPWA-container`}
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
              onClick={close}
              aria-label="Cancel"
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
                This website has app functionality. Add it to your home screen to use it in fullscreen and while offline.
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
                1. Press the 'Share' button on the menu bar below.
              </p>
            </div>
            <div className={`${styles.pwaPromptInstructionStep} iOSPWA-step2`}>
              <HomeScreenIcon
                className={`${styles.pwaPromptHomeIcon} iOSPWA-step2-icon`}
              />
              <p
                className={`${styles.pwaPromptCopy} ${styles.bold} iOSPWA-step2-copy`}
              >
                2. Press 'Add to Home Screen'.
              </p>
            </div>
          </div>
        </div>
      </Fragment>
    ),
  });
};
