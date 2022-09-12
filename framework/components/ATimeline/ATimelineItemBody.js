import React, {forwardRef} from "react";

const ATimelineItemBody = forwardRef(
  ({children, className: propsClassName, ...rest}, ref) => {
    let className = "a-timeline__body";

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

ATimelineItemBody.displayName = "ATimelineItemBody";

export default ATimelineItemBody;
