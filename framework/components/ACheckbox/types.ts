import {Override} from "../../types";
import {AHintsType} from "../AFieldBase/types";

export interface ACheckboxRules {
  test?: (...args: unknown[]) => unknown;
  level?: string;
}

export type ACheckboxValidationState = "default" | "warning" | "danger";

export type ACheckboxProps = Override<
  React.ComponentPropsWithRef<"div">,
  {
    /**
     * ID to be passed to the checkbox <input>
     */
    id?: string;
    /**
     * Toggles the `checked` state.
     *
     *  @defaultValue `false`
     */
    checked?: boolean;
    /**
     * Specify the checkbox color. Accepts unknown stock color or CSS color value. The default value is cisco-blue base.
     */
    color?: string;
    /**
     * Toggles the `disabled` state.
     *
     *  @defaultValue `false`
     */
    disabled?: boolean;
    /**
     * Sets the hint content.
     */
    hints?: AHintsType;
    /**
     * Toggles the `indeterminate` state.
     *
     *  @defaultValue `false`
     */
    indeterminate?: boolean;
    /**
     * A callback for handling the click event.
     */
    onClick?: (e: React.MouseEvent | React.KeyboardEvent) => void;
    /**
     * Toggles a default rule for required values.
     *
     * @defaultValue `false`
     */
    required?: boolean;
    /**
     * Sets validation rules for the component.
     */
    rules?: ACheckboxRules[];
    /**
     * Applies a validation state.
     */
    validationState?: ACheckboxValidationState;
    /**
     * The input's value. This is a string value submitted to the server when a form containing this checkbox is submitted. It has otherwise no effect.
     */
    value?: string;
    /**
     * Toggles wrapping of long text in the label.
     */
    wrap?: boolean;
    /**
     * Option for small size (default is medium)
     */
    small?: boolean;
    /**
     * Wrap the checkbox in the <label> tag.
     *
     * @defaultValue `true`
     */
    withLabel?: boolean;
    /**
     * Skips internal and/or extra validation rules
     *
     * @defaultValue `false`
     */
    skipValidation?: boolean;
    [dataAttribute: `data-${string}`]: string;
  }
>;
