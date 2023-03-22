import { useEffect, useState } from "react";
import useEventListener from "./use-event-listener";

const useBodyHeightNoHeader = () => {
  const [bodyHeight, setBodyHeight] = useState(0);

  const calculateBodyHeight = () => {
    const headerHeight = document.querySelector("header")?.offsetHeight ?? 0;
    const windowHeight = window.innerHeight;

    setBodyHeight(windowHeight - headerHeight);
  };

  useEffect(() => {
    calculateBodyHeight();
  }, []);

  useEventListener("resize", calculateBodyHeight);

  return bodyHeight;
};

export default useBodyHeightNoHeader;
