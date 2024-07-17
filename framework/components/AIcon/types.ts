import {Override} from "../../types";

export type AIconSize = number | "small" | "medium" | "large";

export type AIconProps = Override<
  React.ComponentPropsWithRef<"svg">,
  {
    /**
     * Overrides the default `aria-label`, "[icon_name] icon".
     */
    label?: string;
    /**
     * Adjusts margins if on the left side of text.
     */
    left?: boolean;
    /**
     * Adjusts margins if on the right side of text.
     */
    right?: boolean;
    /**
     * Sets a custom icon width.
     */
    size?: AIconSize;
  }
>;
