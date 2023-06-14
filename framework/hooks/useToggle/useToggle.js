import {useCallback, useEffect, useRef, useState} from "react";

const useToggle = (openDelay = 400, closeDelay, canOpen) => {
  const [isOpen, setIsOpen] = useState(false);
  const timeout = useRef();

  const open = useCallback(() => {
    timeout.current && clearTimeout(timeout.current);

    timeout.current = setTimeout(() => {
      const canTooltipOpen = canOpen ? canOpen() : true;
      canTooltipOpen && setIsOpen(true);
    }, openDelay);
  }, [openDelay, timeout, canOpen]);

  const close = useCallback(() => {
    timeout.current && clearTimeout(timeout.current);

    timeout.current = setTimeout(
      () => {
        setIsOpen(false);
      },
      // When closeDelay is not provided, calculated
      // to be shorter to avoid multiple tooltips on
      // screen
      closeDelay ?? openDelay / 2
    );
  }, [closeDelay, openDelay, timeout]);

  const toggle = useCallback(() => {
    isOpen ? close() : open();
  }, [isOpen, open, close]);

  useEffect(() => {
    return () => {
      timeout.current && clearTimeout(timeout.current);
    };
  }, [timeout]);

  return {isOpen, open, close, toggle};
};

export default useToggle;
