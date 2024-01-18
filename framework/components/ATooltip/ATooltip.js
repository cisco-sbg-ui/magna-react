import PropTypes from "prop-types";
import React, {forwardRef, useRef} from "react";

import AMenuBase from "../AMenuBase";
import {useCombinedRefs} from "../../utils/hooks";

const ATooltip = forwardRef(
  (
    {
      anchorRef,
      children,
      className: propsClassName,
      onClose,
      open,
      placement,
      pointer = true,
      role = "tooltip",
      maxWidth,
      style: propsStyle,
      ...rest
    },
    ref
  ) => {
    const tooltipRef = useRef(null);
    const combinedRef = useCombinedRefs(ref, tooltipRef);
    const style = {...propsStyle};

    let className = `a-tooltip`;
    if (pointer) {
      className += " a-tooltip--arrow";
    }

    if (propsClassName) {
      className += ` ${propsClassName}`;
    }

    if (maxWidth) {
      style.maxWidth = maxWidth;
    }

    return (
      <AMenuBase
        {...rest}
        style={style}
        ref={combinedRef}
        role={role}
        className={className}
        onClose={onClose}
        open={open}
        placement={placement}
        removeSpacer={true}
        anchorRef={anchorRef}
        pointer={pointer}
      >
        {children}
      </AMenuBase>
    );
  }
);

export const ATooltipPropTypes = {
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
   * Override the default max-width
   */
  maxWidth: PropTypes.string,
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
   * Toggles the menu pointer.
   */
  pointer: PropTypes.bool,
  /**
   * Sets the [WAI-ARIA](https://www.w3.org/WAI/standards-guidelines/aria/) role.
   */
  role: PropTypes.string
};

ATooltip.propTypes = ATooltipPropTypes;

ATooltip.displayName = "ATooltip";

export default ATooltip;
