import type {Override} from "../../types";
import type {AHintsType} from "../AFieldBase/types";
import type {AInputBaseProps} from "../AInputBase/types";

export type ASelectItem = string | Record<string, unknown>;

export type ASelectItemTemplate<T extends ASelectItem> = React.ComponentType<{
  item: T;
  index: number;
  "aria-disabled": boolean;
  "aria-selected": boolean;
  children: React.ReactNode;
  className: string;
  onClick: (...args: any[]) => unknown;
  role: React.AriaRole;
  selected: boolean;
  value: string;
}>;

export type ASelectDisplayTemplate<T extends ASelectItem> =
  React.ComponentType<{
    item: T;
    key: string;
  }>;

export interface ASelectRules {
  test?: (...args: any[]) => unknown;
  level?: string;
}

export type ASelectValidationState = "default" | "warning" | "danger";

export type ASelectProps<T extends ASelectItem> = Override<
  React.ComponentPropsWithoutRef<"select">,
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
     * The property name of the value indicating a disabled option when `items` is an array of objects.
     *
     * @defaultValue `"disabled"`
     */
    itemDisabled?: string;
    /**
     *
     * @defaultValue `"selected"`
     * The property name of the value indicating a selected option when `items` is an array of objects.
     */
    itemSelected?: string;
    /**
     * Sets a React component to use when rendering menu items. The component will be sent the following props: `item`, `index`, `aria-disabled`, `aria-selected`, `children`, `className`, `onClick`, `role`, `selected`, `value`.
     */
    itemTemplate?: ASelectItemTemplate<T>;
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
     * in the case of munknown dropdown options needing
     * overflow styling
     */
    maxHeight?: string;
    /**
     * Handles the `selected` event.
     */
    onSelected?: (item: T) => void;
    /**
     * Sets a default initial value for string array `items`
     */
    defaultValue: string;
    /**
     * Sets the text when no option is selected.
     */
    placeholder?: React.ReactNode;
    /**
     * Sets the content to prepend to the dropdown list.
     */
    prependContent?: React.ReactNode;
    /**
     * Toggles the `read-only` state
     */
    readOnly?: boolean;
    /**
     * Toggles a default rule for required values.
     */
    required?: boolean;
    /**
     * Sets validation rules for the component.
     */
    rules?: ASelectRules[];
    /**
     * Delays validation until the `blur` event.
     */
    validateOnBlur?: boolean;
    /**
     * Applies a validation state.
     */
    validationState?: ASelectValidationState;
    /**
     * Use the `itemTemplate` with the selectedItem in the ASelect input.
     */
    useTemplateForSelectedItem?: boolean;
    /**
     * Sets a React component to use when rendering the selected menu item. The component will be sent the following props: `item`. This overrides `useTemplateForSelectedItem`.
     */
    selectedDisplayTemplate?: ASelectDisplayTemplate<T>;
    /**
     * If set, uses a custom item rather than the selectedItem when using `selectedDisplayTemplate`
     */
    selectedDisplayItem?: Record<string, unknown>;
    /**
     * If item display is a string (no template), set white-space:normal on each
     * item and limit width of the menu.
     */
    textWrapMenuItems?: boolean;
    /**
     * If item display is a string (no template), truncate the display string with
     * ellipsis and limit width of the menu.
     */
    truncateMenuItems?: boolean;
    hideIfReferenceHidden?: boolean;
  }
>;
