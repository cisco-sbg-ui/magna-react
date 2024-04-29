import {forwardRef, useContext} from "react";

import AIcon from "../AIcon";
import AActivityTimelineContext from "./AActivityTimelineItemContext";
import AActivityTimelineItemSubtitle from "./AActivityTimelineItemSubtitle";

import "./AActivityTimeline.scss";

function DisclosureButton({children, onClick, isCollapsed}, ref) {
  return (
    <button
      className="a-activity-timeline__item__button"
      onClick={onClick}
      // Explicit coercion to boolean since `isCollapsed`
      // might not be passed in as type `boolean` from
      // a developer
      aria-expanded={!Boolean(isCollapsed)}
    >
      <AIcon className="a-activity-timeline__item__caret">
        {isCollapsed ? "caret-down" : "caret-up"}
      </AIcon>
      <div>{children}</div>
    </button>
  );
}

const AActivityTimelineItemTitle = forwardRef(
  ({children, className: propsClassName, subtitle, subtitleRef}, ref) => {
    const {isCollapsible, isCollapsed, onCollapse} = useContext(
      AActivityTimelineContext
    );

    let className = "a-activity-timeline__item__title";

    if (propsClassName) {
      className += ` ${propsClassName}`;
    }

    const titleContent = (
      <>
        <div className={className} ref={ref}>
          {children}
        </div>
        {subtitle && (
          <AActivityTimelineItemSubtitle ref={subtitleRef}>
            {subtitle}
          </AActivityTimelineItemSubtitle>
        )}
      </>
    );

    return isCollapsible ? (
      <DisclosureButton
        className={className}
        isCollapsed={isCollapsed}
        onClick={onCollapse}
      >
        {titleContent}
      </DisclosureButton>
    ) : (
      titleContent
    );
  }
);

AActivityTimelineItemTitle.displayName = "AActivityTimelineItemTitle";

export default AActivityTimelineItemTitle;
