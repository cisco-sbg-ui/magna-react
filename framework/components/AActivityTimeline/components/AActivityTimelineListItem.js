import React, {forwardRef} from "react";

import "../AActivityTimeline.scss";

const AActivityTimelineListItem = forwardRef(({icon, children}, ref) => {
  return (
    <li className="a-activity-timeline__list-item" ref={ref}>
      {icon}
      <div className="flex-grow-1">{children}</div>
    </li>
  );
});

AActivityTimelineListItem.displayName = "AActivityTimelineListItem";

export default AActivityTimelineListItem;
