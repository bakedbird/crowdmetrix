import { AppDashboard } from "@cm-apps/app-dashboard";
import { FootfallContextProvider } from "@crowdmetrix/footfall";

const AppDashboardIndexPage = () => (
  <FootfallContextProvider>
    <AppDashboard />
  </FootfallContextProvider>
);

export default AppDashboardIndexPage;
