import { useEffect, useState } from "react";

export function useWindowSize(width = 0, height = 0) {
  const [windowSize, setWindowSize] = useState({
    width: width as any,
    height: height as any
  });
  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowSize;
}
