import PropTypes from "prop-types";
import React, {forwardRef, useCallback} from "react";

import {FloatingArrow} from "@floating-ui/react";

import {keyCodes, isRealBrowser} from "../../utils/helpers";
import AFloatingMenuContainer from "./AFloatingMenuContainer";
import {AList} from "../AList";
import "./AFloatingMenu.scss";

import type {AFloatingMenuProps} from "./types";

const AFloatingMenu = forwardRef<
  HTMLElement,
  AFloatingMenuProps<React.ElementType>
>(
  (
    {
      context,
      anchorRef,
      arrowRef,
      menuRef,
      children,
      className: propsClassName,
      closeOnClick = true,
      compact = false,
      focusOnOpen = true,
      initialFocus: propsInitialFocus,
      hoverable,
      onClick,
      onClose,
      onKeyDown,
      open,
      pointer,
      role = "menu",
      submenu = false,
      hideIfReferenceHidden = true,
      isReferenceHidden,
      style,
      ...rest
    },
    ref
  ) => {
    const getSelectedIndex = () => {
      const listItems = menuRef?.current?.querySelectorAll(".a-list-item");

      if (!listItems?.length) {
        return undefined;
      }

      let index = undefined;
      listItems.forEach((x: HTMLElement, i: number) => {
        if (x.classList.contains("a-list-item--selected")) {
          index = i;
        }
      });

      return index;
    };

    const getPrevious = useCallback(() => {
      if (!menuRef.current) {
        return;
      }

      const items: HTMLElement[] = Array.from(
        menuRef.current.querySelectorAll(
          ".a-list-item[tabindex]:not([disabled])"
        )
      );
      return (
        items[
          items.findIndex((x) => x.isSameNode(document.activeElement)) - 1
        ] || items[items.length - 1]
      );
    }, [menuRef]);

    const getNext = useCallback(() => {
      if (!menuRef.current) {
        return;
      }

      const items: HTMLElement[] = Array.from(
        menuRef.current.querySelectorAll(
          ".a-list-item[tabindex]:not([disabled])"
        )
      );
      return (
        items[
          items.findIndex((x) => x.isSameNode(document.activeElement)) + 1
        ] || items[0]
      );
    }, [menuRef]);

    const closeHandler = (e: React.MouseEvent | React.KeyboardEvent) => {
      if (anchorRef instanceof DOMRect) {
        return;
      }
      anchorRef.current && anchorRef.current.focus();
      onClose && onClose(e);
    };

    const keyDownHandler = (e: React.KeyboardEvent) => {
      if (onClose && e.key === keyCodes.esc) {
        e.preventDefault();
        closeHandler(e);
        !(anchorRef instanceof DOMRect) && anchorRef.current?.focus();
      } else if (e.key === keyCodes.tab) {
        !(anchorRef instanceof DOMRect) && anchorRef.current?.focus();
      } else if (e.key === keyCodes.up) {
        if (open) {
          e.stopPropagation();
        }
        e.preventDefault();
        e.stopPropagation();
        const previous = getPrevious();
        previous && previous.focus();
      } else if (
        e.key === keyCodes.right &&
        document.activeElement?.tagName !== "INPUT"
      ) {
        e.preventDefault();
      } else if (
        e.key === keyCodes.left &&
        document.activeElement?.tagName !== "INPUT"
      ) {
        e.preventDefault();
        submenu && closeHandler(e);
      } else if (e.key === keyCodes.down) {
        if (open) {
          e.stopPropagation();
        }
        e.preventDefault();
        e.stopPropagation();
        const next = getNext();
        next && next.focus();
      }
    };

    if (!open) {
      return null;
    }

    let className = `a-floating-menu a-floating-menu-base`;
    if (pointer) {
      className += " a-floating-menu--pointer";
    }
    if (compact) {
      className += ` compact`;
    }
    if (submenu) {
      className += ` a-floating-menu--submenu`;
    }

    if (propsClassName) {
      className += ` ${propsClassName}`;
    }

    const shouldHide =
      isRealBrowser && hideIfReferenceHidden && isReferenceHidden;

    const attrs: {[key: string]: any} = {};
    attrs["data-ignore-outside-click"] = true;

    const initialFocus = propsInitialFocus || getSelectedIndex();

    return (
      <AFloatingMenuContainer
        context={context}
        focusOnOpen={focusOnOpen}
        initialFocus={initialFocus}>
        <AList
          ref={ref as React.RefObject<HTMLDivElement>}
          {...rest}
          {...attrs}
          style={{
            ...style,
            visibility: shouldHide ? "hidden" : "visible"
          }}
          role={role}
          className={className}
          hoverable={hoverable}
          onClick={(e: React.MouseEvent | React.KeyboardEvent) => {
            closeOnClick && closeHandler(e);
            onClick && onClick(e);
          }}
          onClose={(e: React.MouseEvent | React.KeyboardEvent) => {
            const isSubmenuActive = Boolean(
              document.querySelector(".a-floating-menu--submenu")
            );
            //If submenu is not active, proceed with unmounting parent AFloatingMenu
            if (!isSubmenuActive) {
              onClose(e);
            }
          }}
          onKeyDown={(e: React.KeyboardEvent) => {
            keyDownHandler(e);
            onKeyDown && onKeyDown(e);
          }}>
          {pointer && <FloatingArrow ref={arrowRef} context={context} />}
          {children}
        </AList>
      </AFloatingMenuContainer>
    );
  }
);

AFloatingMenu.propTypes = {
  /**
   * The reference to the menu anchor. Can either be a React ref or a DOMRect object.
   */
  anchorRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({current: PropTypes.any})
  ]).isRequired,
  /**
   * Toggles the behavior of closing the menu on click.
   */
  closeOnClick: PropTypes.bool,
  /**
   * Toggles the behavior of focusing the menu on open.
   */
  focusOnOpen: PropTypes.bool,
  /**
   * Toggles the hover visualization on list items.
   */
  hoverable: PropTypes.bool,
  /**
   * Handles the request to close the menu.
   */
  onClose: PropTypes.func,
  /**
   * Toggles the `open` state.
   */
  open: PropTypes.bool,
  /**
   * The placement of the menu.
   */
  placement: PropTypes.oneOf([
    "top",
    "top-right",
    "right-top",
    "right",
    "right-bottom",
    "bottom-right",
    "bottom",
    "bottom-left",
    "left-bottom",
    "left",
    "left-top",
    "top-left"
  ]),
  /**
   * Reduces line-height for menu items
   */
  compact: PropTypes.bool,
  /**
   * Toggles the menu pointer.
   */
  pointer: PropTypes.bool,
  /**
   * Sets the [WAI-ARIA](https://www.w3.org/WAI/standards-guidelines/aria/) role.
   */
  role: PropTypes.string
};

AFloatingMenu.displayName = "AFloatingMenu";

export default AFloatingMenu;
