import { ROUTES } from "@crowdmetrix/router";
import cn from "classnames";
import DashboardMenuItem from "./DashboardMenuItem";

const DashboardMenu = () => (
  <div
    className={cn(
      "flex flex-row gap-2 p-2 justify-around",
      "lg:col-span-3 xl:col-span-2 md:flex-col md:py-8 md:justify-start",
      "border-b dark:border-b-slate-600 bg-slate-50 dark:bg-slate-800",
      "md:border-r md:dark:border-r-slate-600"
    )}
  >
    <DashboardMenuItem href={ROUTES.APP_HOME} icon="HomeIcon">
      Dashboard
    </DashboardMenuItem>
    <DashboardMenuItem href={ROUTES.APP_IMPORT} icon="ArrowUpOnSquareIcon">
      Import
    </DashboardMenuItem>
  </div>
);

export default DashboardMenu;
