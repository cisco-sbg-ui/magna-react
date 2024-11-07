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
