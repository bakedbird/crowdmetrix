import { useDarkModeContextStore } from "@crowdmetrix/dark-mode";
import {
  Bar,
  BarChart as RechartsBarChart,
  Brush,
  CartesianGrid,
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
  bars: { dataKey: string; fillClassName?: string }[];
  XAxisDataKey?: string;
  YAxisDataKey?: string;
  showTooltip?: boolean;
  shoowCartesianGrid?: boolean;
  showBrush?: boolean;
  average?: number;
  showAverageComparison?: boolean;
  showAverageLine?: boolean;
};
const BarChart = ({
  data,
  bars,
  XAxisDataKey,
  YAxisDataKey,
  showTooltip,
  shoowCartesianGrid,
  showBrush,
  average,
  showAverageComparison,
  showAverageLine,
}: Props) => {
  const { isDarkMode } = useDarkModeContextStore();

  return (
    <ResponsiveContainer>
      <RechartsBarChart data={data}>
        {shoowCartesianGrid && (
          <CartesianGrid
            stroke={slate[isDarkMode ? "600" : "300"]}
            strokeDasharray={5}
          />
        )}
        {XAxisDataKey && (
          <XAxis
            stroke={slate[isDarkMode ? "300" : "700"]}
            dataKey={XAxisDataKey}
          />
        )}
        {YAxisDataKey && (
          <YAxis
            stroke={slate[isDarkMode ? "300" : "700"]}
            dataKey={YAxisDataKey}
          />
        )}
        {showTooltip && (
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
        )}
        {bars.map(({ dataKey, fillClassName }, idx) => (
          <Bar
            key={`bar-${idx}`}
            dataKey={"value"}
            shape={
              // Note: Recharts has a bug when using the built-in Cell component
              // in combination with the Brush. Specifically, when the Brush is
              // shrinked to narrow down the shown data, the bar indices are not
              // updated. We use a custom shape to allow the user to differentiate
              // the bg colour of the bar based on the average, and avoid that bug
              <CustomBar
                dataKey={dataKey}
                average={average}
                showAverageComparison={showAverageComparison}
                className={fillClassName}
              />
            }
          />
        ))}
        {showBrush && (
          <Brush
            dataKey="time"
            fill={slate[isDarkMode ? "800" : "50"]}
            stroke={slate["400"]}
          />
        )}
        {average && showAverageLine && (
          <ReferenceLine
            y={average}
            stroke={slate[isDarkMode ? "100" : "900"]}
            strokeDasharray="15 5"
          />
        )}
      </RechartsBarChart>
    </ResponsiveContainer>
  );
};
export default BarChart;
