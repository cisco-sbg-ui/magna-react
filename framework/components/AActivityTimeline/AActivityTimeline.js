import React from "react";

import "./AActivityTimeline.scss";

function AActivityTimeline({children, className: propsClassName}) {
  let className = "a-activity-timeline";

  if (propsClassName) {
    className += ` ${propsClassName}`;
  }

  return <ul className={className}>{children}</ul>;
}

export default AActivityTimeline;
