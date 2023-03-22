import { ACTIONS, DarkModeContextAction } from "../types";

const setIsDarkMode = (bySystem?: boolean): DarkModeContextAction => ({
  type: ACTIONS.SET_IS_DARK_MODE,
  payload: bySystem,
});

export const DarkModeContextActions = { setIsDarkMode };
