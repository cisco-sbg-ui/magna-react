import React, {forwardRef} from "react";

import "./AActivityTimeline.scss";

const AActivityTimelineItemSubtitle = forwardRef(
  ({children, className: propsClassName}, ref) => {
    let className = "a-activity-timeline__item__subtitle";

    if (propsClassName) {
      className += ` ${propsClassName}`;
    }

    return (
      <div className={className} ref={ref}>
        {children}
      </div>
    );
  }
);

AActivityTimelineItemSubtitle.displayName = "AActivityTimelineItemSubtitle";

export default AActivityTimelineItemSubtitle;
