import React, {forwardRef} from "react";

const ATimelineItemTitle = forwardRef(
  ({children, className: propsClassName, ...rest}, ref) => {
    let className = "a-timeline__title";

    if (propsClassName) {
      className += ` ${propsClassName}`;
    }

    return (
      <div {...rest} ref={ref} className={className}>
        {children}
      </div>
    );
  }
);

ATimelineItemTitle.displayName = "ATimelineItemTitle";

export default ATimelineItemTitle;
