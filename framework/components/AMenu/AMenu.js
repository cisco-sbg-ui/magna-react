import PropTypes from "prop-types";
import React, {forwardRef, useEffect, useRef} from "react";

import {keyCodes} from "../../utils/helpers";
import {useCombinedRefs} from "../../utils/hooks";
import AMenuBase from "../AMenuBase";
import {AList} from "../AList";
import "./AMenu.scss";

const AMenu = forwardRef(
  (
    {
      anchorRef,
      children,
      className: propsClassName,
      closeOnClick = true,
      compact = false,
      focusOnOpen = true,
      hoverable,
      onClick,
      onClose,
      onKeyDown,
      open,
      placement,
      pointer,
      role = "menu",
      ...rest
    },
    ref
  ) => {
    const menuRef = useRef(null);
    const combinedRef = useCombinedRefs(ref, menuRef);

    useEffect(() => {
      if (open && focusOnOpen) {
        setTimeout(() => {
          combinedRef.current?.focus();
        }, 0);
      }
    }, [open, combinedRef, focusOnOpen]);

    const getPrevious = () => {
      const items = Array.from(
        combinedRef.current.querySelectorAll(".a-list-item[tabindex]")
      );
      return (
        items[
          items.findIndex((x) => x.isSameNode(document.activeElement)) - 1
        ] || items[items.length - 1]
      );
    };

    const getNext = () => {
      const items = Array.from(
        combinedRef.current.querySelectorAll(".a-list-item[tabindex]")
      );
      return (
        items[
          items.findIndex((x) => x.isSameNode(document.activeElement)) + 1
        ] || items[0]
      );
    };

    const closeHandler = (e) => {
      anchorRef.current && anchorRef.current.focus();
      onClose && onClose(e);
    };

    const keyDownHandler = (e) => {
      if (onClose && e.keyCode === keyCodes.esc) {
        e.preventDefault();
        closeHandler(e);
        anchorRef.current.focus();
      } else if (e.keyCode === keyCodes.tab) {
        closeHandler(e);
        anchorRef.current.focus();
      } else if (e.keyCode === keyCodes.up) {
        e.preventDefault();
        const previous = getPrevious();
        previous && previous.focus();
      } else if (e.keyCode === keyCodes.down) {
        e.preventDefault();
        const next = getNext();
        next && next.focus();
      }
    };

    let className = `a-menu`;
    if (pointer) {
      className += " a-menu--pointer";
    }
    if (compact) {
      className += ` compact`;
    }

    if (propsClassName) {
      className += ` ${propsClassName}`;
    }

    return (
      <AList
        {...rest}
        component={AMenuBase}
        ref={combinedRef}
        role={role}
        className={className}
        hoverable={hoverable}
        onClick={(e) => {
          closeOnClick && closeHandler(e);
          onClick && onClick(e);
        }}
        onClose={onClose}
        onKeyDown={(e) => {
          keyDownHandler(e);
          onKeyDown && onKeyDown(e);
        }}
        open={open}
        placement={placement}
        anchorRef={anchorRef}
        pointer={pointer}
        tabIndex={-1}
      >
        {children}
      </AList>
    );
  }
);

AMenu.propTypes = {
  /**
   * The reference to the menu anchor.
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

AMenu.displayName = "AMenu";

export default AMenu;
