import { ROUTES } from "@crowdmetrix/router";
import { HomeIcon } from "@heroicons/react/24/outline";
import cn from "classnames";
import Link from "next/link";

type Props = { className?: string };

// Note: `rest` is used by Dropdown to pass the onClick handler that closes the menu.
const OpenApp = ({ className, ...rest }: Props) => (
  <Link
    href={ROUTES.APP_HOME}
    className={cn(
      "gap-2 items-center rounded-lg bg-teal-200 text-teal-600 hover:bg-teal-300 hover:text-teal-700",
      "dark:bg-teal-300 dark:text-teal-700 hover:dark:bg-teal-400 hover:dark:text-teal-800",
      className
    )}
    {...rest}
  >
    <HomeIcon className="h-5" />
    Open app
  </Link>
);

export default OpenApp;
