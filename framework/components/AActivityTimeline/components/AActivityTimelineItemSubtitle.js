import React, {forwardRef} from "react";
import PropTypes from "prop-types";

import "../AActivityTimeline.scss";

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

AActivityTimelineItemSubtitle.propTypes = {
  /**
   * Class name(s) to be applied to element the children are wrapped in.
   */
  className: PropTypes.string
};

AActivityTimelineItemSubtitle.displayName = "AActivityTimelineItemSubtitle";

export default AActivityTimelineItemSubtitle;
