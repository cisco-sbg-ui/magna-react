import React, {forwardRef, useState} from "react";

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
import type {AActivityTimelineItemProps} from "./types";

const ICON_STATUS_MAP = {
  neutral: <NeutralIcon />,
  incomplete: <IncompleteIcon />,
  progress: <ProgressIcon />,
  complete: <CompleteIcon />,
  error: <ErrorIcon />
};

const AActivityTimelineItem = forwardRef<
  HTMLLIElement,
  AActivityTimelineItemProps
>((props, ref) => {
  const {
    children,
    className: propsClassName,
    defaultCollapsed,
    isCollapsed: propsIsCollapsed,
    isCollapsible = false,
    onToggle,
    status = "neutral",
    time,
    title,
    withConnector,
    withDivider,
    itemNum,
    ...rest
  } = props;

  const isDividerVisibilityControlled = Object.prototype.hasOwnProperty.call(
    props,
    "withDivider"
  );

  const isCollapsibleStateControlled = Object.prototype.hasOwnProperty.call(
    props,
    "isCollapsed"
  );

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

  const numberedPaginatedList = itemNum ? (
    <span className="a-activity-timeline__list-item--num">{itemNum})</span>
  ) : null; //Null as safety for edge case of 0

  return (
    <AActivityTimelineListItem
      icon={statusIcon}
      status={status}
      withConnector={withConnector}
      ref={ref}
      className={propsClassName}
      {...rest}>
      {isCollapsible ? (
        <AActivityTimelineItemHeaderToggleButton
          isCollapsed={isCollapsed}
          onClick={(e: React.MouseEvent) => {
            if (typeof onToggle === "function") {
              onToggle(e);
            }

            if (!isCollapsibleStateControlled) {
              _setIsCollapsed((prev) => !prev);
            }
          }}>
          {headerContent}
        </AActivityTimelineItemHeaderToggleButton>
      ) : (
        <AActivityTimelineItemHeader>
          {numberedPaginatedList}
          {headerContent}
        </AActivityTimelineItemHeader>
      )}
      {children && (
        <AActivityTimelineItemBody isCollapsed={isCollapsed}>
          {children}
        </AActivityTimelineItemBody>
      )}
      {shouldRenderDivider && <AActivityTimelineItemDivider />}
    </AActivityTimelineListItem>
  );
});

AActivityTimelineItem.displayName = "AActivityTimelineItem";

export default AActivityTimelineItem;
