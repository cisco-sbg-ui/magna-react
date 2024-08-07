import {Override} from "../../types";
import {AHintsType} from "../AFieldBase/types";

export interface ASwitchRules {
  test?: (...args: any[]) => unknown;
  level?: string;
}

export type ASwitchValidationState = "default" | "warning" | "danger";

export type ASwitchProps = Override<
  React.ComponentPropsWithRef<"input">,
  {
    /**
     * Toggles the `checked` state.
     *
     * @defaultValue `false`
     */
    checked?: boolean;
    /**
     * Toggles the `disabled` state.
     *
     * @defaultValue `false`
     */
    disabled?: boolean;
    /**
     * Sets the hint content.
     *
     * @defaultValue `[]`
     */
    hints?: AHintsType;
    /**
     * A callback for handling the click event.
     */
    onClick?: React.MouseEventHandler<HTMLInputElement>;
    /**
     * Toggles a default rule for required values.
     */
    required?: boolean;
    /**
     * Sets validation rules for the component.
     */
    rules?: ASwitchRules[];
    /**
     * Applies a validation state.
     */
    validationState?: ASwitchValidationState;
    /**
     * The input's value.
     */
    value?: string;
    /**
     * Toggles wrapping of long text in the label.
     */
    wrap?: boolean;
    /**
     * Small size variant
     */
    small?: boolean;
  }
>;
