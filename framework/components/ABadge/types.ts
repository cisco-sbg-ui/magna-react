import {Override} from "../../types";

export type ABadgeLevel = "error" | "info" | "success";

export type ABadgeProps = Override<
  React.ComponentPropsWithRef<"div">,
  {
    /**
     * Specify the checkbox color. Accepts unknown stock color or CSS color value.
     *
     * TODO type this is incorrect and instead uses a custom runtime validation function. We need to figure this one out.
     */
    color?: string;
    /**
     * The badge content.
     */
    content?: React.ReactNode;
    /**
     * Toggles whether the badge displays.
     *
     * @defaultValue `true`
     */
    display?: boolean;
    /**
     * Use to override the default `aria-label`.
     *
     * @defaultValue `"badge"`
     */
    label?: string;
    /**
     * Set the severity level, ignores the color prop
     *
     * @defaultValue `"error"`
     */
    level?: ABadgeLevel;
    /**
     * Size of the badge.
     *
     * @defaultValue `medium`
     */
    small?: boolean;
    /**
     * Size of the badge.
     *
     * @defaultValue `medium`
     */
    medium?: boolean;
    /**
     * Size of the badge.
     *
     * @defaultValue `medium`
     */
    large?: boolean;
    dot?: boolean;
    counter?: boolean;
    alertIcon?: string;
  }
>;
