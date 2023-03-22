import { Card } from "@core-ui/card";
import { DashboardLayout } from "@crowdmetrix-ui/layout";

const AppDashboard = () => (
  <DashboardLayout>
    <div className="flex flex-col lg:flex-row w-full gap-4">
      <Card className="w-fulfl lg:w-3/4">Graph here</Card>
      <Card className="w-fullf lg:w-1/4">Graph settings</Card>
    </div>
  </DashboardLayout>
);

export default AppDashboard;
