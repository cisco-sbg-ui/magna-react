import {Override} from "../../types";

export type AProgressbarSize = "small" | "medium" | "large";

export type AProgressbarProps = Override<
  React.ComponentPropsWithRef<"div">,
  {
    /**
     * Determines the duration of the progress bar (if animated).
     * @example 0.3s
     */
    animationDuration?: string;
    /**
     * Sets the size of the indicator.
     */
    size?: AProgressbarSize;
    /**
     * Toggles the `disabled` state.
     */
    disabled?: boolean;
    /**
     * Toggles whether the percentage is displayed additionally as text.
     */
    displayText?: boolean;
    /**
     * The percent completed.
     *
     * @defaultValue `0`
     */
    percentage?: number;
    /**
     * Toggles the striped display variant.
     */
    striped?: boolean;
    /**
     * Adds animation for an indeterminate progress
     */
    indeterminate?: boolean;
    /**
     * Class to apply to the bar element
     */
    barClassName?: string;
    /**
     * Class to apply to the fill element
     */
    fillClassName?: string;
    /**
     * Style to apply to the bar element
     */
    barStyle?: React.CSSProperties;
    /**
     * Style to apply to the fill element
     */
    fillStyle?: React.CSSProperties;
  }
>;
