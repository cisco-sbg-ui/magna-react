import {useCallback, useEffect, useRef, useState} from "react";

const useToggle = (openDelay = 300, closeDelay, canOpen, onOpen, onClose) => {
  const [isOpen, setIsOpen] = useState(false);
  const timeout = useRef();
  const openTimeout = useRef();

  const open = useCallback(() => {
    timeout.current && clearTimeout(timeout.current);

    timeout.current = setTimeout(() => {
      const canTooltipOpen = canOpen ? canOpen() : true;

      if (!canTooltipOpen) {
        return;
      }

      openTimeout.current && clearTimeout(openTimeout.current);

      setIsOpen(true);

      // To allow for a delayed onOpen trigger, keep track if there's a
      // timeout and clear it on new opens and close
      openTimeout.current = onOpen && onOpen();
    }, openDelay);
  }, [openDelay, timeout, canOpen]);

  const close = useCallback(() => {
    timeout.current && clearTimeout(timeout.current);

    timeout.current = setTimeout(
      () => {
        openTimeout.current && clearTimeout(openTimeout.current);
        setIsOpen(false);
        onClose && onClose();
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
