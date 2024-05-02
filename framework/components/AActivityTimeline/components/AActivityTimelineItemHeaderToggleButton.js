import React from "react";

import AIcon from "../../AIcon";

import "../AActivityTimeline.scss";

function AActivityTimelineItemHeaderToggleButton({
  children,
  onClick,
  isCollapsed
}) {
  return (
    <button
      className="a-activity-timeline__list-item__header a-activity-timeline__list-item__button"
      onClick={onClick}
      // Explicit coercion to boolean since `isCollapsed`
      // might not be passed in as type `boolean` from
      // a developer, and this attribute should explicitly
      // be "true" or "false"
      aria-expanded={!Boolean(isCollapsed)}
    >
      <AIcon
        className="a-activity-timeline__list-item__button__caret"
        size={16}
      >
        {isCollapsed ? "caret-down" : "caret-up"}
      </AIcon>
      {children}
    </button>
  );
}

export default AActivityTimelineItemHeaderToggleButton;
