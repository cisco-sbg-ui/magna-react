import {forwardRef, useContext} from "react";
import PropTypes from "prop-types";

import AIcon from "../../AIcon";
import AActivityTimelineContext from "./AActivityTimelineItemContext";

import "../AActivityTimeline.scss";

const DisclosureButton = ({children, onClick, isCollapsed}) => {
  return (
    <button
      className="a-activity-timeline__item__header a-activity-timeline__item__header--button"
      onClick={onClick}
      // Explicit coercion to boolean since `isCollapsed`
      // might not be passed in as type `boolean` from
      // a developer
      aria-expanded={!Boolean(isCollapsed)}
    >
      <AIcon className="a-activity-timeline__item__caret">
        {isCollapsed ? "caret-down" : "caret-up"}
      </AIcon>
      {children}
    </button>
  );
};

const AActivityTimelineItemHeader = forwardRef(
  ({children, className: propsClassName}, ref) => {
    const {isCollapsible, isCollapsed, onCollapse} = useContext(
      AActivityTimelineContext
    );

    let className = "a-activity-timeline__item__header";

    if (isCollapsible) {
      className += " a-activity-timeline__item__header--collapsible";
    }

    if (propsClassName) {
      className += ` ${propsClassName}`;
    }

    return isCollapsible ? (
      <DisclosureButton isCollapsed={isCollapsed} onClick={onCollapse}>
        {children}
      </DisclosureButton>
    ) : (
      <div className={className} ref={ref}>
        {children}
      </div>
    );
  }
);

AActivityTimelineItemHeader.propTypes = {
  /**
   * Class name(s) to be applied to element the children are wrapped in.
   */
  className: PropTypes.string
};

AActivityTimelineItemHeader.displayName = "AActivityTimelineItemHeader";

export default AActivityTimelineItemHeader;
