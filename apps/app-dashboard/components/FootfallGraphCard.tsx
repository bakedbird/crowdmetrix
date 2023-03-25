import { Card } from "@core-ui/card";
import ChartStatItem from "@crowdmetrix-ui/chart-stat/ChartStatItem";
import ChartStatsCard from "@crowdmetrix-ui/chart-stat/ChartStatsCard";
import { FootfallChart } from "@crowdmetrix-ui/footfall-chart";
import { NoResults } from "@crowdmetrix-ui/no-results";
import { useFootfallContextStore } from "@crowdmetrix/footfall";

const FootfallGraphCard = () => {
  const {
    footfallData,
    total,
    average,
    emptyDays,
    mostVisitedDay,
    prevPeriodData,
    prevAverage,
    prevEmptyDays,
    prevMostVisitedDay,
    prevTotal,
    isDataComparisonShown,
    isAverageLineShown,
    isDataNormalised,
  } = useFootfallContextStore();

  return (
    <Card className="w-full xl:w-3/4">
      <p className="text-xl font-semibold mb-4">Daily footfall</p>
      {!!footfallData.length ? (
        <>
          <ChartStatsCard>
            <ChartStatItem
              label="Total visitors"
              current={total}
              prev={prevTotal}
              prevBadWhen="up"
              hidePrev={!prevPeriodData.length}
            />
            <ChartStatItem
              label="Average visitors"
              current={isDataNormalised ? "-" : Math.round(average)}
              prev={isDataNormalised ? "-" : Math.round(prevAverage)}
              prevBadWhen="up"
              hidePrev={!prevPeriodData.length}
            />
            <ChartStatItem
              label="Empty store days"
              current={emptyDays}
              prev={prevEmptyDays}
              prevBadWhen="down"
              hidePrev={!prevPeriodData.length}
            />
            <ChartStatItem
              label="Most visited day"
              current={mostVisitedDay}
              prev={prevMostVisitedDay}
              prevBadWhen="none"
            />
          </ChartStatsCard>

          <FootfallChart
            data={footfallData}
            comparisonData={prevPeriodData}
            average={average}
            showAverageComparison={isDataComparisonShown}
            showAverageLine={isAverageLineShown}
          />
        </>
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
