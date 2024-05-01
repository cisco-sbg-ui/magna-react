import React, {useState, useMemo} from "react";

import "./AActivityTimeline.scss";

import NeutralIcon from "./icons/NeutralIcon";
import IncompleteIcon from "./icons/IncompleteIcon";
import ProgressIcon from "./icons/ProgressIcon";
import CompleteIcon from "./icons/CompleteIcon";
import ErrorIcon from "./icons/ErrorIcon";
import ListItem from "./components/ListItem";
import DisclosureButton from "./components/DisclosureButton";
import Body from "./components/Body";
import BodyDivider from "./components/BodyDivider";
import HeaderContent from "./components/HeaderContent";

const ICON_STATUS_MAP = {
  neutral: <NeutralIcon />,
  incomplete: <IncompleteIcon />,
  progress: <ProgressIcon />,
  complete: <CompleteIcon />,
  error: <ErrorIcon />
};

const AActivityTimelineItem = (props) => {
  const {
    withDivider,
    children,
    status = "neutral",
    title,
    time,
    isCollapsible: propsIsCollapsible,
    onToggle,
    defaultCollapsed,
    isCollapsed: propsIsCollapsed
  } = props;
  const isCollapsible =
    propsIsCollapsible ||
    props.hasOwnProperty("defaultCollapsed") ||
    props.hasOwnProperty("isCollapsed");
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

  if (isCollapsible) {
    return (
      <ListItem icon={statusIcon}>
        <DisclosureButton
          className="a-activity-timeline__list-item__header"
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
          <HeaderContent time={time}>{title}</HeaderContent>
        </DisclosureButton>
        <Body isCollapsed={isCollapsed}>{children}</Body>
        {shouldRenderDivider && <BodyDivider />}
      </ListItem>
    );
  } else {
    return (
      <ListItem icon={statusIcon}>
        <div className="a-activity-timeline__list-item__header">
          <HeaderContent time={time}>{title}</HeaderContent>
        </div>
        <Body>{children}</Body>
        {shouldRenderDivider && <BodyDivider />}
      </ListItem>
    );
  }
};

export default AActivityTimelineItem;
