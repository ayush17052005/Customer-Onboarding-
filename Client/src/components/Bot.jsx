import { Webchat, WebchatProvider, Fab, getClient } from "@botpress/webchat";
import { buildTheme } from "@botpress/webchat-generator";
import React from "react";

const { theme, style } = buildTheme({
  themeName: "prism",
  themeColor: "#634433",
});

//Add your Client ID here ⬇️
const clientId = "9543b1c6-df7b-46a1-a09e-ddeb6df91337";

export default function App({ isWebchatOpen, toggleWebchat }) {
  const client = getClient({ clientId });

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <style>{style}</style>
      <WebchatProvider theme={theme} client={client}>
        <Fab onClick={toggleWebchat} />
        <div style={{ display: isWebchatOpen ? "block" : "none" }}>
          <Webchat />
        </div>
      </WebchatProvider>
    </div>
  );
}
