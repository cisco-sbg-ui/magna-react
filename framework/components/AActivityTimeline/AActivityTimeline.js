import React, {forwardRef} from "react";

import "./AActivityTimeline.scss";

const AActivityTimeline = forwardRef(
  (
    {children, className: propsClassName, asUnorderedList = false, ...rest},
    ref
  ) => {
    let className = "a-activity-timeline";

    if (propsClassName) {
      className += ` ${propsClassName}`;
    }

    const ListTag = asUnorderedList ? "ul" : "ol";

    return (
      <ListTag className={className} {...rest} ref={ref}>
        {children}
      </ListTag>
    );
  }
);

AActivityTimeline.displayName = "AActivityTimeline";

export default AActivityTimeline;
