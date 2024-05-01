import React from "react";

import "../AActivityTimeline.scss";

function BodyContent({isCollapsed = false, children}) {
  let className = "a-activity-timeline__list-item__body";

  if (isCollapsed) {
    className += " a-activity-timeline__list-item__body--collapsed";
  }

  return <div className={className}>{children}</div>;
}

export default BodyContent;
