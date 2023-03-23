import { ACTIONS, DateRange, Footfall, FootfallContextAction } from "../types";

const setFootfallData = (payload: Footfall[]): FootfallContextAction => ({
  type: ACTIONS.SET_FOOTFALL_DATA,
  payload,
});

const setSelectedDateRange = (payload: DateRange): FootfallContextAction => ({
  type: ACTIONS.SET_SELECTED_DATE_RANGE,
  payload,
});

const toggleIsDataNormalised = (): FootfallContextAction => ({
  type: ACTIONS.TOGGLE_IS_DATA_NORMALISED,
  payload: null,
});

const toggleIsAverageLineShown = (): FootfallContextAction => ({
  type: ACTIONS.TOGGLE_IS_AVERAGE_LINE_SHOWN,
  payload: null,
});

const toggleIsDataComparisonShown = (): FootfallContextAction => ({
  type: ACTIONS.TOGGLE_IS_DATA_COMPARISON_SHOWN,
  payload: null,
});

export const FootfallContextActions = {
  setFootfallData,
  setSelectedDateRange,
  toggleIsDataNormalised,
  toggleIsAverageLineShown,
  toggleIsDataComparisonShown,
};
