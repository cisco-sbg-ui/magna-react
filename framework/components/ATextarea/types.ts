import type {ComponentProps} from "react";
import {Override} from "../../types";
import {AInputBaseProps} from "../AInputBase/types";
import {AHintsType} from "../AFieldBase/types";

export interface ATextareaRules {
  test?: (...args: unknown[]) => unknown;
  level?: string;
}

export type ATextareaValidationState = "default" | "warning" | "danger";

export type ATextareaProps = Override<
  React.ComponentPropsWithoutRef<"textarea">,
  AInputBaseProps,
  {
    /**
     * Toggles whether the textarea auto-focuses on mount.
     */
    autoFocus?: boolean;
    /**
     * Toggles height resize behavior based on content length.
     */
    autoGrow?: boolean;
    /**
     * Toggles the disabled state.
     */
    disabled?: boolean;
    /**
     * Toggles whether to disable the Grammarly browser extension.
     */
    disableGrammarly?: boolean;
    /**
     * Sets hint or multiple hints.
     */
    hints?: AHintsType;
    /**
     * Sets the label content.
     */
    label?: React.ReactNode;
    /**
     * Sets the maximum length of the textarea value.
     */
    maxLength?: number;
    /**
     * Handles the `blur` event
     */
    onBlur?: ComponentProps<"textarea">["onBlur"];
    /**
     * Handles the `change` event.
     */
    onChange?: ComponentProps<"textarea">["onChange"];
    /**
     * Handles the `focus` event.
     */
    onFocus?: ComponentProps<"textarea">["onFocus"];
    /**
     * Handles the `keyUp` event.
     */
    onKeyUp?: ComponentProps<"textarea">["onKeyUp"];
    /**
     * Handles the `paste` event.
     */
    onPaste?: (...args: unknown[]) => unknown;
    /**
     * Sets the textarea placeholder text.
     */
    placeholder?: string;
    /**
     * Toggles the read-only state.
     */
    readOnly?: boolean;
    /**
     * Toggles a default rule for required values.
     */
    required?: boolean;
    /**
     * Sets the default number of rows for the textarea.
     */
    rows?: number;
    /**
     * Sets validation rules for the component.
     */
    rules?: ATextareaRules[];
    /**
     * Delays validation until the `blur` event.
     */
    validateOnBlur?: boolean;
    /**
     * Applies a validation state.
     */
    validationState?: ATextareaValidationState;
    /**
     * Sets the textarea value.
     */
    value?: string;
  }
>;
