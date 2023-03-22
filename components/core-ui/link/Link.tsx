import cn from "classnames";
import { ComponentChildren, Href } from "custom-types";
import NextLink from "next/link";

type Props = {
  href: Href;
  children: ComponentChildren;
  className?: string;
};

const Link = ({ className, ...props }: Props) => (
  <NextLink
    className={cn("hover:text-teal-500 hover:dark:text-teal-400", className)}
    {...props}
  />
);

export default Link;
