import React, {forwardRef, useCallback, useMemo, useState} from "react";
import PropTypes from "prop-types";

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

AActivityTimelineItem.propTypes = {
  /**
   * Class name(s) to be applied to list item tag element.
   */
  className: PropTypes.string,

  /**
   * Determines if the timeline item is initially collapsed
   * when rendering the component in uncontrolled mode. Any
   * subsequent toggles of the timeline item are therefore
   * handled by the internals of this component.
   */
  defaultCollapsed: PropTypes.bool,

  /**
   * Determines if the timeline item is collapsed. This gives
   * you full control of the collapsed state of the timeline
   * item.
   */
  isCollapsed: PropTypes.bool,

  /**
   * A callback function for when the collapse/expand button
   * of the timeline item is being clicked. If you are controlling
   * the state of the component (i.e. passing `isCollapsed`), then
   * this is the right place to toggle said state.
   */
  onCollapse: PropTypes.func,

  /**
   * Determines which icon to render in the timeline item's bullet.
   */
  variant: PropTypes.oneOf([
    "neutral",
    "incomplete",
    "progress",
    "complete",
    "error"
  ])
};

AActivityTimelineItem.displayName = "AActivityTimelineItem";

export default AActivityTimelineItem;
