import React, {forwardRef} from "react";

import "./AActivityTimeline.scss";
import type {AActivityTimelineProps} from "./types";

const AActivityTimeline = forwardRef<
  HTMLUListElement | HTMLOListElement,
  AActivityTimelineProps
>(
  (
    {
      children,
      className: propsClassName,
      hasUnorderedItems = false,
      numbered = false,
      ...rest
    },
    ref
  ) => {
    let className = "a-activity-timeline";

    if (propsClassName) {
      className += ` ${propsClassName}`;
    }

    if (numbered && !hasUnorderedItems) {
      className += " a-activity-timeline--numbered";
    }

    const ListTag = hasUnorderedItems ? "ul" : "ol";

    return React.createElement(
      ListTag,
      {className, ref: ref, ...rest},
      children
    );
  }
);

AActivityTimeline.displayName = "AActivityTimeline";

export default AActivityTimeline;
