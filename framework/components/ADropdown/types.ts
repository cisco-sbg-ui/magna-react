import {Override} from "../../types";
import {AButtonProps} from "../AButton/types";
import AButton from "../AButton";
import ATag from "../ATag";
import {AFloatingMenuProps} from "../AFloatingMenu/types";

export type ADropdownProps<C extends React.ElementType> = Override<
  AButtonProps<C>,
  {
    /**
     * Set the root component
     */
    component?: typeof AButton | typeof ATag;
    /**
     * Control the open state externally. Combine with `onClose` to set the external
     * state to false when the dropdown is closed by item selection or clicking outside.
     */
    isOpen?: boolean;
    /**
     * Toggles the `disabled` state.
     */
    disabled?: boolean;
    /**
     * Title of dropdown can be string or react element
     */
    title?: React.ReactNode;
    /**
     * Style the dropdown
     */
    menuStyle?: React.CSSProperties;
    /**
     * Add a className to the menu
     */
    menuClass?: string;
    /**
     * Pass props to the menu component
     */
    menuProps?: AFloatingMenuProps<React.ElementType>;
    /**
     * Callback function when the dropdown is closed
     */
    onClose?: () => any;
    /**
     * Test id
     */
    "data-testid"?: string;
    hideIfReferenceHidden?: boolean;
    /**
     * Icon only dropdown
     */
    icon?: boolean;
  }
>;
