import {useContext} from "react";

import AIcon from "../AIcon";
import AActivityTimelineContext from "./AActivityTimelineItemContext";
import AActivityTimelineItemSubtitle from "./AActivityTimelineItemSubtitle";

import "./AActivityTimeline.scss";

function DisclosureButton({children, onClick, isExpanded}) {
  return (
    <button
      className="a-activity-timeline__item__button"
      onClick={onClick}
      aria-expanded={isExpanded}
    >
      <AIcon className="a-activity-timeline__item__caret">
        {isExpanded ? "caret-up" : "caret-down"}
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
  const {isExpandable, isExpanded, close, open} = useContext(
    AActivityTimelineContext
  );

  let className = "a-activity-timeline__item__title";

  if (propsClassName) {
    className += ` ${propsClassName}`;
  }

  const content = (
    <>
      <div className={className}>{children}</div>
      {subtitle && (
        <AActivityTimelineItemSubtitle>
          {subtitle}
        </AActivityTimelineItemSubtitle>
      )}
    </>
  );

  return isExpandable ? (
    <DisclosureButton
      className={className}
      isExpanded={isExpanded}
      onClick={isExpanded ? close : open}
    >
      {content}
    </DisclosureButton>
  ) : (
    content
  );
}

export default AActivityTimelineItemTitle;
