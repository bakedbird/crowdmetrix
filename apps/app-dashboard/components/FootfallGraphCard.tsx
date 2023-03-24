import { Card } from "@core-ui/card";
import { BarChart } from "@core-ui/chart";
import { useFootfallContextStore } from "@crowdmetrix/footfall";

const FootfallGraphCard = () => {
  const { footfallData, average, isDataComparisonShown, isAverageLineShown } =
    useFootfallContextStore();

  return (
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
  );
};
export default FootfallGraphCard;
