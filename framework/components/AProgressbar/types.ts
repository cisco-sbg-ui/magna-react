import {Override} from "../../types";

export type AProgressbarSize = "small" | "medium";

export type AProgressbarStatus = "active" | "success" | "error";

export type AProgressbarProps = Override<
  React.ComponentPropsWithRef<"div">,
  {
    /**
     * Determines the duration of the progress bar (if animated).
     */
    animationDuration?: string;
    /**
     * Sets the size of the indicator.
     *  @deprecated use small or medium convention instead
     */
    size?: AProgressbarSize;
    /**
     * Toggles the `disabled` state.
     * @deprecated no longer used
     */
    disabled?: boolean;
    /**
     * Toggles whether the percentage is displayed additionally as text.
     */
    displayText?: boolean;
    /**
     * The percent completed.
     */
    percentage?: number;
    /**
     * Toggles the striped display variant.
     *  @deprecated use animate instead
     */
    striped?: boolean;
    /**
     * Toggles the animation display.
     */
    animate?: boolean;
    /**
     * Adds animation for an indeterminate progress
     *  @deprecated no longer used
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
    /**
     * The status of the progress bar.
     * @defaultValue `"active"`
     * */
    status?: AProgressbarStatus;
    /**
     * Subtext displayed below bar
     */
    helperText?: string;
    /**
     * Label for the progress bar
     */
    label?: string;
    /**
     * Label and helper text block positioning
     */
    stacked?: boolean;
    /**
     * Centers the label and helper text block
     */
    centered?: boolean;
    /**
     * The status of the progress bar.
     * @defaultValue `"medium"`
     * */
    small?: boolean;
    /**
     * The status of the progress bar.
     * @defaultValue `"medium"`
     * */
    medium?: boolean;
  }
>;
