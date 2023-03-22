import cn from "classnames";
import { ComponentChildren } from "custom-types";

type Props = { children: ComponentChildren; className?: string };

const Card = ({ children, className }: Props) => (
  <div
    className={cn(
      "rounded-2xl p-4 w-full bg-slate-50 border dark:bg-slate-800 dark:border-slate-600",
      className
    )}
  >
    {children}
  </div>
);

export default Card;
