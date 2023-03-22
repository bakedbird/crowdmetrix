import { useEffect } from "react";

const useEventListener = (
  type: keyof WindowEventMap,
  callback: (e: Event) => any
) => {
  useEffect(() => {
    window.addEventListener(type, callback);

    return () => {
      window.removeEventListener(type, callback);
    };
  }, [type, callback]);
};

export default useEventListener;
