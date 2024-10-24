import {Override} from "../../types";

export type ABadgeAlert = "info" | "warning" | "negative" | "positive";

export type ABadgeProps = Override<
  React.ComponentPropsWithRef<"div">,
  {
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
    /**
     * Sets the badge to notify style.
     *
     * @defaultValue `true`
     */
    notify?: boolean;

    /**
     * Sets the badge to counter style. Default is notify style.
     *
     * @defaultValue `false`
     */
    counter?: boolean;
    /**
     * Sets the badge to dot style. Default is notify style.
     *
     * @defaultValue `false`
     */
    dot?: boolean;
    alertType?: ABadgeAlert;
  }
>;

export declare type TBadgeSpanProps = {
  ["aria-atomic"]: boolean;
  ["aria-label"]: string;
  ["aria-live"]: "polite" | "assertive" | "off";
  className: string;
  role: string;
};
