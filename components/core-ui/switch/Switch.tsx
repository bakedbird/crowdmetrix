import { Switch as HUISwitch } from "@headlessui/react";
import cn from "classnames";

type Props = {
  enabled: boolean;
  onChangeEnabled: () => void;
  label: string;
  info?: string;
};

const Switch = ({ label, enabled, onChangeEnabled, info }: Props) => {
  return (
    <HUISwitch.Group as="div" className="mb-4 flex flex-col items-start">
      <div className="flex items-center gap-2">
        <HUISwitch
          checked={enabled}
          onChange={onChangeEnabled}
          className={cn(
            "relative inline-flex h-6 w-11 items-center rounded-full",
            enabled
              ? "bg-teal-500"
              : "bg-slate-200 dark:bg-slate-900 border dark:border-slate-600"
          )}
        >
          <span
            className={cn(
              "inline-block h-4 w-4 rounded-full bg-slate-50 dark:bg-slate-600 transition transform",
              enabled ? "translate-x-6" : "translate-x-1"
            )}
          />
        </HUISwitch>
        {label && <HUISwitch.Label>{label}</HUISwitch.Label>}
      </div>
      {info && (
        <HUISwitch.Label className="text-xs inline-block text-slate-500 dark:text-slate-400">
          {info}
        </HUISwitch.Label>
      )}
    </HUISwitch.Group>
  );
};
export default Switch;
