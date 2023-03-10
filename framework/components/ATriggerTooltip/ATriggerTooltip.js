import PropTypes from "prop-types";
import React, {useEffect, useRef} from "react";

import ATooltip from "../ATooltip";
import useToggle from "../../hooks/useToggle/useToggle";
import useOutsideClick from "../../hooks/useOutsideClick/useOutsideClick";

const ATriggerTooltip = ({
  children,
  anchorRef,
  triggerRef,
  trigger = "hover",
  openDelay = 400,
  closeDelay,
  content,
  ...rest
}) => {
  const childrenRef = useRef([]);
  const {isOpen, open, close, toggle} = useToggle(openDelay, closeDelay);
  useOutsideClick({
    isEnabled: triggerRef && triggerRef.current && trigger === "click",
    rootRef: triggerRef,
    onClick: close
  });

  useEffect(() => {
    const childRefs =
      triggerRef && triggerRef.current
        ? [triggerRef.current]
        : childrenRef.current;
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
  }, [trigger, childrenRef, triggerRef, close, open, toggle]);

  // If an anchorRef is provided, use it. Otherwise, attach to first child.
  const tooltipAnchorRef = anchorRef || {current: childrenRef.current[0]};
  const tooltipElement = (
    <ATooltip anchorRef={tooltipAnchorRef} open={isOpen} pointer {...rest}>
      {content}
    </ATooltip>
  );

  return (
    <>
      {React.Children.map(children, (child, index) =>
        React.cloneElement(child, {
          ...child.props,
          ref: (ref) => {
            childrenRef.current[index] = ref;
          }
        })
      )}
      {tooltipElement}
    </>
  );
};

ATriggerTooltip.propTypes = {
  /** DOM event to trigger the tooltip */
  trigger: PropTypes.string,
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
  /** Tooltip content */
  content: PropTypes.string.isRequired
};

ATriggerTooltip.displayName = "ATriggerTooltip";

export default ATriggerTooltip;
