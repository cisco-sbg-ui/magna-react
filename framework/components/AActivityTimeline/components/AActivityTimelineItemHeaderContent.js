import React from "react";

import "../AActivityTimeline.scss";

function AActivityTimelineItemHeaderContent({time, children}) {
  return (
    <>
      <div className="a-activity-timeline__list-item__title">{children}</div>
      <div className="a-activity-timeline__list-item__time">{time}</div>
    </>
  );
}

export default AActivityTimelineItemHeaderContent;
