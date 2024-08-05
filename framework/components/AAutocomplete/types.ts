import {Override} from "../../types";
import {AHintsType} from "../AFieldBase/types";

export type AAutocompleteItem = string | Record<string, unknown>;
export type AAutocompleteItems = string[] | Record<string, unknown>[];

export type AAutocompleteItemTemplate = React.ComponentType<{
  item: AAutocompleteItem;
  index: number;
  "aria-selected": boolean;
  children: React.ReactNode;
  className: string;
  onClick: (...args: unknown[]) => unknown;
  role: React.AriaRole;
  value: string;
}>;

export interface AAutocompleteRules {
  test?: (...args: unknown[]) => unknown;
  level?: string;
}

export type AAutocompleteValidationState = "default" | "warning" | "danger";

export type AAutocompleteProps = Override<
  React.ComponentPropsWithRef<"div">,
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
     *
     * @defaultValue `false`
     */
    disabled?: boolean;
    /**
     * Sets the hint content.
     */
    hints?: AHintsType;
    /**
     * Sets a React component to use when rendering menu items. The component will be sent the following props: `item`, `index`, `aria-selected`, `children`, `className`, `onClick`, `role`, `value`.
     */
    itemTemplate?: AAutocompleteItemTemplate;
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
     */
    items?: AAutocompleteItems;
    /**
     * Sets the label content.
     */
    label?: React.ReactNode;
    /**
     * Toggles the `loading` state.
     */
    loading?: boolean;
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
    rules?: AAutocompleteRules[];
    /**
     * Delays validation until the `blur` event.
     */
    validateOnBlur?: boolean;
    /**
     * Applies a validation state.
     */
    validationState?: AAutocompleteValidationState;
    /**
     * Sets the text input value.
     */
    value?: string;
  }
>;
