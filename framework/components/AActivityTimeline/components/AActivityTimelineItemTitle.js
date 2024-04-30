import {forwardRef} from "react";
import PropTypes from "prop-types";

import "../AActivityTimeline.scss";

const AActivityTimelineItemTitle = forwardRef(
  ({children, className: propsClassName}, ref) => {
    let className = "a-activity-timeline__item__title";

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

AActivityTimelineItemTitle.propTypes = {
  /**
   * Class name(s) to be applied to element the children are wrapped in.
   */
  className: PropTypes.string
};

AActivityTimelineItemTitle.displayName = "AActivityTimelineItemTitle";

export default AActivityTimelineItemTitle;
