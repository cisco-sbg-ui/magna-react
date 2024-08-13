import {Override} from "../../types";
import {AFieldBaseProps, AHintsType} from "../AFieldBase/types";

export type AButtonGroupSelectedValues<T> = T[];

export type AButtonGroupValidationState = "default" | "warning" | "danger";

export type AButtonGroupProps<T> = Override<
  AFieldBaseProps,
  {
    /**
     * Sets hint or multiple hints.
     */
    hints?: AHintsType;
    /**
     * Sets the label content.
     */
    label?: React.ReactNode;
    /**
     * Toggles whether multiple buttons can be selected.
     *
     * @defaultValue `false`
     */
    multiple?: boolean;
    /**
     * Handles the event when button selection has changed.
     * @param {String} targetValue The toggled button's value.
     * @param {Array} allSelectedValues An array of all selected button values.
     */
    onChange?: (value: T) => void;
    /**
     * Sets an array of selected values.
     */
    selectedValues?: AButtonGroupSelectedValues<T>;
    /**
     * Applies a validation state.
     *
     * @defaultValue `"default"`
     */
    validationState?: AButtonGroupValidationState;
    /**
     * Magnetic small sizing
     *
     *  @defaultValue `false`
     */
    small?: boolean;
    /**
     * Magnetic medium sizing
     *
     *  @defaultValue `true`
     */
    medium?: boolean;
  }
>;
