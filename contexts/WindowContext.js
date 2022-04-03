import React, { useState, createContext, useEffect } from "react";

export const WindowContext = createContext();

const WindowContextProvider = (props) => {
  // ---------------------------
  // --STATE -------------------
  // ---------------------------
  const [showBoxC, setShowBoxC] = useState(false);
  // ---------------------------
  // --WINDOW SETTINGS----------
  // ---------------------------
  const [windowSettings, setWindowSettings] = useState({
    innerWidth: undefined,
    innerHeight: undefined,
    pageYOffset: undefined,
    pageXOffset: undefined,
  });
  useEffect(() => {
    if (typeof window !== "undefined") {
      function onListen_handleWindowSettings() {
        // Set window width/height to state
        setWindowSettings({
          innerWidth: window.innerWidth,
          innerHeight: window.innerHeight,
          pageYOffset: window.pageYOffset,
          pageXOffset: window.pageXOffset,
        });
      }
      // Add event listener
      window.addEventListener("resize", onListen_handleWindowSettings);
      window.addEventListener("scroll", onListen_handleWindowSettings);

      // Call handler right away so state gets updated with initial window size
      onListen_handleWindowSettings();

      // Remove event listener on cleanup
      return () => {
        window.removeEventListener("resize", onListen_handleWindowSettings);
        window.removeEventListener("scroll", onListen_handleWindowSettings);
      };
    }
  }, []);

  useEffect(() => {
    windowSettings.innerWidth > 600 && setShowBoxC(false);
  }, [windowSettings]);

  return <WindowContext.Provider value={{ windowSettings, showBoxC, setShowBoxC }}>{props.children}</WindowContext.Provider>;
};

export default WindowContextProvider;
