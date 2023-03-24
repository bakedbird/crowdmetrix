import { DashboardLayout } from "@crowdmetrix-ui/layout";
import { useFootfallContext } from "@crowdmetrix/footfall";
import { AsyncFootfallContextActions } from "@crowdmetrix/footfall/context/actions";
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

  // const filterDateRange = () => {
  //   setData((prev) =>
  //     prev.filter((p) => {
  //       let start = "2021-09-17T02:00:00+02:00";
  //       let end = "2021-09-17T02:09:00+02:00";

  //       return (
  //         new Date(p.time) >= new Date(start) &&
  //         new Date(p.time) <= new Date(end)
  //       );
  //     })
  //   );
  // };

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
