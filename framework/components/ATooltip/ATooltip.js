import PropTypes from "prop-types";
import React, {
  forwardRef,
  useRef,
  useState,
  useCallback,
  useEffect
} from "react";

import AMenuBase from "../AMenuBase";
import {useCombinedRefs} from "../../utils/hooks";
import "./ATooltip.scss";

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
      openDelay = 400,
      closeDelay = undefined,
      ...rest
    },
    ref
  ) => {
    const tooltipRef = useRef(null);
    const combinedRef = useCombinedRefs(ref, tooltipRef);

    const [isOpen, setIsOpen] = useState(open);

    const timeout = useRef();

    const openWithDelay = useCallback(() => {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
      timeout.current = setTimeout(() => {
        setIsOpen(true);
      }, openDelay);
    }, [openDelay]);

    const closeWithDelay = useCallback(() => {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
      timeout.current = setTimeout(
        () => {
          setIsOpen(false);
        },
        // when closeDelay is not provided, calculated to be shorter to avoid multiple tooltips on screen
        closeDelay ?? openDelay / 2
      );
    }, [closeDelay, openDelay]);

    // sync open prop change to internal state with delay
    useEffect(() => {
      if (open) {
        openWithDelay();
      } else {
        closeWithDelay();
      }
    }, [open, openWithDelay, closeWithDelay]);

    let className = `a-tooltip`;
    if (pointer) {
      className += " a-tooltip--arrow";
    }

    if (propsClassName) {
      className += ` ${propsClassName}`;
    }

    return (
      <AMenuBase
        {...rest}
        ref={combinedRef}
        role={role}
        className={className}
        onClose={onClose}
        open={isOpen}
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

ATooltip.propTypes = {
  /**
   * The reference to the menu anchor.
   */
  anchorRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({current: PropTypes.any})
  ]).isRequired,
  /**
   * Handles the request to close the menu.
   */
  onClose: PropTypes.func,
  /**
   * Toggles the `open` state.
   */
  open: PropTypes.bool,
  /**
   * Delay for showing the tooltip after changing `open` prop to `true`.
   * Set to 0 for no delay.
   */
  openDelay: PropTypes.number,
  /**
   * Delay for hiding the tooltip after changing `open` prop to `false`.
   * When not provided calculated as `openDelay / 2`. Use values smaller than
   * `openDelay` to avoid multiple tooltips on screen.
   */
  closeDelay: PropTypes.number,
  /**
   * The placement of the tooltip.
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

ATooltip.displayName = "ATooltip";

export default ATooltip;
