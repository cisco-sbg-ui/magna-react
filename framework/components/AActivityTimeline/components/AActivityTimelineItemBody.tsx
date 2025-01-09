import type {PropsWithChildren} from "react";
import React from "react";

import "../AActivityTimeline.scss";

interface AActivityTimelineItemBodyProps {
  isCollapsed?: boolean;
}

function AActivityTimelineItemBody({
  isCollapsed = false,
  children
}: PropsWithChildren<AActivityTimelineItemBodyProps>) {
  let className = "a-activity-timeline__list-item__body";

  if (isCollapsed) {
    className += " a-activity-timeline__list-item__body--collapsed";
  }

  return <div className={className}>{children}</div>;
}

export default AActivityTimelineItemBody;
