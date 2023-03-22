import { ContextAction } from "custom-types";

export type DarkModeContextStore = { isDarkMode: boolean };

export enum ACTIONS {
  SET_IS_DARK_MODE,
}

export type DarkModeContextAction = ContextAction<ACTIONS>;
