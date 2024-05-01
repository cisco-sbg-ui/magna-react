import React from "react";

import "./AActivityTimeline.scss";

const AActivityTimeline = (props) => {
  return <ul className="a-activity-timeline">{props.children}</ul>;
};

export default AActivityTimeline;
