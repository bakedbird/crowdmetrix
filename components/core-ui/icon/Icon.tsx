import * as OutlineIcons from "@heroicons/react/24/outline";
import * as SolidIcons from "@heroicons/react/24/solid";
import { IconName } from "custom-types";

type Props = {
  icon: IconName;
  className?: string;
  type?: "solid" | "outline";
};

const Icon = ({ icon, className, type = "outline" }: Props) => {
  const HeroIcon = type === "outline" ? OutlineIcons[icon] : SolidIcons[icon];

  return <HeroIcon className={className} />;
};

export default Icon;
