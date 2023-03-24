import { Card } from "@core-ui/card";
import { DateRangePicker } from "@core-ui/date-range-picker";
import { Select } from "@core-ui/select";
import { Switch } from "@core-ui/switch";
import {
  DateRange,
  FootfallContextActions,
  useFootfallContext,
} from "@crowdmetrix/footfall";
import { AsyncFootfallContextActions } from "@crowdmetrix/footfall/context/actions";

const FiltersCard = () => {
  const {
    store: {
      dateRanges,
      isDataNormalised,
      isDataComparisonShown,
      isAverageLineShown,
      selectedDateRange,
    },
    dispatch,
  } = useFootfallContext();

  const onChangeIsDataNormalised = () =>
    dispatch(FootfallContextActions.toggleIsDataNormalised());

  const onChangeIsAverageLineShown = () =>
    dispatch(FootfallContextActions.toggleIsAverageLineShown());

  const onChangeIsDataComparisonShown = () =>
    dispatch(FootfallContextActions.toggleIsDataComparisonShown());

  const onChangeSelectedDateRangeItem = (
    dateRange: DateRange,
    dates?: [Date, Date]
  ) =>
    AsyncFootfallContextActions.fetchDateRangeFootfallData(
      dateRange,
      dates
    )(dispatch);

  return (
    <Card className="w-full xl:w-1/4">
      <p className="text-xl font-semibold mb-4">Filter options</p>
      <Select
        data={dateRanges}
        selectedDataItem={selectedDateRange}
        onChangeSelectedDataItem={onChangeSelectedDateRangeItem}
        label="Date range"
        info="Select the range of dates to show data"
      />
      {selectedDateRange.key === "custom-range" && (
        <div className="border-b dark:border-b-slate-600 mb-4">
          <DateRangePicker
            defaultStartEndDateTimes={[new Date(), new Date()]}
            onConfirm={(dates) =>
              onChangeSelectedDateRangeItem(selectedDateRange, dates)
            }
          />
        </div>
      )}
      <Switch
        enabled={isDataNormalised}
        onChangeEnabled={onChangeIsDataNormalised}
        label="Normalise data"
        info="Scales the data set down in the range of 0% - 100%"
      />
      <Switch
        enabled={isAverageLineShown}
        onChangeEnabled={onChangeIsAverageLineShown}
        label="Show average line"
        info="Shows a line that denotes the average value"
      />
      <Switch
        enabled={isDataComparisonShown}
        onChangeEnabled={onChangeIsDataComparisonShown}
        label="Data comparison"
        info="Bars that are below the average turn red"
      />
    </Card>
  );
};
export default FiltersCard;
