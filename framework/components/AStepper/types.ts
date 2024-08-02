import {Override} from "../../types";

export type AStepperProps = Override<
  React.ComponentPropsWithRef<"div">,
  {
    /**
     * When true, stepper orientation will be vertical
     */
    vertical?: boolean;
  }
>;

export type AStepProps = Override<
  React.ComponentPropsWithRef<"div">,
  {
    /**
     * Mark step as active.
     */
    active?: boolean;
    /**
     * Mark step as visited.
     */
    visited?: boolean;
    /**
     * Mark step as disabled.
     */
    disabled?: boolean;
    /**
     * Show 'marked' icon on visited steps
     *
     * @defaultValue `true`
     */
    showIconOnVisited?: boolean;
    /**
     * String representing class names to be passed to component container
     */
    className?: string;
    /**
     * Step number.
     */
    stepNumber?: number;
    /**
     * Callback to set step as active
     */
    setActiveStep?: (...args: unknown[]) => unknown;
    /**
     * Set vertical view
     */
    isVertical?: boolean;
    dividerStyle?: React.CSSProperties;
  }
>;
