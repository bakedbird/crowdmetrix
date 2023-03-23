import { Listbox } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import cn from "classnames";

type DataItem = { key: string; value: string };

type Props = {
  data: DataItem[];
  selectedDataItem: DataItem;
  onChangeSelectedDataItem: (item: DataItem) => void;
  label: string;
  info?: string;
};

const Select = ({
  data,
  selectedDataItem,
  onChangeSelectedDataItem,
  label,
  info,
}: Props) => (
  <Listbox
    value={selectedDataItem}
    onChange={onChangeSelectedDataItem}
    as="div"
    by="key"
    className="mb-4 relative w-full"
  >
    <Listbox.Label>{label}</Listbox.Label>
    <Listbox.Button
      className={cn(
        "relative w-full rounded-lg py-2 pl-2 pr-8 border dark:border-slate-600",
        "bg-white dark:bg-slate-900"
      )}
    >
      <span className="block truncate text-left">{selectedDataItem.value}</span>
      <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
        <ChevronUpDownIcon
          className="h-5 w-5 text-slate-400"
          aria-hidden="true"
        />
      </span>
    </Listbox.Button>
    <Listbox.Options
      className={cn(
        "z-10 absolute mt-1 p-1 max-h-60 w-full overflow-auto rounded-lg py-1 shadow-md",
        "border dark:border-slate-500 bg-white dark:bg-slate-700"
      )}
    >
      {data.map((dataItem) => (
        <Listbox.Option
          key={dataItem.key}
          className={({ active }) =>
            cn("relative cursor-pointer py-2 pl-10 pr-4 rounded-md", {
              "bg-teal-100 dark:bg-teal-300 text-teal-600 dark:text-teal-600":
                active,
            })
          }
          value={dataItem}
        >
          {({ selected }) => (
            <>
              <span
                className={cn(
                  "block truncate",
                  selected ? "font-medium" : "font-normal"
                )}
              >
                {dataItem.value}
              </span>
              {selected && (
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-teal-600">
                  <CheckIcon className="h-5 w-5" aria-hidden="true" />
                </span>
              )}
            </>
          )}
        </Listbox.Option>
      ))}
    </Listbox.Options>
    {info && (
      <Listbox.Label className="text-xs inline-block text-slate-500 dark:text-slate-400">
        {info}
      </Listbox.Label>
    )}
  </Listbox>
);

export default Select;
