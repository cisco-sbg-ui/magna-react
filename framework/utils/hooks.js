import {useEffect, useLayoutEffect, useRef, useState} from "react";

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
