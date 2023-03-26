import cn from "classnames";
import { toast } from "react-toastify";

type ToastType = "success" | "error";

const baseClasses = "!bg-white dark:!bg-slate-700 !rounded-lg";

const successOptios = {
  className: cn(baseClasses, "!text-teal-600 dark:!text-teal-500"),
  progressClassName: "!bg-teal-300 dark:!bg-teal-600",
};

const errorOptions = {
  className: cn(baseClasses, "!text-rose-600 dark:!text-rose-500"),
  progressClassName: "!bg-rose-300 dark:!bg-rose-600",
};

export default (message: string, type: ToastType) =>
  toast(message, {
    ...(type === "success" ? successOptios : errorOptions),
    icon: false,
    progressStyle: { background: "none" },
  });
