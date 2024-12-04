import type {Override} from "../../types";
import type {AButtonProps} from "../AButton/types";
import type AButton from "../AButton";
import type ATag from "../ATag";
import type {AFloatingMenuProps} from "../AFloatingMenu/types";

type ExternalState<T extends boolean> = {
  isOpen: T;
  onClose: T extends true ? () => void : null;
};

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
    "data-testid"?: string;
    hideIfReferenceHidden?: boolean;
    /**
     * Icon only dropdown
     */
    icon?: boolean;
  },
  ExternalState<boolean>
>;
