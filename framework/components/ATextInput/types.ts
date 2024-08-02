import type {ComponentProps} from "react";
import {Override} from "../../types";
import {AInputBaseProps} from "../AInputBase/types";
import {AHintsType} from "../AFieldBase/types";
import {ATooltipProps} from "../ATooltip";

export interface ATextInputRules {
  key?: string;
  test?: (...args: unknown[]) => unknown;
  level?: string;
}

export type ATextInputType = "text" | "password" | "email" | "number";

export type ATextInputValidationState = "default" | "warning" | "danger";

export type ATextInputValue = string | number;

export type ATextInputProps = Override<
  React.ComponentPropsWithoutRef<"input">,
  AInputBaseProps,
  {
    /**
     * Appends an icon inside the text input. The value should be an [icon name](/components/icon).
     */
    appendIcon?: string;
    /**
     * The input's `autocomplete` attribute.
     */
    autoComplete?: string;
    /**
     * Toggles whether the input auto-focuses on mount.
     */
    autoFocus?: boolean;
    /**
     * Toggles whether to display a clearable icon.
     */
    clearable?: boolean;
    /**
     * Toggles the `disabled` state.
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
     * Adds an information tooltip next to the label
     */
    infoTooltip?: string;
    /**
     * Overrides props of `ATooltip` used to display `infoTooltip`. See `ATooltip.propTypes`.
     */
    infoTooltipProps?: ATooltipProps;
    /**
     * Sets the maximum value of a number type text input.
     */
    max?: number;
    /**
     * Sets the maximum length of the text input value.
     */
    maxLength?: number;
    /**
     * Sets the minimum value of a number type text input.
     */
    min?: number;
    /**
     * The input's `name` attribute.
     */
    name?: string;
    /**
     * Handles the `blur` event
     */
    onBlur?: ComponentProps<"input">["onBlur"];
    /**
     * Handles the `change` event.
     */
    onChange?: ComponentProps<"input">["onChange"];
    /**
     * Handles the `clear` event (for supplemental handling).
     */
    onClear?: (...args: unknown[]) => unknown;
    /**
     * Handles the `click` event for the input.
     */
    onClick?: ComponentProps<"input">["onClick"];
    /**
     * Handles the `click` event for an appended icon.
     */
    onClickAppend?: (...args: unknown[]) => unknown;
    /**
     * Handles the `click` event for a prepended icon.
     */
    onClickPrepend?: (...args: unknown[]) => unknown;
    /**
     * Handles the `focus` event.
     */
    onFocus?: ComponentProps<"input">["onFocus"];
    /**
     * Handles the `keyUp` event.
     */
    onKeyUp?: ComponentProps<"input">["onKeyUp"];
    /**
     * Handles the `paste` event.
     */
    onPaste?: (...args: unknown[]) => unknown;
    /**
     * The input's `placeholder` attribute.
     */
    placeholder?: string;
    /**
     * Prepends an icon inside the text input. The value should be an [icon name](/components/icon).
     */
    prependIcon?: string;
    /**
     * Toggles the `readOnly` state.
     */
    readOnly?: boolean;
    /**
     * Toggles a default rule for required values.
     */
    required?: boolean;
    /**
     * Sets validation rules for the component.
     */
    rules?: ATextInputRules[];
    /**
     * Toggles the spinner for number type inputs.
     *
     * @defaultValue `true`
     */
    spinner?: boolean;
    /**
     * Sets the increment/decrement value for number type text inputs.
     */
    step?: number;
    /**
     * Change the input type to take advantage of native behavior.
     *
     * @defaultValue `"text"`
     */
    type?: ATextInputType;
    /**
     * Delays validation until the `blur` event.
     */
    validateOnBlur?: boolean;
    /**
     * Applies a validation state.
     *
     * @defaultValue `"default"`
     */
    validationState?: ATextInputValidationState;
    /**
     * The input's `value` attribute.
     */
    value?: ATextInputValue;
    /**
     * Skips internal and/or extra validation rules
     *
     * @defaultValue `false`
     */
    skipValidation?: boolean;
  }
>;
