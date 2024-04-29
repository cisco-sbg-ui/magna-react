import React from "react";

import "./AActivityTimeline.scss";

function AActivityTimeline({
  children,
  className: propsClassName,
  asUnorderedList = false
}) {
  let className = "a-activity-timeline";

  if (propsClassName) {
    className += ` ${propsClassName}`;
  }

  const ListTag = asUnorderedList ? "ul" : "ol";

  return <ListTag className={className}>{children}</ListTag>;
}

export default AActivityTimeline;
