import React, {useContext} from "react";

import AActivityTimelineContext from "./AActivityTimelineItemContext";

import "./AActivityTimeline.scss";

function AActivityTimelineItemBody({children, className: propsClassName}) {
  const {isCollapsed, isCollapsible} = useContext(AActivityTimelineContext);

  let className = "a-activity-timeline__item__body";

  if (propsClassName) {
    className += ` ${propsClassName}`;
  }

  if (isCollapsible && isCollapsed) {
    className += ` a-activity-timeline__item__body--hidden`;
  }

  return (
    <>
      <div className={className}>{children}</div>
      <hr className="a-activity-timeline__divider" />
    </>
  );

  return <div className={className}>{children}</div>;
}

export default AActivityTimelineItemBody;
