import cn from "classnames";
import { ComponentChildren } from "custom-types";

type Props = { children: ComponentChildren; onClick: () => void };

const Button = ({ children, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "bg-teal-500 hover:bg-teal-400 text-lg px-4 py-2 rounded-lg",
        "dark:bg-teal-600 dark:hover:bg-teal-700 dark:hover:text-slate-200"
      )}
    >
      {children}
    </button>
  );
};
export default Button;
