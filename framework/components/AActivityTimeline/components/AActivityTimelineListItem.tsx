import React, {forwardRef} from "react";
import type {AActivityTimelineListItemProps} from "../types";

import "../AActivityTimeline.scss";

const AActivityTimelineListItem = forwardRef<
  HTMLLIElement,
  AActivityTimelineListItemProps
>(
  (
    {icon, children, className: propsClassName, status, withConnector, ...rest},
    ref
  ) => {
    let className = "a-activity-timeline__list-item";

    if (status === "complete") {
      className += " a-activity-timeline__list-item--complete";
    }

    // Explicit check for `true` and `false` since an `undefined` value
    // (i.e. a missing prop) means we should resort to default behavior
    if (withConnector === true) {
      className += " a-activity-timeline__list-item--connected";
    } else if (withConnector === false) {
      className += " a-activity-timeline__list-item--disconnected";
    }

    if (propsClassName) {
      className += ` ${propsClassName}`;
    }

    return (
      <li className={className} ref={ref} {...rest}>
        {icon}
        <div className="flex-grow-1">{children}</div>
      </li>
    );
  }
);

AActivityTimelineListItem.displayName = "AActivityTimelineListItem";

export default AActivityTimelineListItem;
