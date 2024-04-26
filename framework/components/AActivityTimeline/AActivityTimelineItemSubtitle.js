import React from "react";

import "./AActivityTimeline.scss";

function AActivityTimelineItemSubtitle({children, className: propsClassName}) {
  let className = "a-activity-timeline__item__subtitle";

  if (propsClassName) {
    className += ` ${propsClassName}`;
  }

  return <div className={className}>{children}</div>;
}

export default AActivityTimelineItemSubtitle;
