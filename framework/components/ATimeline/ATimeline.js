import PropTypes from "prop-types";
import React, {forwardRef} from "react";

const baseClass = "a-timeline";

const ATimeline = forwardRef(
  ({children, className: propsClassName, centered, ...rest}, ref) => {
    let className = baseClass;

    if (propsClassName) {
      className += ` ${propsClassName}`;
    }

    if (centered) {
      className += ` ${baseClass}--centered`;
    }

    return (
      <div {...rest} ref={ref} className={className}>
        {children}
      </div>
    );
  }
);

ATimeline.propTypes = {
  /**
   * Toggles timeline item content vertical alignment with the icon.
   */
  centered: PropTypes.bool
};

ATimeline.displayName = "ATimeline";

export default ATimeline;
