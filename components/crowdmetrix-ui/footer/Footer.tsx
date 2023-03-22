import { Container } from "@core-ui/container";
import { Link } from "@core-ui/link";
import { Logo } from "@core-ui/logo";
import { ROUTES } from "@crowdmetrix/router";

const Footer = () => (
  <footer className="py-10 border-t dark:border-t-slate-600 bg-slate-50 dark:bg-slate-800">
    <Container className="grid grid-cols-1 lg:grid-cols-3 gap-y-8">
      <div>
        <Link href={ROUTES.HOMEPAGE}>
          <Logo className="w-1/2 lg:w-3/4 xl:w-1/2  h-auto" />
        </Link>
        <span className="text-sm">
          &copy; {new Date().getFullYear()} - All rights reserved
        </span>
      </div>
      <div className="grid sm:grid-cols-2 col-span-2 gap-8">
        <nav className="grid gap-2">
          <p className="uppercase font-semibold text-sm mb-2">About us</p>
          <Link href={ROUTES.HOMEPAGE}>About crowdmetrix</Link>
          <Link href={ROUTES.HOMEPAGE}>Careers</Link>
          <Link href={ROUTES.HOMEPAGE}>News</Link>
        </nav>
        <nav className="grid gap-2">
          <p className="uppercase font-semibold text-sm mb-2">Support</p>
          <Link href={ROUTES.HOMEPAGE}>Help centre</Link>
          <Link href={ROUTES.HOMEPAGE}>Terms of Service</Link>
          <Link href={ROUTES.HOMEPAGE}>Privacy policy</Link>
        </nav>
      </div>
    </Container>
  </footer>
);

export default Footer;
