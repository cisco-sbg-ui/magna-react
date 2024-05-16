import React, {forwardRef, useState} from "react";
import PropTypes from "prop-types";

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

const AActivityTimelineItem = forwardRef((props, ref) => {
  const {
    children,
    className: propsClassName,
    defaultCollapsed,
    isCollapsed: propsIsCollapsed,
    isCollapsible,
    onToggle,
    status = "neutral",
    time,
    title,
    withConnector,
    withDivider,
    ...rest
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
    <AActivityTimelineListItem
      icon={statusIcon}
      status={status}
      withConnector={withConnector}
      ref={ref}
      className={propsClassName}
      {...rest}
    >
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

AActivityTimelineItem.propTypes = {
  /**
   * Class name(s) to be applied to list item tag element.
   */
  className: PropTypes.string,

  /**
   * Determines if the timeline items renders as a collapsible
   * accordion. To set the initial collapsed state of the component,
   * use the `defaultCollapsed` prop.
   */
  isCollapsible: PropTypes.bool,

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
  onToggle: PropTypes.func,

  /**
   * Determines which icon to render in the timeline item's bullet.
   *
   * If an invalid status is passed, then the "neutral" status is used
   * as a fallback.
   */
  status: PropTypes.oneOf([
    "neutral",
    "incomplete",
    "progress",
    "complete",
    "error"
  ]),

  /**
   * The main title content. Can be a string or any other valid React Element.
   */
  title: PropTypes.node,

  /**
   * The time of the timeline item that is rendered underneath the bolded
   * title text. Can be a string or any other valid React Element.
   */
  time: PropTypes.elementType,

  /**
   * Determines if the item should have the vertical connector underneath the
   * timeline item bullet circle.
   *
   * If not explicitly passed, then every item gets a connector except for the
   * very last one in the list.
   *
   * Passing this prop can be useful if you're rendering a paginated list of data
   * and the last item in the user's current view of the list may not actually be
   * the very last item in the list (since it is paginated). In such cases, you
   * would want to show the connector to indicate that the timeline is still ongoing.
   * For this, you can explicitly pass `withConnector={true}` to guarantee it appears.
   */
  withConnector: PropTypes.bool,

  /**
   * Determines if the item should have a divider at the bottom.
   *
   * If not explicitly passed, then the divider is automatically rendered
   * for collapsible items (unless it is the last one in the list.)
   */
  withDivider: PropTypes.bool
};

export default AActivityTimelineItem;
