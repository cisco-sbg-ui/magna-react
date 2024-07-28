import {Override} from "../../types";

export type ARadioProps = Override<
  React.ComponentPropsWithRef<"label">,
  {
    /**
     * Toggles the `checked` state.
     */
    checked?: boolean;
    /**
     * Toggles the `disabled` state.
     */
    disabled?: boolean;
    /**
     * The input's name.
     */
    name?: string;
    /**
     * A callback for handling the click event.
     */
    onClick?: (...args: unknown[]) => unknown;
    /**
     * The input's value.
     */
    value?: string;
    /**
     * Toggles wrapping of long text in the label.
     */
    wrap?: boolean;
  }
>;
