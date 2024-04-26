import React, {useState} from "react";
import AIcon from "../AIcon";
import AActivityTimelineContext from "./AActivityTimelineItemContext";

import "./AActivityTimeline.scss";
import ProgressIcon from "./ProgressIcon";

const ICON_VARIANT_MAP = {
  neutral: (
    <div className="a-activity-timeline__item__css-icon a-activity-timeline__item__css-icon--neutral" />
  ),
  incomplete: (
    <div className="a-activity-timeline__item__css-icon a-activity-timeline__item__css-icon--incomplete" />
  ),
  progress: <ProgressIcon />,
  complete: (
    <AIcon
      className="a-activity-timeline__item__svg-icon a-activity-timeline__item__svg-icon--complete"
      size={24}
    >
      check-circle
    </AIcon>
  ),
  error: (
    <AIcon
      className="a-activity-timeline__item__svg-icon a-activity-timeline__item__svg-icon--error"
      size={24}
    >
      x-circle
    </AIcon>
  )
};

function AActivityTimelineItem({
  children,
  className: propsClassName,
  isExpandable = false,
  isInitExpanded = false,
  variant = "neutral"
}) {
  const [isExpanded, setIsExpanded] = useState(isInitExpanded);

  let className = "a-activity-timeline__list-item";

  if (variant === "complete") {
    className += " a-activity-timeline__list-item--complete";
  }

  if (isExpandable) {
    className +=
      " a-activity-timeline__list-item--expandable a-activity-timeline__item--expandable";
  }

  if (propsClassName) {
    className += ` ${propsClassName}`;
  }

  return (
    <AActivityTimelineContext.Provider
      value={{
        isExpanded,
        isExpandable,
        open: () => setIsExpanded(true),
        close: () => setIsExpanded(false)
      }}
    >
      <li className={className}>
        <div className="a-activity-timeline__item">
          {ICON_VARIANT_MAP[variant]}
          <div>{children}</div>
        </div>
        {isExpandable && <hr className="a-activity-timeline__divider" />}
      </li>
    </AActivityTimelineContext.Provider>
  );
}

export default AActivityTimelineItem;
