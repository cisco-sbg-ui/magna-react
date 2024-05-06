import React, {forwardRef} from "react";
import PropTypes from "prop-types";

const AActivityTimelineItemTitle = forwardRef(
  ({children, className: propsClassName}, ref) => {
    let className = "d-flex align-center gap-2";

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

AActivityTimelineItemTitle.displayName = "AActivityTimelineItemTitle";

AActivityTimelineItemTitle.propTypes = {
  /**
   * Class name(s) to be applied to the root element.
   */
  className: PropTypes.string
};

export default AActivityTimelineItemTitle;
