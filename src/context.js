import { findAllByDisplayValue } from "@testing-library/react";
import React from "react";
import { withRouter } from "react-router-dom";

const AppContext=React.createContext();

const AppProvider = ({children}) => {
  const[dark, setDark]=React.useState(false);
  
  
  
  return <AppContext.Provider >

    {children}
  </AppContext.Provider>
}

export {AppProvider, AppContext};

export const useGlobalContext = () => {
  return React.useContext(AppContext);
}

