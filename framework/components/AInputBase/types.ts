import {Override} from "../../types";
import {AFieldBaseProps, AHintsType} from "../AFieldBase/types";

export type AInputBaseSurfaceRef =
  | ((...args: unknown[]) => unknown)
  | {
      current?: unknown;
    };

export type AInputBaseValidationState = "default" | "warning" | "danger";

export type AInputBaseProps = Override<
  AFieldBaseProps,
  {
    /**
     * Append content to the control.
     */
    append?: React.ReactNode;
    /**
     * Toggles whether the clear button is rendered.
     */
    clearable?: boolean;
    /**
     * Toggles the `disabled` state.
     */
    disabled?: boolean;
    /**
     * Toggles the `focused` state.
     */
    focused?: boolean;
    /**
     * Sets hint or multiple hints.
     */
    hints?: AHintsType;
    /**
     * Sets the label content.
     */
    label?: React.ReactNode;
    /**
     * The label's `for` attribute.
     */
    labelFor?: string;
    /**
     * The label's `id` attribute.
     */
    labelId?: string;
    /**
     * Handles the `clear` event.
     */
    onClear?: (...args: any[]) => unknown;
    /**
     * Handles the label's `click` event.
     */
    onClickLabel?: (...args: any[]) => unknown;
    /**
     * Prepends content to the control.
     */
    prepend?: React.ReactNode;
    /**
     * Toggles the `readOnly` state.
     */
    readOnly?: boolean;
    /**
     * Sets the `ref` of the surface element.
     */
    surfaceRef?: AInputBaseSurfaceRef;
    /**
     * Applies a validation state.
     *
     * @defaultValue `"default"`
     */
    validationState?: AInputBaseValidationState;
    /**
     * Sets widget size to magnetic large
     */
    large?: boolean;
    /**
     * Sets widget size to magnetic medium
     */
    medium?: boolean;
    /**
     * Sets widget size to magnetic small (default)
     */
    small?: boolean;
  }
>;
