import PropTypes from "prop-types";
import React, {useCallback, useEffect, useRef} from "react";

import {ATooltip} from "../ATooltip";
import useToggle from "../../hooks/useToggle/useToggle";
import useOutsideClick from "../../hooks/useOutsideClick/useOutsideClick";
import {handleMultipleRefs} from "../../utils/helpers";

const ATriggerTooltip = ({
  children,
  anchorRef,
  triggerRef,
  trigger = "hover",
  openDelay = 400,
  closeDelay,
  onClose,
  content,
  disabled = false,
  wrapChildren = false,
  wrapperClass,
  onlyIfTruncated,
  ...rest
}) => {
  const childrenRef = useRef([]);
  const childrenRefCurrent = childrenRef.current;
  const firstChildRef = {current: childrenRefCurrent[0]};
  // If an anchorRef is provided, use it. Otherwise, attach to first child.
  const tooltipAnchorRef = anchorRef || firstChildRef;

  const checkForTruncation = useCallback(() => {
    if (!onlyIfTruncated) {
      return true;
    }

    const element = (anchorRef && anchorRef.current) || childrenRef.current[0];

    if (!element) {
      return true;
    }

    return (
      element.offsetHeight < element.scrollHeight ||
      element.offsetWidth < element.scrollWidth
    );
  }, [onlyIfTruncated, anchorRef, childrenRef]);

  const {
    isOpen,
    open,
    close: toggleClose,
    toggle
  } = useToggle(openDelay, closeDelay, checkForTruncation);

  const close = useCallback(() => {
    toggleClose();

    onClose && onClose();
  }, [toggleClose, onClose]);

  useOutsideClick({
    isEnabled: triggerRef && triggerRef.current && trigger === "click",
    rootRef: triggerRef,
    onClick: close
  });

  useEffect(() => {
    if (!content || disabled) {
      return;
    }

    const childRefs =
      triggerRef && triggerRef.current
        ? [triggerRef.current]
        : childrenRefCurrent;

    switch (trigger) {
      case "hover":
        childRefs.forEach((childRef) => {
          childRef.addEventListener("mouseenter", open);
          childRef.addEventListener("mouseleave", close);
        });
        break;
      case "click":
        childRefs.forEach((childRef) => {
          childRef.addEventListener("click", toggle);
        });
        break;
    }

    return () => {
      childRefs.forEach((childRef) => {
        if (!childRef) {
          return;
        }
        childRef.removeEventListener("mouseenter", open);
        childRef.removeEventListener("mouseleave", close);
        childRef.removeEventListener("click", toggle);
      });
    };
  }, [
    trigger,
    childrenRefCurrent,
    triggerRef,
    close,
    open,
    toggle,
    disabled,
    content
  ]);

  return (
    <>
      {React.Children.map(children, (child, index) => {
        const toClone = wrapChildren ? (
          <div
            className={wrapperClass}
            style={{height: "fit-content", width: "fit-content"}}
          >
            {child}
          </div>
        ) : (
          child
        );

        return React.cloneElement(toClone, {
          ...toClone.props,
          ref: handleMultipleRefs(toClone.props.ref, (node) => {
            childrenRef.current[index] = node;
          })
        });
      })}
      <ATooltip
        anchorRef={tooltipAnchorRef}
        open={isOpen}
        onClose={close}
        pointer
        {...rest}
      >
        {content}
      </ATooltip>
    </>
  );
};

ATriggerTooltip.propTypes = {
  /** DOM event to trigger the tooltip */
  trigger: PropTypes.oneOf(["hover", "click"]),
  /**
   * Anchors the tooltip to the specified ref, leaving
   * trigger event on the child(ren).
   */
  anchorRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({current: PropTypes.any})
  ]),
  /** Delay in milliseconds before tooltip will open */
  openDelay: PropTypes.number,
  /** Delay in milliseconds before tooltip will close */
  closeDelay: PropTypes.number,
  /**
   * On close callback
   */
  onClose: PropTypes.func,
  /** Tooltip content */
  content: PropTypes.node,
  /** Disable the tooltip */
  disabled: PropTypes.bool,
  /**
   * Wrap the children elements in a div to allow tooltips on
   * disabled elements.
   */
  wrapChildren: PropTypes.bool,
  /**
   * Pass a class to the child wrapper.
   */
  wrapperClass: PropTypes.string,
  /**
   * Only show tooltip if the anchor element is truncated
   */
  onlyIfTruncated: PropTypes.bool
};

ATriggerTooltip.displayName = "ATriggerTooltip";

export default ATriggerTooltip;
