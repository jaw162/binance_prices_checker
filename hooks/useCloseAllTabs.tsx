import React, { useEffect, useCallback } from "react";

export const useCloseAllTabs = (func: (arg: {}) => void) => {
  const handleClick = useCallback(
    (e: MouseEvent) => {
      const classList = Array(e.target.classList as HTMLCollectionBase);
      func({});
    },
    [func]
  );

  useEffect(() => {
    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, [func, handleClick]);
};
