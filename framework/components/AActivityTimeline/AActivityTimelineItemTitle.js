import {useContext} from "react";

import AIcon from "../AIcon";
import AActivityTimelineContext from "./AActivityTimelineItemContext";
import AActivityTimelineItemSubtitle from "./AActivityTimelineItemSubtitle";

import "./AActivityTimeline.scss";

function DisclosureButton({children, onClick, isCollapsed}) {
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

function AActivityTimelineItemTitle({
  children,
  className: propsClassName,
  subtitle
}) {
  const {isCollapsible, isCollapsed, onCollapse} = useContext(
    AActivityTimelineContext
  );

  let className = "a-activity-timeline__item__title";

  if (propsClassName) {
    className += ` ${propsClassName}`;
  }

  const titleContent = (
    <>
      <div className={className}>{children}</div>
      {subtitle && (
        <AActivityTimelineItemSubtitle>
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

export default AActivityTimelineItemTitle;
