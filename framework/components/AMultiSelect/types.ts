import {Override} from "../../types";
import {AHintsType} from "../AFieldBase/types";
import {AInputBaseProps} from "../AInputBase/types";

export type AMultiSelectItem = string | Record<string, unknown>;
export type AMultiSelectItems = string[] | Record<string, unknown>[];

export type AMultiSelectItemTemplate = React.ComponentType<{
  item: AMultiSelectItem;
  index: number;
  "aria-selected": boolean;
  children: React.ReactNode;
  className: string;
  onClick: (...args: unknown[]) => unknown;
  role: React.AriaRole;
  value: string;
}>;

export interface AMultiSelectRules {
  test?: (...args: unknown[]) => unknown;
  level?: string;
}

export type AMultiSelectValidationState = "default" | "warning" | "danger";

export type AMultiSelectProps = Override<
  AInputBaseProps,
  {
    /**
     * Sets the content to append to the dropdown list.
     */
    appendContent?: React.ReactNode;
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
    itemTemplate?: AMultiSelectItemTemplate;
    /**
     * The property name of the option text when `items` is an array of objects.
     */
    itemText?: string;
    /**
     * The property name of the option value when `items` is an array of objects.
     */
    itemValue?: string;
    /**
     * An array of select options.
     */
    items?: AMultiSelectItems;
    /**
     * Sets the label content.
     */
    label?: React.ReactNode;
    /**
     * Sets the content for when no matches are available.
     */
    noDataContent?: React.ReactNode;
    /**
     * Handles the `change` event for when the text input is modified.
     */
    onChange?: (...args: unknown[]) => unknown;
    /**
     * Handles the `clear` event (for supplemental handling).
     */
    onClear?: (...args: unknown[]) => unknown;
    /**
     * Handles the `selected` event for when a selection is chosen in the dropdown.
     */
    onSelected?: (...args: unknown[]) => unknown;
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
    rules?: AMultiSelectRules[];
    /**
     * Applies a validation state.
     */
    validationState?: AMultiSelectValidationState;
    /**
     * Sets the text input value.
     */
    value?: unknown[];
    /**
     * Function to filter items when the input value changes
     */
    filterFunction?: (...args: unknown[]) => unknown;
  }
>;