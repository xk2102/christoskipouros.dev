import React, { createContext } from "react";

export const GlobalContext = createContext();

const GlobalContextProvider = (props) => {
  // ------------------------------------------------------
  // --USER------------------------------------------------
  // ------------------------------------------------------

  // ------------------------------------------------------
  // --IDK-------------------------------------------------
  // ------------------------------------------------------
  return <GlobalContext.Provider value={{}}>{props.children}</GlobalContext.Provider>;
};

export default GlobalContextProvider;
