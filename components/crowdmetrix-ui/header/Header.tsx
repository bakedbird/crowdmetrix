import { Container } from "@core-ui/container";
import { Link } from "@core-ui/link";
import { Logo } from "@core-ui/logo";
import { ROUTES } from "@crowdmetrix/router";
import HeaderMenu from "./components/HeaderMenu";

const Header = () => (
  <header className="bg-slate-50 dark:bg-slate-800 md:border-b dark:md:border-b-slate-600 py-2">
    <Container className="flex justify-between items-center">
      <Link href={ROUTES.HOMEPAGE}>
        <Logo />
      </Link>
      <HeaderMenu />
    </Container>
  </header>
);

export default Header;
