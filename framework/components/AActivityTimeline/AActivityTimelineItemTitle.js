import {forwardRef} from "react";
import PropTypes from "prop-types";

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

AActivityTimelineItemTitle.propTypes = {
  /**
   * Class name(s) to be applied to element the children are wrapped in.
   */
  className: PropTypes.string,

  /**
   * React element to be rendered as the subtitle (just a string will suffice.)
   */
  subtitle: PropTypes.elementType,

  /**
   * A reference to the DOM node that the subtitle is rendered in.
   */
  subtitleRef: PropTypes.shape({current: PropTypes.any})
};

AActivityTimelineItemTitle.displayName = "AActivityTimelineItemTitle";

export default AActivityTimelineItemTitle;
