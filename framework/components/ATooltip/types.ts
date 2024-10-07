import {AFloatingBaseProps} from "../AFloatingBase/types";

export type ATooltipProps = Omit<
  AFloatingBaseProps,
  "trigger" | "interactive"
> & {
  /**
   * Override the default max-width
   */
  maxWidth?: string;
};
