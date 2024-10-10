import {Override} from "../../types";

export type AEmptyStateVariant =
  | "success" // deprecated
  | "positive"
  | "warning"
  | "danger" // deprecated
  | "negative"
  | "info";

export type AEmptyStateProps = Override<
  React.ComponentPropsWithRef<"div">,
  {
    /**
     * Empty state variant
     * @defaultValue `"info"`
     *
     * deprecations - use "negative" instead of "danger"
     * deprecations = use "positive" instead of "success"
     * deprecations = "warning" style is deprecated
     *
     */
    variant?: AEmptyStateVariant;
    /**
     * Align the icon to the left of the text
     */
    horizontal?: boolean;
    /**
     * Custom icon name
     */
    icon?: string;
    /**
     * Class name for the icon
     */
    iconClass?: string;
    /**
     * Label for the empty state
     */
    label?: string | React.ReactNode;
    /**
     * Message describing the empty state
     */
    message?: string | React.ReactNode;
    /**
     * Sets the container size to xsmall.
     */
    xsmall?: boolean;
    /**
     * Sets the container size to small.
     */
    small?: boolean;
    /**
     * Sets the container size to medium.
     */
    medium?: boolean;
    /**
     * Sets the container size to large.
     */
    large?: boolean;
    /**
     * Sets the container size to extra large.
     */
    xlarge?: boolean;
  }
>;
