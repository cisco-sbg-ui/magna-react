import type {Override} from "../../types";
import type {AFieldBaseProps, AHintsType} from "../AFieldBase/types";

export interface ASliderRules {
  test?: (...args: any[]) => string;
  level?: ASliderValidationState;
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
     * Labels should `number` only as `string` labels are deprecated.
     */
    label?: React.ReactNode;
    /**
     * Sets the minimum value.
     *
     * @defaultValue `0`
     */
    min?: number;
    /**
     * Sets the maximum value.
     *
     * @defaultValue `100`
     */
    max?: number;
    /**
     * Handles the `change` event.
     */
    onChange?: (newVal: ASliderValue) => void;
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
     *
     * @defaultValue `1`
     */
    step?: number;
    /**
     * Sets an array of tick mark names.
     */
    ticks?: ASliderTicks[];
    /**
     * Applies a validation state.
     *
     * @defaultValue `default`
     * @deprecated `default` only
     */
    validationState?: ASliderValidationState;
    /**
     * Sets the slider value(s).
     */
    value?: ASliderValue;
  }
>;
