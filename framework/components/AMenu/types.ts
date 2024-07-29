import {AAnchorRef, APlacement, Override} from "../../types";
import {AListProps} from "../AList/types";

export type AMenuProps<C extends React.ElementType> = Override<
  AListProps<C>,
  {
    /**
     * The reference to the menu anchor. Can either be a React ref or a DOMRect object.
     */
    anchorRef: AAnchorRef;
    /**
     * Toggles the behavior of closing the menu on click.
     */
    closeOnClick?: boolean;
    /**
     * Toggles the behavior of focusing the menu on open.
     */
    focusOnOpen?: boolean;
    /**
     * Toggles the hover visualization on list items.
     */
    hoverable?: boolean;
    /**
     * Handles the request to close the menu.
     */
    onClose?: (...args: unknown[]) => unknown;
    /**
     * Toggles the `open` state.
     */
    open?: boolean;
    /**
     * The placement of the menu.
     */
    placement?: APlacement;
    /**
     * Reduces line-height for menu items
     */
    compact?: boolean;
    /**
     * Toggles the menu pointer.
     */
    pointer?: boolean;
    /**
     * Sets the [WAI-ARIA](https://www.w3.org/WAI/standards-guidelines/aria/) role.
     */
    role?: React.AriaRole;
    "data-testid"?: string;
  }
>;
