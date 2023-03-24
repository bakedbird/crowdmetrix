import { Card } from "@core-ui/card";
import { BarChart } from "@core-ui/chart";
import { NoResults } from "@crowdmetrix-ui/no-results";
import { useFootfallContextStore } from "@crowdmetrix/footfall";

const FootfallGraphCard = () => {
  const { footfallData, average, isDataComparisonShown, isAverageLineShown } =
    useFootfallContextStore();

  return (
    <Card className="w-full xl:w-3/4">
      <p className="text-xl font-semibold mb-4">Daily footfall</p>
      {!!footfallData.length ? (
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
      ) : (
        <NoResults
          title="No data to show"
          subtitle="There are no footfall data for the selected period. Adjust the date range, or create or import some data"
        />
      )}
    </Card>
  );
};
export default FootfallGraphCard;
