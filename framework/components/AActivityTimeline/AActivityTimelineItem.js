import React, {useMemo, useState} from "react";
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

function AActivityTimelineItem(props) {
  const {
    children,
    className: propsClassName,
    defaultCollapsed,
    isCollapsed: propsIsCollapsed,
    onCollapse: propsOnCollapse,
    variant = "neutral"
  } = props;

  const isCollapsedStateControlled = props.hasOwnProperty("isCollapsed");

  const isCollapsible =
    isCollapsedStateControlled || props.hasOwnProperty("defaultCollapsed");

  /**
   * Only used when the collapsed state is uncontrolled, i.e., when the
   * developer does not pass an `isCollapsed` prop.
   */
  const [isCollapsed, setIsCollapsed] = useState(
    isCollapsedStateControlled ? propsIsCollapsed : defaultCollapsed || false
  );

  const handleToggle = () => {
    setIsCollapsed((prevState) => !prevState);
  };

  const ctx = useMemo(
    () => ({
      isCollapsedStateControlled,
      isCollapsed: isCollapsedStateControlled ? propsIsCollapsed : isCollapsed,
      isCollapsible,
      onCollapse: isCollapsedStateControlled ? propsOnCollapse : handleToggle,
      open: () => setIsCollapsed(false),
      close: () => setIsCollapsed(true)
    }),
    [
      isCollapsed,
      isCollapsedStateControlled,
      isCollapsible,
      propsIsCollapsed,
      propsOnCollapse
    ]
  );

  let className = "a-activity-timeline__list-item";

  if (variant === "complete") {
    className += " a-activity-timeline__list-item--complete";
  }

  if (isCollapsible) {
    className +=
      " a-activity-timeline__list-item--collapsible a-activity-timeline__item--collapsible";
  }

  if (propsClassName) {
    className += ` ${propsClassName}`;
  }

  return (
    <AActivityTimelineContext.Provider value={ctx}>
      <li className={className}>
        <div className="a-activity-timeline__item">
          {ICON_VARIANT_MAP[variant] || ICON_VARIANT_MAP.neutral}
          <div>{children}</div>
        </div>
      </li>
    </AActivityTimelineContext.Provider>
  );
}

export default AActivityTimelineItem;
