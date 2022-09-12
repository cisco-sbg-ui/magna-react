import PropTypes from "prop-types";
import React, {forwardRef} from "react";

const ATimelineItem = forwardRef(
  (
    {
      children,
      className: propsClassName,
      time,
      variant,

      ...rest
    },
    ref
  ) => {
    const className = "a-timeline";

    let itemClass = "a-timeline__item";

    if (propsClassName) {
      itemClass += ` ${propsClassName}`;
    }

    if (variant) {
      itemClass += ` ${itemClass}--state-${variant}`;
    }

    return (
      <div {...rest} ref={ref} className={itemClass}>
        <div className={` ${className}__icon`}></div>
        <div className={` ${className}__time`}>{time}</div>
        <div className={` ${className}__content`}>{children}</div>
      </div>
    );
  }
);

ATimelineItem.propTypes = {
  /**
   * Time of event
   */
  time: PropTypes.node,
  /**
   * Item type variation
   */
  variant: PropTypes.oneOf(["default", "success", "info", "warning", "danger"])
    .isRequired
};

ATimelineItem.defaultProps = {
  variant: "default"
};

ATimelineItem.displayName = "ATimelineItem";

export default ATimelineItem;
