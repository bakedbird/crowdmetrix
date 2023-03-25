import cn from "classnames";
import { ComponentChildren } from "custom-types";

type Props = { children: ComponentChildren };
const ChartStatsCard = ({ children }: Props) => {
  return (
    <div
      className={cn(
        "grid grid-flow-row md:grid-flow-col grid-cols-2 md:grid-cols-4 gap-4",
        "border dark:border-slate-500 rounded-md bg-white dark:bg-slate-900/25 p-4"
      )}
    >
      {children}
    </div>
  );
};
export default ChartStatsCard;
