import { localStorage } from "@crowdmetrix/storage";
import { ACTIONS, DarkModeContextAction, DarkModeContextStore } from "../types";

export const reducer = (
  store: DarkModeContextStore,
  action: DarkModeContextAction
): DarkModeContextStore => {
  switch (action.type) {
    case ACTIONS.SET_IS_DARK_MODE:
      if (!action.payload) {
        localStorage.setItem("CM_USER_SET_DARK_MODE", !store.isDarkMode);
      }
      return { ...store, isDarkMode: !store.isDarkMode };

    default:
      return store;
  }
};
