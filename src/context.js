import { findAllByDisplayValue } from "@testing-library/react";
import React from "react";
import { withRouter } from "react-router-dom";

const AppContext=React.createContext();

const AppProvider = ({children}) => {
  const[loading, setLoading]=React.useState(true);
  const[searchTerm, setSearchTerm]=React.useState("a");
  const[cocktails, setCocktails]=React.useState([]);
  
  
  return <AppContext.Provider value={{
    loading,
    cocktails,
    setSearchTerm
  }}>

    {children}
  </AppContext.Provider>
}

export {AppProvider, AppContext};

export const useGlobalContext = () => {
  return React.useContext(AppContext);
}

