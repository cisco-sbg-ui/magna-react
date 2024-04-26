import React, {useContext} from "react";

import AActivityTimelineContext from "./AActivityTimelineItemContext";

import "./AActivityTimeline.scss";

function AActivityTimelineItemBody({children, className: propsClassName}) {
  const {isExpanded, isExpandable} = useContext(AActivityTimelineContext);

  let className = "a-activity-timeline__item__body";

  if (propsClassName) {
    className += ` ${propsClassName}`;
  }

  if (isExpandable && !isExpanded) {
    className += ` a-activity-timeline__item__body--hidden`;
  }

  return <div className={className}>{children}</div>;
}

export default AActivityTimelineItemBody;
