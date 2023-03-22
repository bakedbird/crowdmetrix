import { Icon } from "@core-ui/icon";
import { Link } from "@core-ui/link";
import cn from "classnames";
import { Href, IconName } from "custom-types";
import { useRouter } from "next/router";

type Props = { href: Href; icon: IconName; children: string };

const DashboardMenuItem = ({ href, icon, children }: Props) => {
  const router = useRouter();

  return (
    <Link
      href={href}
      className={cn(
        "flex justify-start items-center gap-4 px-3 py-3 rounded-xl text-lg",
        "hover:bg-teal-100 dark:hover:bg-teal-300 hover:text-teal-600 dark:hover:text-teal-600",
        {
          "bg-teal-100 dark:bg-teal-300 text-teal-600 dark:text-teal-600":
            router.asPath === href,
        }
      )}
    >
      <Icon icon={icon} className="h-6" />
      <span className="hidden lg:inline">{children}</span>
    </Link>
  );
};
export default DashboardMenuItem;
