import { ProviderProps, ProviderValue } from "custom-types";
import React, { useContext, useReducer } from "react";
import { FootfallContextAction, FootfallContextStore } from "../types";
import { reducer } from "./reducer";

const initialStore: FootfallContextStore = {
  footfallData: [
    { id: 1, time: "2021-09-13T02:00:00+02:00", value: 635 },
    { id: 2, time: "2021-09-14T02:00:00+02:00", value: 411 },
    { id: 3, time: "2021-09-15T02:00:00+02:00", value: 601 },
    { id: 4, time: "2021-09-16T02:00:00+02:00", value: 731 },
    { id: 5, time: "2021-09-17T02:01:00+02:00", value: 770 },
    { id: 6, time: "2021-09-17T02:05:00+02:00", value: 550 },
    { id: 7, time: "2021-09-17T02:09:00+02:00", value: 430 },
    { id: 8, time: "2021-09-18T02:00:00+02:00", value: 962 },
    { id: 9, time: "2021-09-19T02:00:00+02:00", value: 0 },
  ],
  dateRanges: [
    { key: "today", value: "Today" },
    { key: "yesterday", value: "Yesterday" },
    { key: "last-7-days", value: "Last 7 days" },
    { key: "custom-range", value: "Custom range" },
  ],
  selectedDateRange: { key: "today", value: "Today" },
  isAverageLineShown: false,
  isDataComparisonShown: false,
  isDataNormalised: false,
  average: 0,
  normalisedAverage: 0,
  min: 0,
  max: 962,
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
