import React, {forwardRef} from "react";

import "../AActivityTimeline.scss";

const AActivityTimelineListItem = forwardRef(
  ({icon, children, status}, ref) => {
    let className = "a-activity-timeline__list-item";

    if (status === "complete") {
      className += " a-activity-timeline__list-item--complete";
    }

    return (
      <li className={className} ref={ref}>
        {icon}
        <div className="flex-grow-1">{children}</div>
      </li>
    );
  }
);

AActivityTimelineListItem.displayName = "AActivityTimelineListItem";

export default AActivityTimelineListItem;
