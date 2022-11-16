import React from "react";

import "./ADrawerContent.scss";

const ADrawerContent = ({children}) => {
  return <div className="drawer__content">{children}</div>;
};

ADrawerContent.displayName = "ADrawerContent";

export default ADrawerContent;
