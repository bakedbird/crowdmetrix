import { useDarkModeContextStore } from "@crowdmetrix/dark-mode";
import {
  Bar,
  BarChart as RechartsBarChart,
  Brush,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { slate } from "tailwindcss/colors";

type Props = {
  data: { [key: string]: string | number }[];
  bars: { dataKey: string; className?: string }[];
  XAxisDataKey?: string;
  YAxisDataKey?: string;
  showTooltip?: boolean;
  shoowCartesianGrid?: boolean;
  showBrush?: boolean;
};
const BarChart = ({
  data,
  bars,
  XAxisDataKey,
  YAxisDataKey,
  showTooltip,
  shoowCartesianGrid,
  showBrush,
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
        {bars.map(({ dataKey, className }) => (
          <Bar dataKey={dataKey} className={className ?? "fill-teal-500"} />
        ))}
        {showBrush && (
          <Brush
            dataKey="time"
            fill={slate[isDarkMode ? "800" : "50"]}
            stroke={slate[isDarkMode ? "400" : "400"]}
          />
        )}
      </RechartsBarChart>
    </ResponsiveContainer>
  );
};
export default BarChart;
