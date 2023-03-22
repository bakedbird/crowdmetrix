import cn from "classnames";
import { ComponentChildren } from "custom-types";

type Props = { children: ComponentChildren; className?: string };

const Container = ({ children, className }: Props) => (
  <div className={cn("container mx-auto px-4", className)}>{children}</div>
);

export default Container;
