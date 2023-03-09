import {useMemo, useRef} from "react";

const isValidThreshold = (threshold) => {
  // A threshold does not have to be passed; the native
  // Intersection Observer API also takes "null" as a valid
  // parameter
  if (!threshold || (threshold <= 1 && threshold >= 0)) {
    return true;
  }
  return false;
};

/**
 * Creates an instance of an IntersectionObserver
 * to be used between renders.
 * @returns callback ref to be passed to a React element
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
 * @see https://reactjs.org/docs/refs-and-the-dom.html#callback-refs
 */
const defaultConfig = {
  triggerOnce: false
};

const useInView = (cb, config = defaultConfig) => {
  const {triggerOnce = false, ...opts} = config;
  // Prevent runtime errors associated with passing
  // invalid threshold values to the intersection
  // observer
  const validatedThreshold = useMemo(() => {
    const isValid = isValidThreshold(opts.threshold);
    if (!isValid) {
      console.warn(
        "Invalid threshold passed for intersection observer; must be between 0 and 1. Defaulting to 0."
      );
      return 0;
    }
    return opts.threshold;
  }, [opts?.threshold]);

  const observerConfig = useMemo(() => {
    return {
      ...opts,
      threshold: validatedThreshold
    };
  }, [opts, validatedThreshold]);

  const intersectionCount = useRef(0);
  const observedNodeRef = useRef();
  const observerRef = useRef();

  const handleChange = ([entry]) => {
    if (triggerOnce && intersectionCount.current === 1) {
      return;
    }
    if (entry.isIntersecting) {
      intersectionCount.current += 1;
    }
    if (typeof cb === "function") {
      cb({inView: entry.isIntersecting, entry});
    }
  };

  const unobserveTrackedRef = () => {
    if (!observedNodeRef.current) {
      return;
    }
    observerRef.current.unobserve(observedNodeRef.current);
    observerRef.current.disconnect();
  };
  const observeNode = (node) => {
    // Stay in sync with the DOM node reference
    // on the screen
    if (node !== observedNodeRef.current) {
      intersectionCount.current = 0;
    }
    observerRef.current = new IntersectionObserver(
      handleChange,
      observerConfig
    );
    observedNodeRef.current = node;
    observerRef.current.observe(node);
  };

  const callbackRef = (node) => {
    node ? observeNode(node) : unobserveTrackedRef();
  };

  return callbackRef;
};

export default useInView;
