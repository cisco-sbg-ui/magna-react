import type {PropsWithChildren} from "react";
import React from "react";

import "../AActivityTimeline.scss";

//TODO Make doc parser happy in meantime since it doesn't support empty components
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function AActivityTimelineItemDivider(props: PropsWithChildren) {
  return <hr className="a-activity-timeline__list-item__divider" />;
}

export default AActivityTimelineItemDivider;
