import React from "react";
import {type FloatingContext, type ReferenceType} from "@floating-ui/react";
import {AAnchorRef, APlacement, Override} from "../../types";
import {AListProps} from "../AList/types";

export type AFloatingMenuContainerProps = {
  children: React.ReactElement;
  context: FloatingContext<ReferenceType>;
  /**
   * Sets the [WAI-ARIA](https://www.w3.org/WAI/standards-guidelines/aria/) role.
   *
   * @defaultValue `"menu"`
   */
  role?: React.AriaRole;
  /**
   * Toggles the behavior of focusing the menu on open.
   *
   * @defaultValue `true`
   */
  focusOnOpen?: boolean;
  initialFocus?: React.RefObject<HTMLDivElement>;
};

export type AFloatingMenuProps<C extends React.ElementType> = Override<
  AListProps<C>,
  {
    context: FloatingContext<ReferenceType>;
    /**
     * The reference to the menu anchor. Can either be a React ref or a DOMRect object.
     */
    anchorRef: AAnchorRef;
    /**
     * The menu ref
     */
    menuRef: React.RefObject<HTMLElement>;
    /**
     * The arrow ref
     */
    arrowRef: React.RefObject<HTMLElement>;
    /**
     * Toggles the behavior of closing the menu on click.
     *
     * @defaultValue `true`
     */
    closeOnClick?: boolean;
    /**
     * Toggles the behavior of focusing the menu on open.
     *
     * @defaultValue `true`
     */
    focusOnOpen?: boolean;
    /**
     * Toggles the hover visualization on list items.
     */
    hoverable?: boolean;
    /**
     * onClick handler
     */
    onClick?: (e: React.MouseEvent | React.KeyboardEvent) => void;
    /**
     * Handles the request to close the menu.
     */
    onClose?: (...args: any[]) => unknown;
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
     *
     * @defaultValue `false`
     */
    compact?: boolean;
    /**
     * Toggles the menu pointer.
     */
    pointer?: boolean;
    /**
     * Sets the [WAI-ARIA](https://www.w3.org/WAI/standards-guidelines/aria/) role.
     *
     * @defaultValue `"menu"`
     */
    role?: React.AriaRole;
    /**
     * Sets the submenu behavior and styling.
     *
     *  @defaultValue `false`
     */
    subMenu?: boolean;
    "data-testid"?: string;
    /**
     * Auto hide the floating element if the anchor element scrolls out of view
     */
    hideIfReferenceHidden?: boolean;
    /**
     * Is the reference hidden - set by hook
     */
    isReferenceHidden?: boolean;
    initialFocus?: React.RefObject<HTMLDivElement>;
  }
>;
