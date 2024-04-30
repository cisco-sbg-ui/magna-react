import React, {forwardRef} from "react";
import PropTypes from "prop-types";

const AActivityTimelineItemTags = forwardRef(
  ({children, className: propsClassName}, ref) => {
    let className = "a-activity-timeline__item__tags";

    if (propsClassName) {
      className += ` ${propsClassName}`;
    }

    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    );
  }
);

AActivityTimelineItemTags.propTypes = {
  /**
   * Class name(s) to be applied to element the children are wrapped in.
   */
  className: PropTypes.string
};

AActivityTimelineItemTags.displayName = "AActivityTimelineItemTags";

export default AActivityTimelineItemTags;
