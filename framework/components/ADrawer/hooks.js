import {useEffect, useState} from "react";
import usePopupQuickExit from "../../hooks/usePopupQuickExit/usePopupQuickExit";

export const useDrawerToggle = (drawerRef, delay = 300) => {
  const [isDrawerOpen, setIsOpen] = useState(false);
  let handler;

  usePopupQuickExit({
    popupRef: drawerRef,
    isEnabled: isDrawerOpen,
    onExit: () => setIsOpen(false)
  });

  useEffect(() => {
    if (isDrawerOpen) {
      setTimeout(() => {
        drawerRef?.current?.focus();
      }, delay);
    }
  }, [isDrawerOpen, drawerRef, delay]);

  const setDrawerOpen = (open) => {
    handler && clearTimeout(handler);

    if (!open) {
      setIsOpen(open);
    } else {
      setIsOpen(false);

      handler = setTimeout(() => {
        setIsOpen(open);
      }, delay);
    }
    return () => {
      handler && clearTimeout(handler);
    };
  };

  return {setDrawerOpen, isDrawerOpen};
};
