import { denormaliseData, normaliseData } from "../helpers";
import { ACTIONS, FootfallContextAction, FootfallContextStore } from "../types";

export const reducer = (
  store: FootfallContextStore,
  action: FootfallContextAction
): FootfallContextStore => {
  switch (action.type) {
    case ACTIONS.SET_FOOTFALL_DATA:
      return { ...store, ...action.payload, footfallData: action.payload.data };

    case ACTIONS.SET_SELECTED_DATE_RANGE:
      return { ...store, selectedDateRange: action.payload };

    case ACTIONS.TOGGLE_IS_DATA_NORMALISED:
      let { footfallData, average } = store.isDataNormalised
        ? denormaliseData(store.footfallData, store.min, store.max)
        : normaliseData(store.footfallData, store.min, store.max);

      let { footfallData: prevPeriodData } = store.isDataNormalised
        ? denormaliseData(store.prevPeriodData, store.prevMin, store.prevMax)
        : normaliseData(store.prevPeriodData, store.prevMin, store.prevMax);

      return {
        ...store,
        isDataNormalised: !store.isDataNormalised,
        footfallData,
        average,
        prevPeriodData,
      };

    case ACTIONS.TOGGLE_IS_AVERAGE_LINE_SHOWN:
      return { ...store, isAverageLineShown: !store.isAverageLineShown };

    case ACTIONS.TOGGLE_IS_DATA_COMPARISON_SHOWN:
      return { ...store, isDataComparisonShown: !store.isDataComparisonShown };

    default:
      return store;
  }
};
