import PropTypes from "prop-types";
import React, {forwardRef, useEffect, useRef} from "react";

import {useCombinedRefs} from "../../utils/hooks";

import AFloatingBase from "../AFloatingBase/AFloatingBase";
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
      open,
      placement,
      role = "menu",
      hideIfReferenceHidden,
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

    const closeHandler = (open) => {
      if (open) {
        return;
      }
      anchorRef.current && anchorRef.current.focus();
      onClose && onClose(open);
    };

    let className = `a-popover`;
    if (propsClassName) {
      className += ` ${propsClassName}`;
    }

    return (
      <AFloatingBase
        placement={placement}
        anchorRef={anchorRef}
        className="a-popover-floating-base"
        open={open}
        onClose={closeHandler}
        role={role}
        hideIfReferenceHidden={hideIfReferenceHidden}
        pointer
        tabIndex={-1}
      >
        <APanel {...rest} ref={combinedRef} className={className} type="dialog">
          {children}
        </APanel>
      </AFloatingBase>
    );
  }
);

APopover.propTypes = {
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
  role: PropTypes.string
};

APopover.displayName = "APopover";

export default APopover;
