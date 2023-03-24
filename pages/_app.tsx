import { PageLayout } from "@crowdmetrix-ui/layout";
import { DarkModeContextProvider } from "@crowdmetrix/dark-mode";
import type { AppProps } from "next/app";
import "react-toastify/dist/ReactToastify.css";
import "../styles/date-range-picker.css";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <DarkModeContextProvider>
      <PageLayout>
        <Component {...pageProps} />
      </PageLayout>
    </DarkModeContextProvider>
  );
}
