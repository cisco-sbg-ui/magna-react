import {type Override} from "../../types";
import {type AButtonProps} from "../AButton/types";
import type AButton from "../AButton";
import type ATag from "../ATag";
import {type AFloatingMenuProps} from "../AFloatingMenu/types";

type SharedProps = {
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
};

interface ExternallyControlled extends SharedProps {
  /**
   * Control the open state externally. Combine with `onClose` to set the external
   * state to false when the dropdown is closed by item selection or clicking outside.
   */
  isOpen: boolean;
  /**
   * Callback function when the dropdown is closed
   */
  onClose: () => void;
}

export type ADropdownProps<C extends React.ElementType> = Override<
  AButtonProps<C>,
  SharedProps | ExternallyControlled
>;
