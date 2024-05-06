import React from "react";
import "../AActivityTimeline.scss";

function IncompleteIcon() {
  return (
    <svg
      fill="none"
      height="18"
      className="a-activity-timeline__list-item__status-icon"
      viewBox="0 0 18 18"
      width="18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="9"
        cy="9"
        fill="var(--base-bg-default)"
        r="8"
        stroke="var(--control-border-default)"
        strokeWidth="2"
      ></circle>
    </svg>
  );
}

export default IncompleteIcon;
