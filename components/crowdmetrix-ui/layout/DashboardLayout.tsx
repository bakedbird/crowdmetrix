import { useBodyHeightNoHeader } from "@crowdmetrix/hooks";
import { ComponentChildren } from "custom-types";
import DashboardMenu from "./components/DashboardMenu";

type Props = { children: ComponentChildren };

const DashboardLayout = ({ children }: Props) => {
  const height = useBodyHeightNoHeader();

  return (
    <div
      style={{ height }}
      className="grow flex flex-col md:flex-row lg:grid lg:grid-cols-12"
    >
      <DashboardMenu />
      <div className="p-4 md:py-8 w-full lg:col-span-9 xl:col-span-10 overflow-y-auto">
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
