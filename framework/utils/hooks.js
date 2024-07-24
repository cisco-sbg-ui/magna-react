import {useEffect, useLayoutEffect, useRef, useState} from "react";

import {throttle} from "./helpers";

export const useCombinedRefs = (...refs) => {
  const targetRef = useRef();

  useEffect(() => {
    refs.forEach((ref) => {
      if (!ref) return;

      if (typeof ref === "function") {
        ref(targetRef.current);
      } else {
        ref.current = targetRef.current;
      }
    });
  }, [refs]);

  return targetRef;
};

export const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export const useDelayUnmount = ({isEnabled = true, isOpen, delayTime}) => {
  const timeout = useRef();
  const [shouldRender, setShouldRender] = useState(false);

  useLayoutEffect(() => {
    if (!isEnabled) {
      return;
    }
    if (isOpen && !shouldRender) {
      setShouldRender(true);
    } else if (!isOpen && shouldRender) {
      timeout.current = setTimeout(() => {
        setShouldRender(false);
        clearTimeout(timeout.current);
      }, delayTime);
    }
    return () => clearTimeout(timeout.current);
  }, [isOpen, delayTime, shouldRender, isEnabled]);

  return isEnabled ? shouldRender : isOpen;
};

export const useResizeObserver = (containerRef) => {
  const [width, setWidth] = useState();
  const [height, setHeight] = useState();
  useEffect(() => {
    if (!containerRef.current) {
      return;
    }
    const resizeObserver = new ResizeObserver(() => {
      if (!containerRef.current) {
        return;
      }
      if (containerRef.current?.offsetWidth !== width) {
        setWidth(containerRef.current.offsetWidth);
      }
      if (containerRef.current?.offsetHeight !== height) {
        setHeight(containerRef.current.offsetHeight);
      }
    });

    resizeObserver.observe(containerRef.current);

    return function cleanup() {
      resizeObserver.disconnect();
    };
  }, [containerRef, width, height]);
  return {
    width,
    height
  };
};

export const usePrevious = (value) => {
  const ref = useRef();

  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
};

export const useHasScrolled = (enabled, callback) => {
  const _tickRef = useRef();

  useEffect(() => {
    if (!enabled || !callback) {
      return;
    }

    const handler = () => {
      const lastKnownScrollPosition = window.scrollY;

      if (!_tickRef.current) {
        window.requestAnimationFrame(() => {
          throttle(callback(lastKnownScrollPosition));
          _tickRef.current = false;
        });

        _tickRef.current = true;
      }
    };

    window.addEventListener("scroll", handler, true);

    return () => {
      window.removeEventListener("scroll", handler, true);
    };
  }, [enabled, callback]);
};
