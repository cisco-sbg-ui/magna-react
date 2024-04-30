import React, {forwardRef, useMemo, useState} from "react";
import AActivityTimelineContext from "./AActivityTimelineItemContext";

import ProgressIcon from "./icons/ProgressIcon";
import ErrorIcon from "./icons/ErrorIcon";
import IncompleteIcon from "./icons/IncompleteIcon";
import NeutralIcon from "./icons/NeutralIcon";
import CompleteIcon from "./icons/CompleteIcon";

import "./AActivityTimeline.scss";

const ICON_VARIANT_MAP = {
  neutral: <NeutralIcon />,
  incomplete: <IncompleteIcon />,
  progress: <ProgressIcon />,
  complete: <CompleteIcon />,
  error: <ErrorIcon />
};

const AActivityTimelineItem = forwardRef((props, ref) => {
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

  const handleCollapse = useCallback(
    (e) => {
      if (!isCollapsedStateControlled) {
        setIsCollapsed((prevState) => !prevState);
      }

      if (typeof propsOnCollapse === "function") {
        propsOnCollapse(e);
      }
    },
    [isCollapsedStateControlled, propsOnCollapse]
  );

  const ctx = useMemo(
    () => ({
      isCollapsedStateControlled,
      isCollapsed: isCollapsedStateControlled ? propsIsCollapsed : isCollapsed,
      isCollapsible,
      onCollapse: handleCollapse,
      open: () => setIsCollapsed(false),
      close: () => setIsCollapsed(true)
    }),
    [
      isCollapsed,
      isCollapsedStateControlled,
      isCollapsible,
      propsIsCollapsed,
      handleCollapse
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
      <li className={className} ref={ref}>
        <div className="a-activity-timeline__item">
          {ICON_VARIANT_MAP[variant] || ICON_VARIANT_MAP.neutral}
          <div>{children}</div>
        </div>
      </li>
    </AActivityTimelineContext.Provider>
  );
});

AActivityTimelineItem.displayName = "AActivityTimelineItem";

export default AActivityTimelineItem;
