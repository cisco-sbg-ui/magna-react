import React, {forwardRef} from "react";

import "./AActivityTimeline.scss";

const AActivityTimeline = forwardRef(
  (
    {children, className: propsClassName, hasUnorderedItems = false, ...rest},
    ref
  ) => {
    let className = "a-activity-timeline";

    if (propsClassName) {
      className += ` ${propsClassName}`;
    }

    const ListTag = hasUnorderedItems ? "ul" : "ol";

    return (
      <ListTag className={className} ref={ref} {...rest}>
        {props.children}
      </ListTag>
    );
  }
);

AActivityTimeline.displayName = "AActivityTimeline";

export default AActivityTimeline;
