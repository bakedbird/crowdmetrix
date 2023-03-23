import { Switch as HUISwitch } from "@headlessui/react";
import cn from "classnames";
import { useState } from "react";

type Props = {
  // enabled: boolean;
  // onChangeEnabled: () => void;
  label: string;
  info?: string;
};

const Switch = ({ label, info }: Props) => {
  const [enabled, setEnabled] = useState(false);

  return (
    <HUISwitch.Group as="div" className="mb-4 flex flex-col items-start">
      <div className="flex items-center gap-2">
        <HUISwitch
          checked={enabled}
          onChange={setEnabled}
          className={cn(
            "relative inline-flex h-6 w-11 items-center rounded-full",
            enabled ? "bg-teal-500" : "bg-slate-200 dark:bg-slate-500"
          )}
        >
          <span
            className={cn(
              "inline-block h-4 w-4 rounded-full bg-slate-50 dark:bg-slate-800 transition transform",
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
