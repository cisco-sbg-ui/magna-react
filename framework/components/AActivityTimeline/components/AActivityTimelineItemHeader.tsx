import type {PropsWithChildren} from "react";
import React from "react";

import "../AActivityTimeline.scss";

function AActivityTimelineItemHeader({children}: PropsWithChildren) {
  return (
    <div className="a-activity-timeline__list-item__header">{children}</div>
  );
}

export default AActivityTimelineItemHeader;
