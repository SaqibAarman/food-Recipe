import React, { createContext, useContext, useReducer } from "react";
import reducer from "../reducers/sideBarReducer";
import { OPEN_SIDEBAR, CLOSE_SIDEBAR } from "../actions/actions";

const initialState = {
  isSideBarOpen: false,
};

const sideBarContext = createContext();

export const sideBarProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const openSideBar = () => {
    dispatch({ type: OPEN_SIDEBAR });
  };

  const closeSideBar = () => {
    dispatch({ type: CLOSE_SIDEBAR });
  };

  return (
    <sideBarContext.Provider
      value={{
        ...state,
        openSideBar,
        closeSideBar,
      }}
    >
      {children}
    </sideBarContext.Provider>
  );
};

export const useSideBarContext = () => {
  return useContext(sideBarContext);
};
