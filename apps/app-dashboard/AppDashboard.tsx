import { Card } from "@core-ui/card";
import { BarChart } from "@core-ui/chart";
import { Select } from "@core-ui/select";
import { Switch } from "@core-ui/switch";

import { DashboardLayout } from "@crowdmetrix-ui/layout";
import {
  DateRange,
  FootfallContextActions,
  useFootfallContext,
} from "@crowdmetrix/footfall";

const AppDashboard = () => {
  const {
    store: {
      footfallData,
      average,
      dateRanges,
      isDataNormalised,
      isDataComparisonShown,
      isAverageLineShown,
      selectedDateRange,
    },
    dispatch,
  } = useFootfallContext();

  // const filterDateRange = () => {
  //   setData((prev) =>
  //     prev.filter((p) => {
  //       let start = "2021-09-17T02:00:00+02:00";
  //       let end = "2021-09-17T02:09:00+02:00";

  //       return (
  //         new Date(p.time) >= new Date(start) &&
  //         new Date(p.time) <= new Date(end)
  //       );
  //     })
  //   );
  // };

  const onChangeIsDataNormalised = () =>
    dispatch(FootfallContextActions.toggleIsDataNormalised());

  const onChangeIsAverageLineShown = () =>
    dispatch(FootfallContextActions.toggleIsAverageLineShown());

  const onChangeIsDataComparisonShown = () =>
    dispatch(FootfallContextActions.toggleIsDataComparisonShown());

  const onChangeSelectedDateRangeItem = (dateRange: DateRange) =>
    dispatch(FootfallContextActions.setSelectedDateRange(dateRange));

  return (
    <DashboardLayout>
      <div className="flex flex-col xl:flex-row w-full gap-4">
        <Card className="w-full xl:w-3/4">
          <p className="text-xl font-semibold mb-4">Daily footfall</p>
          <div className="h-96 py-10">
            <BarChart
              data={footfallData}
              XAxisDataKey="time"
              YAxisDataKey="value"
              bars={[{ dataKey: "value" }]}
              average={average}
              showTooltip
              shoowCartesianGrid
              showBrush
              showAverageComparison={isDataComparisonShown}
              showAverageLine={isAverageLineShown}
            />
          </div>
        </Card>
        <Card className="w-full xl:w-1/4">
          <p className="text-xl font-semibold mb-4">Filter options</p>
          <Select
            data={dateRanges}
            selectedDataItem={selectedDateRange}
            onChangeSelectedDataItem={onChangeSelectedDateRangeItem}
            label="Date range"
            info="Select the range of dates to show data"
          />
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
      </div>
    </DashboardLayout>
  );
};

export default AppDashboard;
