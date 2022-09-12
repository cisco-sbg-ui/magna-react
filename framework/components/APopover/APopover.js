import PropTypes from "prop-types";
import React, {forwardRef, useEffect, useRef} from "react";

import {keyCodes} from "../../utils/helpers";
import {useCombinedRefs} from "../../utils/hooks";
import AMenuBase from "../AMenuBase";
import {APanel} from "../APanel";
import "./APopover.scss";

const APopover = forwardRef(
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
      }
    };

    let className = `a-popover`;
    if (propsClassName) {
      className += ` ${propsClassName}`;
    }

    return (
      <APanel
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
        type="dialog"
        tabIndex={-1}>
        {children}
      </APanel>
    );
  }
);

APopover.propTypes = {
  /**
   * The reference to the menu anchor.
   */
  anchorRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({current: PropTypes.any})
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
  role: PropTypes.string
};

APopover.displayName = "APopover";

export default APopover;
