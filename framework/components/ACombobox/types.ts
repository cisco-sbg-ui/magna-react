import type {ComponentProps} from "react";
import {Override} from "../../types";
import {AInputBaseProps} from "../AInputBase/types";
import {AHintsType} from "../AFieldBase/types";

export type AComboboxItem = string | Record<string, unknown>;

export type AComboboxItemTemplate = React.ComponentType<{
  item: AComboboxItem;
  index: number;
  "aria-selected": boolean;
  children: React.ReactNode;
  className: string;
  onClick: (...args: unknown[]) => unknown;
  role: React.AriaRole;
  value: string;
}>;

export interface AComboboxRules {
  test?: (...args: unknown[]) => unknown;
  level?: string;
}

export type AComboboxValidationState = "default" | "warning" | "danger";

export type AComboboxProps<T extends AComboboxItem> = Override<
  AInputBaseProps,
  {
    /**
     * Sets the content to append to the dropdown list.
     */
    appendContent?: React.ReactNode;
    /**
     * Toggles whether to display a clearable icon.
     */
    clearable?: boolean;
    /**
     * Toggles the disabled state.
     */
    disabled?: boolean;
    /**
     * Because ASelect uses an AMenu, the dropdown interface
     * is mounted outside of the application area. To style
     * this portion of ASelect, a class can be provided.
     */
    dropdownClassName?: string;
    /**
     * Similar to the dropdownClassName prop, this can be used
     * to pass a style object to the dropdown interface
     */
    dropdownStyle?: React.CSSProperties;
    /**
     * Sets hint or multiple hints.
     */
    hints?: AHintsType;
    /**
     * Sets a React component to use when rendering menu items. The component will be sent the following props: `item`, `index`, `aria-selected`, `children`, `className`, `onClick`, `role`, `value`.
     */
    itemTemplate?: AComboboxItemTemplate;
    /**
     * The property name of the option text when `items` is an array of objects.
     *
     * @defaultValue `"text"`
     */
    itemText?: string;
    /**
     * The property name of the option value when `items` is an array of objects.
     *
     * @defaultValue `"value"`
     */
    itemValue?: string;
    /**
     * An array of select options.
     *
     * @defaultValue `[]`
     */
    items?: T[];
    /**
     * Sets the label content.
     */
    label?: React.ReactNode;
    /**
     * Sets the max-height of the select dropdown
     * in the case of unknown dropdown options needing
     * overflow styling
     */
    maxHeight?: string;
    /**
     * Sets the content for when no matches are available.
     */
    noDataContent?: React.ReactNode;
    /**
     * Handles the `change` event for when the text input is modified.
     */
    onChange?: ComponentProps<"input">["onChange"];
    /**
     * Handles the `clear` event (for supplemental handling).
     */
    onClear?: (...args: unknown[]) => unknown;
    /**
     * Handles the `selected` event for when a selection is chosen in the dropdown.
     */
    onSelected?: (item: T) => unknown;
    /**
     * Sets the text when no option is selected.
     */
    placeholder?: string;
    /**
     * Sets the content to prepend to the dropdown list.
     */
    prependContent?: React.ReactNode;
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
    rules?: AComboboxRules[];
    /**
     * Delays validation until the `blur` event.
     */
    validateOnBlur?: boolean;
    /**
     * Applies a validation state.
     */
    validationState?: AComboboxValidationState;
    /**
     * Sets the text input value.
     */
    value?: string;
    /**
     * Empty state message - NOTE: custom strings should be provided through an i18n library
     *
     * @defaultValue `"No matches found"`
     */
    noDataMessage?: string;
    /**
     * Skips internal and/or extra validation rules
     *
     * @defaultValue `false`
     */
    skipValidation?: boolean;
  }
>;
