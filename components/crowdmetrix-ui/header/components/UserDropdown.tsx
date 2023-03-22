import { Avatar } from "@core-ui/avatar";
import { Dropdown } from "@core-ui/dropdown";
import { ROUTES } from "@crowdmetrix/router";
import { useRouter } from "next/router";
import DarkModeToggle from "./DarkModeToggle";
import OpenApp from "./OpenApp";

const UserDropdown = () => {
  const router = useRouter();

  return (
    <Dropdown button={<Avatar />}>
      {!router.asPath.includes(ROUTES.APP_HOME) && (
        <OpenApp className="flex sm:hidden py-2 px-2.5" />
      )}
      <DarkModeToggle />
    </Dropdown>
  );
};
export default UserDropdown;
