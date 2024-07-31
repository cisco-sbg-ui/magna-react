import {Override} from "../../types";
import {AFieldBaseProps, AHintsType} from "../AFieldBase/types";

export interface ASliderRules {
  test?: (...args: unknown[]) => unknown;
  level?: string;
}

export type ASliderTicks = string | number;

export type ASliderValidationState = "default" | "warning" | "danger";

export type ASliderValue = number[] | number;

export type ASliderProps = Override<
  AFieldBaseProps,
  {
    /**
     * Toggles the disabled state.
     */
    disabled?: boolean;
    /**
     * Sets hint or multiple hints.
     */
    hints?: AHintsType;
    /**
     * Sets the label content.
     */
    label?: React.ReactNode;
    /**
     * Sets the minimum value.
     */
    min?: number;
    /**
     * Sets the maximum value.
     */
    max?: number;
    /**
     * Handles the `change` event.
     */
    onChange?: (...args: unknown[]) => unknown;
    /**
     * Toggles a default rule for required values.
     */
    required?: boolean;
    /**
     * Sets validation rules for the component.
     */
    rules?: ASliderRules[];
    /**
     * Sets the increment/decrement value.
     */
    step?: number;
    /**
     * Sets an array of tick mark names.
     */
    ticks?: ASliderTicks[];
    /**
     * Applies a validation state.
     */
    validationState?: ASliderValidationState;
    /**
     * Sets the slider value(s).
     */
    value?: ASliderValue;
  }
>;
