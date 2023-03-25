import { useDarkModeContextStore } from "@crowdmetrix/dark-mode";
import {
  Bar,
  Brush,
  CartesianGrid,
  ComposedChart,
  Line,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { slate } from "tailwindcss/colors";
import CustomBar from "./components/CustomBar";

type Props = {
  data: { [key: string]: string | number }[];
  comparisonData?: { [key: string]: string | number }[];
  average?: number;
  showAverageComparison?: boolean;
  showAverageLine?: boolean;
};
const FootfallChart = ({
  data,
  comparisonData,
  average,
  showAverageComparison,
  showAverageLine,
}: Props) => {
  const { isDarkMode } = useDarkModeContextStore();

  // Create a new dataset that adds the 'comparisonData' to the data if it exists.
  // In this case, we can show a line along with the bar to compare the data
  const dataSets = data.map((dataItem, idx) => ({
    data: dataItem.value,
    ...(comparisonData?.length
      ? { comparisonData: comparisonData[idx]?.value }
      : {}),
    ...dataItem,
  }));

  return (
    <div className="h-96 py-10">
      <ResponsiveContainer>
        <ComposedChart data={dataSets}>
          <XAxis dataKey="time" stroke={slate[isDarkMode ? "300" : "700"]} />
          <YAxis stroke={slate[isDarkMode ? "300" : "700"]} />
          <CartesianGrid
            vertical={false}
            stroke={slate[isDarkMode ? "600" : "300"]}
            strokeDasharray="10 15"
          />
          <Tooltip
            cursor={{ fill: slate[isDarkMode ? "700" : "200"] }}
            contentStyle={{
              backgroundColor: slate[isDarkMode ? "700" : "50"],
              borderColor: slate[isDarkMode ? "500" : "300"],
              borderRadius: ".75rem",
            }}
            itemStyle={{
              textTransform: "capitalize",
              color: slate[isDarkMode ? "300" : "700"],
            }}
            labelClassName="text-teal-500 font-semibold"
          />

          <Bar
            dataKey={"data"}
            shape={
              // Note: Recharts has a bug when using the built-in Cell component
              // in combination with the Brush. Specifically, when the Brush is
              // shrinked to narrow down the shown data, the bar indices are not
              // updated. We use a custom shape to allow the user to differentiate
              // the bg colour of the bar based on the average, and avoid that bug
              <CustomBar
                dataKey={"data"}
                average={average}
                showAverageComparison={showAverageComparison}
              />
            }
          />
          <Line dataKey={"comparisonData"} stroke={slate[500]} />

          <Brush
            dataKey="time"
            fill={slate[isDarkMode ? "800" : "50"]}
            stroke={slate["400"]}
          />

          {average && showAverageLine && (
            <ReferenceLine
              y={average}
              stroke={slate[isDarkMode ? "100" : "900"]}
              strokeDasharray="15 5"
            />
          )}
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};
export default FootfallChart;
