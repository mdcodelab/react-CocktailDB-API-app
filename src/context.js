import { findAllByDisplayValue } from "@testing-library/react";
import React from "react";
import { withRouter } from "react-router-dom";

const AppContext=React.createContext();

const AppProvider = ({children}) => {
  
  
  
  return <AppContext.Provider value="hello">

    {children}
  </AppContext.Provider>
}

export {AppProvider, AppContext};

export const useGlobalContext = () => {
  return React.useContext(AppContext);
}

