import {Override} from "../../types";

export type ABadgeLevel = "error" | "info" | "success";

export type ABadgeProps = Override<
  React.ComponentPropsWithRef<"div">,
  {
    /**
     * Specify the checkbox color. Accepts unknown stock color or CSS color value.
     */
    color?: string;
    /**
     * The badge content.
     */
    content?: React.ReactNode;
    /**
     * Toggles whether the badge displays.
     */
    display?: boolean;
    /**
     * Use to override the default `aria-label`.
     */
    label?: string;
    /**
     * Set the severity level, ignores the color prop
     */
    level?: ABadgeLevel;
    small?: boolean;
    large?: boolean;
  }
>;
