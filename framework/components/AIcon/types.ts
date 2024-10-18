import {Override} from "../../types";

export type AIconSize = number;

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
     * @defaultValue `24px``
     */
    size?: AIconSize;
    /**
     * Displays a background for status icons that are designed with a background.
     */
    withBg?: boolean;
  }
>;
