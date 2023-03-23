import { Card } from "@core-ui/card";
import { BarChart } from "@core-ui/chart";

import { DashboardLayout } from "@crowdmetrix-ui/layout";

const AppDashboard = () => {
  const data = [
    { time: "2021-09-13T02:00:00+02:00", value: 635 },
    { time: "2021-09-14T02:00:00+02:00", value: 411 },
    { time: "2021-09-15T02:00:00+02:00", value: 601 },
    { time: "2021-09-16T02:00:00+02:00", value: 731 },
    { time: "2021-09-17T02:00:00+02:00", value: 770 },
    { time: "2021-09-18T02:00:00+02:00", value: 962 },
    { time: "2021-09-19T02:00:00+02:00", value: 0 },
    { time: "2021-09-20T02:00:00+02:00", value: 602 },
    { time: "2021-09-21T02:00:00+02:00", value: 594 },
    { time: "2021-09-22T02:00:00+02:00", value: 709 },
    { time: "2021-09-23T02:00:00+02:00", value: 540 },
    { time: "2021-09-24T02:00:00+02:00", value: 564 },
    { time: "2021-09-25T02:00:00+02:00", value: 354 },
    { time: "2021-09-26T02:00:00+02:00", value: 0 },
    { time: "2021-09-27T02:00:00+02:00", value: 574 },
    { time: "2021-09-28T02:00:00+02:00", value: 628 },
    { time: "2021-09-29T02:00:00+02:00", value: 831 },
    { time: "2021-09-30T02:00:00+02:00", value: 632 },
    { time: "2021-10-01T02:00:00+02:00", value: 756 },
    { time: "2021-10-02T02:00:00+02:00", value: 1003 },
    { time: "2021-10-03T02:00:00+02:00", value: 0 },
    { time: "2021-10-04T02:00:00+02:00", value: 505 },
    { time: "2021-10-05T02:00:00+02:00", value: 754 },
    { time: "2021-10-06T02:00:00+02:00", value: 803 },
    { time: "2021-10-07T02:00:00+02:00", value: 825 },
    { time: "2021-10-08T02:00:00+02:00", value: 829 },
    { time: "2021-10-09T02:00:00+02:00", value: 1324 },
    { time: "2021-10-10T02:00:00+02:00", value: 0 },
    { time: "2021-10-11T02:00:00+02:00", value: 506 },
    { time: "2021-10-12T02:00:00+02:00", value: 641 },
    { time: "2021-10-13T02:00:00+02:00", value: 803 },
    { time: "2021-10-14T02:00:00+02:00", value: 729 },
    { time: "2021-10-15T02:00:00+02:00", value: 774 },
    { time: "2021-10-16T02:00:00+02:00", value: 1191 },
    { time: "2021-10-17T02:00:00+02:00", value: 0 },
    { time: "2021-10-18T02:00:00+02:00", value: 655 },
    { time: "2021-10-19T02:00:00+02:00", value: 571 },
    { time: "2021-10-20T02:00:00+02:00", value: 576 },
    { time: "2021-10-21T02:00:00+02:00", value: 606 },
    { time: "2021-10-11T02:00:00+02:00", value: 506 },
    { time: "2021-10-12T02:00:00+02:00", value: 641 },
    { time: "2021-10-13T02:00:00+02:00", value: 803 },
    { time: "2021-10-14T02:00:00+02:00", value: 729 },
    { time: "2021-10-15T02:00:00+02:00", value: 774 },
    { time: "2021-10-16T02:00:00+02:00", value: 1191 },
    { time: "2021-10-17T02:00:00+02:00", value: 0 },
    { time: "2021-10-18T02:00:00+02:00", value: 655 },
    { time: "2021-10-19T02:00:00+02:00", value: 571 },
    { time: "2021-10-20T02:00:00+02:00", value: 576 },
    { time: "2021-10-21T02:00:00+02:00", value: 606 },
    { time: "2021-10-11T02:00:00+02:00", value: 506 },
    { time: "2021-10-12T02:00:00+02:00", value: 641 },
    { time: "2021-10-13T02:00:00+02:00", value: 803 },
    { time: "2021-10-14T02:00:00+02:00", value: 729 },
    { time: "2021-10-15T02:00:00+02:00", value: 774 },
    { time: "2021-10-16T02:00:00+02:00", value: 1191 },
    { time: "2021-10-17T02:00:00+02:00", value: 0 },
    { time: "2021-10-18T02:00:00+02:00", value: 655 },
    { time: "2021-10-19T02:00:00+02:00", value: 571 },
    { time: "2021-10-20T02:00:00+02:00", value: 576 },
    { time: "2021-10-21T02:00:00+02:00", value: 606 },
    { time: "2021-10-22T02:00:00+02:00", value: 676 },
    { time: "2021-10-23T02:00:00+02:00", value: 1306 },
    { time: "2021-10-24T02:00:00+02:00", value: 0 },
    { time: "2021-10-25T02:00:00+02:00", value: 671 },
    { time: "2021-10-26T02:00:00+02:00", value: 797 },
    { time: "2021-10-27T02:00:00+02:00", value: 666 },
    { time: "2021-10-28T02:00:00+02:00", value: 658 },
    { time: "2021-10-29T02:00:00+02:00", value: 678 },
    { time: "2021-10-30T02:00:00+02:00", value: 1211 },
    { time: "2021-10-31T02:00:00+02:00", value: 0 },
    { time: "2021-11-01T01:00:00+01:00", value: 0 },
    { time: "2021-11-02T01:00:00+01:00", value: 952 },
    { time: "2021-11-03T01:00:00+01:00", value: 641 },
  ];

  return (
    <DashboardLayout>
      <div className="flex flex-col xl:flex-row w-full gap-4">
        <Card className="w-full xl:w-3/4">
          <p className="text-xl font-semibold mb-4">Daily footfall</p>
          <div className="h-96 py-10">
            <BarChart
              data={data}
              XAxisDataKey="time"
              YAxisDataKey="value"
              bars={[{ dataKey: "value" }]}
              showTooltip
              shoowCartesianGrid
              showBrush
            />
          </div>
        </Card>
        <Card className="w-full xl:w-1/4">Graph settings</Card>
      </div>
    </DashboardLayout>
  );
};

export default AppDashboard;