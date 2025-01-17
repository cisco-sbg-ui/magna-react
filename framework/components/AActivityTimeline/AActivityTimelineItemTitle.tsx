import React, {forwardRef} from "react";
import type {AActivityTimelineItemTitleProps} from "./types";

const AActivityTimelineItemTitle = forwardRef<
  HTMLDivElement,
  AActivityTimelineItemTitleProps
>(({children, className: propsClassName}, ref) => {
  let className = "d-flex align-center gap-2";

  if (propsClassName) {
    className += ` ${propsClassName}`;
  }

  return (
    <div className={className} ref={ref}>
      {children}
    </div>
  );
});

AActivityTimelineItemTitle.displayName = "AActivityTimelineItemTitle";

export default AActivityTimelineItemTitle;
