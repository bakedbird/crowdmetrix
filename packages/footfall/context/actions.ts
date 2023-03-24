import { FootfallApi } from "..";
import {
  ACTIONS,
  DateRange,
  FootfallContextAction,
  GetFootfallRes,
} from "../types";

const setFootfallData = (payload: GetFootfallRes): FootfallContextAction => ({
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

const fetchDateRangeFootfallData =
  (dateRange: DateRange, dates?: [Date, Date]) =>
  async (dispatch: React.Dispatch<FootfallContextAction>) => {
    if (dateRange.key === "custom-range" && dates) {
      FootfallApi.getFootfall({ dates, dateRange: dateRange.key }).then(
        ({ data }) => {
          dispatch(setFootfallData(data));
        }
      );
    } else if (dateRange.key !== "custom-range") {
      const data = await FootfallApi.getFootfall({
        dateRange: dateRange.key,
      }).then((r) => r.data);

      if (data) {
        dispatch(setFootfallData(data));
      }
    }
    if (!dates) {
      dispatch(setSelectedDateRange(dateRange));
    }
  };

export const FootfallContextActions = {
  setFootfallData,
  setSelectedDateRange,
  toggleIsDataNormalised,
  toggleIsAverageLineShown,
  toggleIsDataComparisonShown,
};

export const AsyncFootfallContextActions = { fetchDateRangeFootfallData };
