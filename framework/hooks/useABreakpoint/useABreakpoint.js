import {useState} from "react";

import {useIsomorphicLayoutEffect} from "../../utils/hooks";

export const breakpointThresholds = {
  xs: 420,
  sm: 960,
  md: 1280,
  lg: 1680,
  xl: 2080
};

const useABreakpoint = () => {
  const [resizeTimeout, setResizeTimeout] = useState(0);
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);

  useIsomorphicLayoutEffect(() => {
    window.addEventListener("resize", onResize, {passive: true});

    update();
  }, []);

  const scrollBarWidth = 20;

  const onResize = () => {
    clearTimeout(resizeTimeout);
    setResizeTimeout(window.setTimeout(update, 200));
  };

  const update = () => {
    setHeight(getClientHeight());
    setWidth(getClientWidth());
  };

  const getClientWidth = () => {
    return Math.max(
      document.documentElement.clientWidth,
      window.innerWidth || 0
    );
  };

  const getClientHeight = () => {
    return Math.max(
      document.documentElement.clientHeight,
      window.innerHeight || 0
    );
  };

  const xs = width < breakpointThresholds.xs;
  const sm = width < breakpointThresholds.sm && !xs;
  const md = width < breakpointThresholds.md - scrollBarWidth && !(sm || xs);
  const lg =
    width < breakpointThresholds.lg - scrollBarWidth && !(md || sm || xs);
  const xl = width >= breakpointThresholds.lg - scrollBarWidth;
  const name = xs ? "xs" : sm ? "sm" : md ? "md" : lg ? "lg" : "xl";

  return {
    name,
    height,
    width,
    xs,
    sm,
    md,
    lg,
    xl,
    xsOnly: xs,
    smOnly: sm,
    smAndDown: (xs || sm) && !(md || lg || xl),
    smAndUp: !xs && (sm || md || lg || xl),
    mdOnly: md,
    mdAndDown: (xs || sm || md) && !(lg || xl),
    mdAndUp: !(xs || sm) && (md || lg || xl),
    lgOnly: lg,
    lgAndDown: (xs || sm || md || lg) && !xl,
    lgAndUp: !(xs || sm || md) && (lg || xl),
    xlOnly: xl
  };
};

export default useABreakpoint;
