import React, {forwardRef} from "react";
import PropTypes from "prop-types";

import "./AActivityTimeline.scss";

const AActivityTimeline = forwardRef(
  (
    {
      children,
      className: propsClassName,
      hasUnorderedItems = false,
      numbered = false,
      ...rest
    },
    ref
  ) => {
    let className = "a-activity-timeline";

    if (propsClassName) {
      className += ` ${propsClassName}`;
    }

    if (numbered && !hasUnorderedItems) {
      className += " a-activity-timeline--numbered";
    }

    const ListTag = hasUnorderedItems ? "ul" : "ol";

    return (
      <ListTag className={className} ref={ref} {...rest}>
        {children}
      </ListTag>
    );
  }
);

AActivityTimeline.displayName = "AActivityTimeline";

AActivityTimeline.propTypes = {
  /**
   * Class name(s) to be applied to list tag element.
   */
  className: PropTypes.string,

  /**
   * Indicates that the timeline has items that are in a random
   * order, i.e., not sorted.
   *
   * This ultimately determines if the timeline renders as a <ol>
   * or <ul>.
   *
   * The default is an ordered list.
   */
  hasUnorderedItems: PropTypes.bool
};

export default AActivityTimeline;
