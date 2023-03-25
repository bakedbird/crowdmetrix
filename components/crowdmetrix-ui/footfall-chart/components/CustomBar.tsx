import { Rectangle } from "recharts";

type Props = {
  dataKey: string;
  average?: number;
  showAverageComparison?: boolean;

  // NOTE: This generic is used to destructure the rest
  // of the props passed from the recharts Bar component
  [key: string]: any;
};

const CustomBar = ({
  dataKey,
  average,
  showAverageComparison,

  ...props
}: Props) => (
  <Rectangle
    {...props}
    className={
      average && showAverageComparison && props[dataKey] < average
        ? "fill-rose-500"
        : "fill-teal-500"
    }
  />
);

export default CustomBar;
