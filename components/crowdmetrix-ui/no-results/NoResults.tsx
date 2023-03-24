import NoResultsImage from "./NoResultsImage";

type Props = {
  title: string;
  subtitle: string;
};
const NoResults = ({ title, subtitle }: Props) => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <p className="font-semibold text-2xl">{title}</p>
      {subtitle && <p className="text-lg mb-10">{subtitle}</p>}
      <NoResultsImage />
    </div>
  );
};
export default NoResults;
