import React from "react";
import PropTypes from "prop-types";

import AActivityTimelineItemBody from "./components/AActivityTimelineItemBody";
import AActivityTimelineItemContainer from "./components/AActivityTimelineItemContainer";
import AActivityTimelineItemHeader from "./components/AActivityTimelineItemHeader";
import AActivityTimelineItemSubtitle from "./components/AActivityTimelineItemSubtitle";
import AActivityTimelineItemTags from "./components/AActivityTimelineItemTags";
import AActivityTimelineItemTitle from "./components/AActivityTimelineItemTitle";

const AActivityTimelineItem = ({
  children,
  tags,
  time,
  title,
  ...timelineItemContainerProps
}) => {
  return (
    <AActivityTimelineItemContainer {...timelineItemContainerProps}>
      <AActivityTimelineItemHeader>
        <AActivityTimelineItemTitle>{title}</AActivityTimelineItemTitle>
        {time && (
          <AActivityTimelineItemSubtitle>{time}</AActivityTimelineItemSubtitle>
        )}
        {tags && <AActivityTimelineItemTags>{tags}</AActivityTimelineItemTags>}
      </AActivityTimelineItemHeader>
      {children && (
        <AActivityTimelineItemBody>{children}</AActivityTimelineItemBody>
      )}
    </AActivityTimelineItemContainer>
  );
};

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
  status: PropTypes.oneOf([
    "neutral",
    "incomplete",
    "progress",
    "complete",
    "error"
  ]),

  /**
   * Tags to be rendered next to the title.
   */
  tags: PropTypes.elementType,

  /**
   * The time associated with the item.
   */
  time: PropTypes.elementType,

  /**
   * The title of the item.
   */
  title: PropTypes.elementType,

  /**
   * Determines if the item should render with a divider at the bottom.
   * If the component is collapsible, then this renders by default, so
   * you can use this prop to override such behavior.
   */
  withDivider: PropTypes.bool
};

export default AActivityTimelineItem;
