import { localStorage } from "@crowdmetrix/storage";
import { ProviderProps, ProviderValue } from "custom-types";
import React, { useContext, useEffect, useReducer } from "react";
import { DarkModeContextAction, DarkModeContextStore } from "../types";
import { DarkModeContextActions } from "./actions";
import { reducer } from "./reducer";

const initialStore: DarkModeContextStore = { isDarkMode: false };

const DarkModeContext = React.createContext<
  ProviderValue<DarkModeContextStore, DarkModeContextAction>
>({ store: initialStore, dispatch: () => {} });

const DarkModeContextProvider = ({ children }: ProviderProps) => {
  const [store, dispatch] = useReducer(reducer, initialStore);

  useEffect(() => {
    const isDarkMode = localStorage.getItem<boolean>("CM_USER_SET_DARK_MODE");

    if (
      isDarkMode === null &&
      store.isDarkMode !==
        window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      dispatch(DarkModeContextActions.setIsDarkMode(true));
    }

    if (isDarkMode !== null && isDarkMode !== store.isDarkMode) {
      dispatch(DarkModeContextActions.setIsDarkMode());
    }
  }, []);

  useEffect(() => {
    if (
      store.isDarkMode !== document.documentElement.classList.contains("dark")
    ) {
      document.documentElement.style.colorScheme = store.isDarkMode
        ? "dark"
        : "light";

      document.documentElement.classList.toggle("dark");
    }
  }, [store.isDarkMode]);

  return (
    <DarkModeContext.Provider value={{ store, dispatch }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export const useDarkModeContext = () => useContext(DarkModeContext);
export const useDarkModeContextStore = () => {
  let { store } = useDarkModeContext();
  return store;
};

export default DarkModeContextProvider;
