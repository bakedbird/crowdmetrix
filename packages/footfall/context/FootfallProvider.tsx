import { ProviderProps, ProviderValue } from "custom-types";
import React, { useContext, useReducer } from "react";
import { FootfallContextAction, FootfallContextStore } from "../types";
import { reducer } from "./reducer";

const initialStore: FootfallContextStore = {
  footfallData: [],
  dateRanges: [
    { key: "today", value: "Today" },
    { key: "yesterday", value: "Yesterday" },
    { key: "last-7-days", value: "Last 7 days" },
    { key: "custom-range", value: "Custom range" },
  ],
  selectedDateRange: { key: "last-7-days", value: "Last 7 days" },
  isAverageLineShown: false,
  isDataComparisonShown: false,
  isDataNormalised: false,
  average: 0,
  normalisedAverage: 0,
  min: 0,
  max: 0,
};

const FootfallContext = React.createContext<
  ProviderValue<FootfallContextStore, FootfallContextAction>
>({ store: initialStore, dispatch: () => {} });

const FootfallContextProvider = ({ children }: ProviderProps) => {
  const [store, dispatch] = useReducer(reducer, initialStore);

  return (
    <FootfallContext.Provider value={{ store, dispatch }}>
      {children}
    </FootfallContext.Provider>
  );
};

export const useFootfallContext = () => useContext(FootfallContext);
export const useFootfallContextStore = () => {
  let { store } = useFootfallContext();
  return store;
};

export default FootfallContextProvider;
