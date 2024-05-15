import React, {forwardRef} from "react";

import "../AActivityTimeline.scss";

const AActivityTimelineListItem = forwardRef(
  ({icon, children, className: propsClassName, status, ...rest}, ref) => {
    let className = "a-activity-timeline__list-item";

    if (status === "complete") {
      className += " a-activity-timeline__list-item--complete";
    }

    if (propsClassName) {
      className += ` ${propsClassName}`;
    }

    return (
      <li className={className} ref={ref} {...rest}>
        {icon}
        <div className="flex-grow-1">{children}</div>
      </li>
    );
  }
);

AActivityTimelineListItem.displayName = "AActivityTimelineListItem";

export default AActivityTimelineListItem;
