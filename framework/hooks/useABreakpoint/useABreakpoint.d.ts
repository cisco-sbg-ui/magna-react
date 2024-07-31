import {breakpointThresholds} from "./useABreakpoint";

declare const useABreakpoint: () => {
  name: "xs" | "sm" | "md" | "lg" | "xl";
  width: number;
  height: number;
  xs: boolean;
  sm: boolean;
  md: boolean;
  lg: boolean;
  xl: boolean;
  xsOnly: boolean;
  smOnly: boolean;
  smAndDown: boolean;
  smAndUp: boolean;
  mdOnly: boolean;
  mdAndDown: boolean;
  mdAndUp: boolean;
  lgOnly: boolean;
  lgAndDown: boolean;
  lgAndUp: boolean;
  xlOnly: boolean;
};
export {breakpointThresholds};

export default useABreakpoint;
