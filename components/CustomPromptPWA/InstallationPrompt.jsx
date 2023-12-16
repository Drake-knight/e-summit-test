import { Icon } from "@iconify/react";
import { Button, Card } from "flowbite-react";
import { confirmAlert } from "react-confirm-alert";

// This Prompt is for devices that support auto-installation on PWA
export const installationPrompt = async ({ doNotShowAgain, onInstall }) => {
  const customStyles = {
    card: {
      backgroundColor: "#fff",
      width: "auto",
      borderRadius: "8px",
      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
      padding: "1rem",
      position: "relative",
    },
    closeIcon: {
      position: "absolute",
      top: "0.5rem",
      left: "0.5rem",
      color: "#F62B2B",
      cursor: "pointer",
    },
    promptContent: {
      display: "flex",
      flexDirection: "column",
      marginTop: "1rem",
    },
    buttonContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      gap: "1rem",
      marginTop: "1rem",
    },
    doNotShowAgainButton: {
      flex: 1,
      color: "gray",
      border: "1px solid #ccc",
      borderRadius: "4px",
      padding: "0.5rem",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
    },
    installButton: {
      flex: 1,
      color: "#fff",
      backgroundColor: "green", // Set the color to green
      borderRadius: "4px",
      padding: "0.5rem",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
    },
    installMessage: {
      fontSize: "14px",
    },
  };

  confirmAlert({
    customUI: ({ onClose }) => (
      <div style={customStyles.card}>
        <div style={customStyles.closeIcon} onClick={onClose}>
          <Icon icon="zondicons:close-solid" width={20} />
        </div>
        <div style={customStyles.promptContent}>
          <div style={customStyles.installMessage}>
            We would recommend installing the app for a better experience.
          </div>
          <div style={customStyles.buttonContainer}>
            <div
              style={customStyles.doNotShowAgainButton}
              onClick={() => {
                doNotShowAgain(() => onClose());
              }}
            >
              {"I've already installed"}
            </div>
            <div
              style={customStyles.installButton}
              onClick={() => {
                onInstall(() => onClose(    ));
              }}
            >
              Install
            </div>
          </div>
        </div>
      </div>
    ),
  });
};
