import React, {forwardRef} from "react";
import PropTypes from "prop-types";

import "./AActivityTimeline.scss";

const AActivityTimeline = forwardRef(
  (
    {children, className: propsClassName, asUnorderedList = false, ...rest},
    ref
  ) => {
    let className = "a-activity-timeline";

    if (propsClassName) {
      className += ` ${propsClassName}`;
    }

    const ListTag = asUnorderedList ? "ul" : "ol";

    return (
      <ListTag className={className} {...rest} ref={ref}>
        {children}
      </ListTag>
    );
  }
);

AActivityTimeline.propTypes = {
  /**
   * Determines if the timeline should render as a <ol> or <ul>.
   * The default is an ordered list.
   */
  asUnorderedList: PropTypes.bool,

  /**
   * Class name(s) to be applied to list tag element.
   */
  className: PropTypes.string
};

AActivityTimeline.displayName = "AActivityTimeline";

export default AActivityTimeline;
