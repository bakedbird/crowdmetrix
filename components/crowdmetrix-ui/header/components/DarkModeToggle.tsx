import {
  DarkModeContextActions,
  useDarkModeContext,
} from "@crowdmetrix/dark-mode";
import { MoonIcon } from "@heroicons/react/24/outline";
import cn from "classnames";

const DarkModeToggle = () => {
  const { store, dispatch } = useDarkModeContext();

  const onClickToggleDarkMode = () =>
    dispatch(DarkModeContextActions.setIsDarkMode());

  return (
    <button
      className="px-3 py-2 w-full flex items-center"
      onClick={onClickToggleDarkMode}
    >
      <MoonIcon className="h-5 mr-2" />
      <div className="flex justify-between items-center grow">
        <span>Dark theme</span>
        <div
          className={cn(
            "flex items-center w-10 p-0.5 rounded-full",
            store.isDarkMode ? "bg-emerald-500 justify-end" : "bg-slate-200"
          )}
        >
          <span
            aria-hidden="true"
            className="h-4 w-4 rounded-full bg-slate-50"
          />
        </div>
      </div>
    </button>
  );
};
export default DarkModeToggle;
