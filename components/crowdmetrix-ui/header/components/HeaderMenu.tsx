import { ROUTES } from "@crowdmetrix/router";
import { useRouter } from "next/router";
import OpenApp from "./OpenApp";
import UserDropdown from "./UserDropdown";

const HeaderMenu = () => {
  const router = useRouter();

  return (
    <div className="flex gap-4 items-center">
      {!router.asPath.includes(ROUTES.APP_HOME) && (
        <OpenApp className="hidden sm:flex py-1 px-2.5" />
      )}
      <UserDropdown />
    </div>
  );
};

export default HeaderMenu;
