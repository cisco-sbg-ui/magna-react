import React, {useState} from "react";

import "./AActivityTimeline.scss";

import AActivityTimelineItemBody from "./components/AActivityTimelineItemBody";
import AActivityTimelineItemDivider from "./components/AActivityTimelineItemDivider";
import AActivityTimelineItemHeader from "./components/AActivityTimelineItemHeader";
import AActivityTimelineItemHeaderContent from "./components/AActivityTimelineItemHeaderContent";
import AActivityTimelineItemHeaderToggleButton from "./components/AActivityTimelineItemHeaderToggleButton";
import AActivityTimelineListItem from "./components/AActivityTimelineListItem";

import CompleteIcon from "./icons/CompleteIcon";
import ErrorIcon from "./icons/ErrorIcon";
import IncompleteIcon from "./icons/IncompleteIcon";
import NeutralIcon from "./icons/NeutralIcon";
import ProgressIcon from "./icons/ProgressIcon";

const ICON_STATUS_MAP = {
  neutral: <NeutralIcon />,
  incomplete: <IncompleteIcon />,
  progress: <ProgressIcon />,
  complete: <CompleteIcon />,
  error: <ErrorIcon />
};

const AActivityTimelineItem = (props) => {
  const {
    children,
    defaultCollapsed,
    isCollapsed: propsIsCollapsed,
    isCollapsible,
    onToggle,
    status = "neutral",
    time,
    title,
    withDivider
  } = props;

  const isDividerVisibilityControlled = props.hasOwnProperty("withDivider");

  const isCollapsibleStateControlled = props.hasOwnProperty("isCollapsed");

  const shouldRenderDivider = isDividerVisibilityControlled
    ? withDivider
    : isCollapsible;

  const statusIcon = ICON_STATUS_MAP[status] || ICON_STATUS_MAP.neutral;

  /**
   * Internal collapsed state for when component is rendered uncontrolled
   */
  const [_isCollapsed, _setIsCollapsed] = useState(
    isCollapsible ? defaultCollapsed : false
  );

  const isCollapsed = isCollapsibleStateControlled
    ? propsIsCollapsed
    : _isCollapsed;

  const headerContent = (
    <AActivityTimelineItemHeaderContent time={time}>
      {title}
    </AActivityTimelineItemHeaderContent>
  );

  return (
    <AActivityTimelineListItem icon={statusIcon}>
      {isCollapsible ? (
        <AActivityTimelineItemHeaderToggleButton
          isCollapsed={isCollapsed}
          onClick={(e) => {
            if (typeof onToggle === "function") {
              onToggle(e);
            }

            if (!isCollapsibleStateControlled) {
              _setIsCollapsed((prev) => !prev);
            }
          }}
        >
          {headerContent}
        </AActivityTimelineItemHeaderToggleButton>
      ) : (
        <AActivityTimelineItemHeader>
          {headerContent}
        </AActivityTimelineItemHeader>
      )}
      <AActivityTimelineItemBody isCollapsed={isCollapsed}>
        {children}
      </AActivityTimelineItemBody>
      {shouldRenderDivider && <AActivityTimelineItemDivider />}
    </AActivityTimelineListItem>
  );
};

export default AActivityTimelineItem;
