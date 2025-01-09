import type {PropsWithChildren} from "react";
import React from "react";

import "../AActivityTimeline.scss";

interface AActivityTimelineItemHeaderContentProps {
  time?: React.ReactNode;
}

function AActivityTimelineItemHeaderContent({
  time,
  children
}: PropsWithChildren<AActivityTimelineItemHeaderContentProps>) {
  return (
    <>
      <div className="a-activity-timeline__list-item__title">{children}</div>
      <div className="a-activity-timeline__list-item__time">{time}</div>
    </>
  );
}

export default AActivityTimelineItemHeaderContent;
