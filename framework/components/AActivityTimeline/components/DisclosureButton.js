import React from "react";

import "../AActivityTimeline.scss";
import AIcon from "../../AIcon";

function DisclosureButton({
  className: propsClassName,
  children,
  onClick,
  isCollapsed
}) {
  let className = "a-activity-timeline__list-item__button";
  if (className) {
    className += ` ${propsClassName}`;
  }

  return (
    <button
      className={className}
      onClick={onClick}
      // Explicit coercion to boolean since `isCollapsed`
      // might not be passed in as type `boolean` from
      // a developer
      aria-expanded={!Boolean(isCollapsed)}
    >
      <AIcon className="a-activity-timeline__list-item__button__caret">
        {isCollapsed ? "caret-down" : "caret-up"}
      </AIcon>
      {children}
    </button>
  );
}

export default DisclosureButton;
