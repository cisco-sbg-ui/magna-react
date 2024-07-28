import {Override} from "../../types";

export type AEmptyStateVariant = "success" | "positive" | "warning" | "danger";

export type AEmptyStateProps = Override<
  React.ComponentPropsWithRef<"div">,
  {
    /**
     * Empty state variant
     */
    variant?: AEmptyStateVariant;
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
