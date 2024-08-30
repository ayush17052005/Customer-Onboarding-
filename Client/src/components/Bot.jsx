import { Webchat, WebchatProvider, Fab, getClient } from "@botpress/webchat";
import { buildTheme } from "@botpress/webchat-generator";
import React from "react";

const { theme, style } = buildTheme({
  themeName: "prism",
  themeColor: "#634433",
});

// Add your Client ID here ⬇️
const clientId = "9543b1c6-df7b-46a1-a09e-ddeb6df91337";

export default function App({ isWebchatOpen, toggleWebchat }) {
  const client = getClient({ clientId });

  return (
    <div className="fixed bottom-5 right-6 z-50">
      <style>{style}</style>
      <WebchatProvider theme={theme} client={client}>
        {/* Button to toggle the chatbot */}
        <Fab onClick={toggleWebchat} />

        {/* Background overlay when the chatbot is open */}
        {isWebchatOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={toggleWebchat} // Optional: Close chatbot when background is clicked
          />
        )}

        {/* Centered Webchat window with margins */}
        <div
          className={`${isWebchatOpen ? "flex" : "hidden"
            } no-scrollbar fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[1000] w-[90%] max-w-[400px] bg-white shadow-lg p-8 overflow-auto max-h-[calc(100vh-40px)]`}
        >
          <Webchat />
        </div>
      </WebchatProvider>
    </div>
  );
}
