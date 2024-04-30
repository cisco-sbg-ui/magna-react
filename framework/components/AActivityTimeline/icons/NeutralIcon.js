import React from "react";
import "../AActivityTimeline.scss";

function NeutralIcon() {
  return (
    <svg
      fill="none"
      height="18"
      viewBox="0 0 18 18"
      width="18"
      data-testid="AActivityTimelineItemIcon-Neutral"
      className="a-activity-timeline__item__status-icon"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="9"
        cy="9"
        fill="var(--interact-bg-default)"
        r="8"
        stroke="var(--interact-border-weak-default)"
        stroke-width="2"
      ></circle>
    </svg>
  );
}

export default NeutralIcon;
