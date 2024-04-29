import React, {forwardRef, useContext} from "react";

import AActivityTimelineContext from "./AActivityTimelineItemContext";

import "./AActivityTimeline.scss";

const AActivityTimelineItemBody = forwardRef(
  ({children, className: propsClassName}, ref) => {
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
        <div className={className} ref={ref}>
          {children}
        </div>
        <hr className="a-activity-timeline__divider" />
      </>
    );
  }
);

AActivityTimelineItemBody.displayName = "AActivityTimelineItemBody";

export default AActivityTimelineItemBody;
