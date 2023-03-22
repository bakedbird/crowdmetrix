import { Seo } from "@core-ui/seo";
import { Footer } from "@crowdmetrix-ui/footer";
import { Header } from "@crowdmetrix-ui/header";
import { ROUTES } from "@crowdmetrix/router";
import { ComponentChildren } from "custom-types";
import { useRouter } from "next/router";

type Props = { children: ComponentChildren };

const PageLayout = ({ children }: Props) => {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col">
      <Seo />
      <Header />
      <main className="grow flex flex-col">{children}</main>
      {!router.asPath.startsWith(ROUTES.APP_HOME) && <Footer />}
    </div>
  );
};
export default PageLayout;
