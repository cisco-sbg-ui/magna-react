import React, {forwardRef} from "react";

import "./AActivityTimeline.scss";

const AActivityTimeline = forwardRef((props, ref) => {
  return (
    <ul className="a-activity-timeline" ref={ref}>
      {props.children}
    </ul>
  );
});

AActivityTimeline.displayName = "AActivityTimeline";

export default AActivityTimeline;
