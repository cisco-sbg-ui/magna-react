import {forwardRef, useContext} from "react";

import AActivityTimelineItemSubtitle from "./AActivityTimelineItemSubtitle";

import "./AActivityTimeline.scss";

const AActivityTimelineItemTitle = forwardRef(
  ({children, className: propsClassName, subtitle, subtitleRef}, ref) => {
    let className = "a-activity-timeline__item__title";

    if (propsClassName) {
      className += ` ${propsClassName}`;
    }

    return (
      <>
        <div className={className} ref={ref}>
          {children}
        </div>
        {subtitle && (
          <AActivityTimelineItemSubtitle ref={subtitleRef}>
            {subtitle}
          </AActivityTimelineItemSubtitle>
        )}
      </>
    );
  }
);

AActivityTimelineItemTitle.displayName = "AActivityTimelineItemTitle";

export default AActivityTimelineItemTitle;
