import React from "react";

import "../AActivityTimeline.scss";

function ListItem({icon, children}) {
  return (
    <li className="a-activity-timeline__list-item">
      {icon}
      <div className="flex-grow-1">{children}</div>
    </li>
  );
}

export default ListItem;
