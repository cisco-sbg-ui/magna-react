import PropTypes from "prop-types";
import React, {forwardRef, useEffect, useRef} from "react";

import {keyCodes} from "../../utils/helpers";
import {useCombinedRefs} from "../../utils/hooks";
import AMenuBase from "../AMenuBase";
import AContextualNotification from "../AContextualNotification";
import "./AContextualNotificationMenu.scss";

const AContextualNotificationMenu = forwardRef(
  (
    {
      anchorRef,
      children,
      className: propsClassName,
      focusOnOpen = true,
      onClose,
      onKeyDown,
      open,
      placement,
      role = "menu",
      variant,
      ...rest
    },
    ref
  ) => {
    const contextualNotificationMenuRef = useRef(null);
    const combinedRef = useCombinedRefs(ref, contextualNotificationMenuRef);

    useEffect(() => {
      if (open && focusOnOpen) {
        setTimeout(() => {
          combinedRef.current.focus();
        }, 0);
      }
    }, [open, combinedRef, focusOnOpen]);

    const closeHandler = (e) => {
      if (anchorRef instanceof DOMRect) {
        return;
      }
      anchorRef.current && anchorRef.current.focus();
      onClose && onClose(e);
    };

    const keyDownHandler = (e) => {
      if (anchorRef instanceof DOMRect) {
        return;
      }
      if (onClose && e.keyCode === keyCodes.esc) {
        e.preventDefault();
        closeHandler(e);
        anchorRef.current.focus();
      } else if (e.keyCode === keyCodes.tab) {
        closeHandler(e);
        anchorRef.current.focus();
      }
    };

    let className = `a-contextual-notification-menu`;
    if (propsClassName) {
      className += ` ${propsClassName}`;
    }

    return (
      <AContextualNotification
        {...rest}
        component={AMenuBase}
        ref={combinedRef}
        role={role}
        className={className}
        onClose={onClose}
        onKeyDown={(e) => {
          keyDownHandler(e);
          onKeyDown && onKeyDown(e);
        }}
        open={open}
        placement={placement}
        anchorRef={anchorRef}
        pointer={true}
        variant={variant}
        tabIndex={-1}
      >
        {children}
      </AContextualNotification>
    );
  }
);

AContextualNotificationMenu.propTypes = {
  /**
   * The reference to the menu anchor. Can either be a React ref or a DOMRect object.
   */
  anchorRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({current: PropTypes.any}),
    // DOMRect shape
    PropTypes.shape({
      x: PropTypes.number,
      y: PropTypes.number,
      width: PropTypes.number,
      height: PropTypes.number,
      top: PropTypes.number,
      right: PropTypes.number,
      bottom: PropTypes.number,
      left: PropTypes.number
    })
  ]).isRequired,
  /**
   * Toggles the behavior of focusing the menu on open.
   */
  focusOnOpen: PropTypes.bool,
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
   * Sets the [WAI-ARIA](https://www.w3.org/WAI/standards-guidelines/aria/) role.
   */
  role: PropTypes.string,
  /**
   * Sets the display variant.
   */
  variant: PropTypes.oneOf(["success", "info", "warning", "danger"])
};

AContextualNotificationMenu.displayName = "AContextualNotificationMenu";

export default AContextualNotificationMenu;
