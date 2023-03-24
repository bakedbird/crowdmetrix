import { getDaysAgoDate } from "../helpers";
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

const fetchDateRangeFootfallData =
  (dateRange: DateRange, dates?: [Date, Date]) =>
  async (dispatch: React.Dispatch<FootfallContextAction>) => {
    if (dateRange.key === "custom-range" && dates) {
      console.log(dates);
      // await for the data
    } else {
      switch (dateRange.key) {
        case "today":
          console.log(new Date());
          break;
        case "yesterday":
          console.log(getDaysAgoDate(1));
          break;
        case "last-7-days":
          console.log(getDaysAgoDate(7));
          break;

        default:
          break;
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
