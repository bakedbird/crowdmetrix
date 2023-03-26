import { DashboardLayout } from "@crowdmetrix-ui/layout";
import {
  AsyncFootfallContextActions,
  useFootfallContext,
} from "@crowdmetrix/footfall";
import { useEffect } from "react";
import FiltersCard from "./components/FiltersCard";
import FootfallGraphCard from "./components/FootfallGraphCard";

const AppDashboard = () => {
  const { store, dispatch } = useFootfallContext();

  useEffect(() => {
    AsyncFootfallContextActions.fetchDateRangeFootfallData(
      store.selectedDateRange
    )(dispatch);
  }, []);

  return (
    <DashboardLayout>
      <div className="flex flex-col xl:flex-row w-full gap-4">
        <FootfallGraphCard />
        <FiltersCard />
      </div>
    </DashboardLayout>
  );
};

export default AppDashboard;
