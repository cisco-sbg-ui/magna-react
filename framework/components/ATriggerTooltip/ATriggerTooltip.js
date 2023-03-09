import PropTypes from "prop-types";
import React, {useEffect, useRef} from "react";

import ATooltip from "../ATooltip";
import useToggle from "../../hooks/useToggle";

const ATriggerTooltip = ({
  children,
  trigger = "mouseenter",
  openDelay = 400,
  closeDelay,
  content,
  ...rest
}) => {
  const childrenRef = useRef([]);
  const {isOpen, open, close, toggle} = useToggle(openDelay, closeDelay);

  useEffect(() => {
    const childRefs = childrenRef.current;
    switch (trigger) {
      case "mouseenter":
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
  }, [trigger, childrenRef, close, open, toggle]);

  const childElements = childrenRef.current.map((childRef, index) => {
    return (
      <ATooltip
        key={`index-${index}`}
        anchorRef={{current: childRef}}
        open={isOpen}
        pointer
        {...rest}
      >
        {content}
      </ATooltip>
    );
  });

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
      {childElements}
    </>
  );
};

ATriggerTooltip.propTypes = {
  /** DOM event to trigger the tooltip */
  trigger: PropTypes.string,
  /** Delay in milliseconds before tooltip will open */
  openDelay: PropTypes.number,
  /** Delay in milliseconds before tooltip will close */
  closeDelay: PropTypes.number,
  /** Tooltip content */
  content: PropTypes.string.isRequired
};

ATriggerTooltip.displayName = "ATriggerTooltip";

export default ATriggerTooltip;
