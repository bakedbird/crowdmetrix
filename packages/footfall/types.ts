import { ContextAction } from "custom-types";

export type Footfall = {
  id: number;
  time: string;
  value: number;
};

export const DateRangeKey = {
  TODAY: "today",
  YESTERDAY: "yesterday",
  LAST_WEEK: "last-7-days",
  CUSTOM: "custom-range",
} as const;

export type DateRangeKeyValue = typeof DateRangeKey[keyof typeof DateRangeKey];

export type DateRange = {
  key: DateRangeKeyValue;
  value: string;
};

export type FootfallContextStore = {
  footfallData: Footfall[];
  dateRanges: DateRange[];
  selectedDateRange: DateRange;
  isAverageLineShown: boolean;
  isDataComparisonShown: boolean;
  isDataNormalised: boolean;
  average: number;
  normalisedAverage: number;
  min: number;
  max: number;
};

export enum ACTIONS {
  SET_FOOTFALL_DATA,
  SET_SELECTED_DATE_RANGE,
  TOGGLE_IS_DATA_NORMALISED,
  TOGGLE_IS_AVERAGE_LINE_SHOWN,
  TOGGLE_IS_DATA_COMPARISON_SHOWN,
}

export type FootfallContextAction = ContextAction<ACTIONS>;

export type GetFootfallReq = {
  dates?: [Date, Date];
  dateRange?: DateRangeKeyValue;
};

export type GetFootfallRes = {
  data: Footfall[];
  max: number;
  min: number;
  average: number;
};
