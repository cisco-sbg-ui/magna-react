import type {PropsWithChildren} from "react";
import React from "react";

import AIcon from "../../AIcon";

import "../AActivityTimeline.scss";

interface AActivityTimelineItemHeaderToggleButtonProps {
  isCollapsed?: boolean;
  onClick: (e: React.MouseEvent) => void;
}

function AActivityTimelineItemHeaderToggleButton({
  onClick,
  isCollapsed,
  children
}: PropsWithChildren<AActivityTimelineItemHeaderToggleButtonProps>) {
  return (
    <button
      className="a-activity-timeline__list-item__header a-activity-timeline__list-item__button"
      onClick={onClick}
      // Explicit coercion to boolean since `isCollapsed`
      // might not be passed in as type `boolean` from
      // a developer, and this attribute should explicitly
      // be "true" or "false"
      // eslint-disable-next-line no-extra-boolean-cast
      aria-expanded={!Boolean(isCollapsed)}>
      <AIcon
        className="a-activity-timeline__list-item__button__caret"
        size={16}>
        {isCollapsed ? "caret-down" : "caret-up"}
      </AIcon>
      {children}
    </button>
  );
}

export default AActivityTimelineItemHeaderToggleButton;
