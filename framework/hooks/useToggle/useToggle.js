import {useCallback, useRef, useState} from "react";

const useToggle = (openDelay = 400, closeDelay = 0) => {
  const [isOpen, setIsOpen] = useState(false);
  const timeout = useRef();

  const open = useCallback(() => {
    timeout.current && clearTimeout(timeout.current);

    timeout.current = setTimeout(() => {
      setIsOpen(true);
    }, openDelay);
  }, [openDelay, timeout]);

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
    isOpen ? close : open;
  }, [isOpen, open, close]);

  return {isOpen, open, close, toggle};
};

export default useToggle;
