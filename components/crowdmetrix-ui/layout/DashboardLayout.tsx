import { ComponentChildren } from "custom-types";
import DashboardMenu from "./components/DashboardMenu";

type Props = { children: ComponentChildren };

const DashboardLayout = ({ children }: Props) => (
  <div className="grow flex flex-col md:flex-row lg:grid lg:grid-cols-12">
    <DashboardMenu />
    <div className="p-4 md:py-8 w-full lg:col-span-9 xl:col-span-10">
      {children}
    </div>
  </div>
);

export default DashboardLayout;
