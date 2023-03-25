import { Icon } from "@core-ui/icon";
import cn from "classnames";
import { IconName } from "custom-types";
import { useEffect, useState } from "react";

type Props = {
  label: string;
  current: number | string;
  prev: number | string;
  prevBadWhen: "up" | "down" | "none";
  hidePrev?: boolean;
};
const ChartStatItem = ({
  label,
  current,
  prev,
  prevBadWhen,
  hidePrev,
}: Props) => {
  const [isBad, setIsBad] = useState(false);
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    setIsBad(determineIfPrevIsBad());
    setPercent(calculatePercentageDiff());
  }, [current, prev]);

  const determineIfPrevIsBad = () => {
    switch (prevBadWhen) {
      // In both cases, we check if the values are a number first to compare
      //them as there is no point in comparing strings in this context
      case "up":
        return !isNaN(+prev) && !isNaN(+current) && prev > current;
      case "down":
        return !isNaN(+prev) && !isNaN(+current) && prev < current;

      default:
        return false;
    }
  };

  const calculatePercentageDiff = () => {
    if (
      typeof prev === "string" ||
      typeof current === "string" ||
      prev === current ||
      // Ensure at least one number is > 0
      !(prev + current)
    )
      return 0;

    if ((!prev && current) || (prev && !current))
      return Math.abs(prev + current) * 100;

    // https://www.wallstreetmojo.com/relative-change/
    return (Math.abs(current - prev) / Math.abs(prev)) * 100;
  };

  const getPercentageDiffIcon = (): IconName => {
    if (prev === current) return "MinusSmallIcon";
    if ((prevBadWhen === "up" && isBad) || (prevBadWhen === "down" && !isBad))
      return "ArrowSmallDownIcon";
    if ((prevBadWhen === "up" && !isBad) || (prevBadWhen === "down" && isBad))
      return "ArrowSmallUpIcon";
    return "MinusSmallIcon";
  };

  return (
    <div>
      <p className="font-semibold text-sm">{label}</p>
      <p className="text-2xl">{current || "-"}</p>
      <p
        className={cn("text-xs", {
          hidden: hidePrev,
          "text-rose-400": isBad,
          "text-teal-400": !isBad && prevBadWhen !== "none" && prev !== current,
        })}
      >
        {prevBadWhen !== "none" &&
        typeof prev === "number" &&
        typeof current === "number" ? (
          <span className="flex items-center">
            <Icon icon={getPercentageDiffIcon()} className="h-3.5" />
            {percent.toFixed(2)}% ({prev})
          </span>
        ) : (
          prev
        )}
      </p>
    </div>
  );
};
export default ChartStatItem;
