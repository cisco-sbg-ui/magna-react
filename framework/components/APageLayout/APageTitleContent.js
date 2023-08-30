import React from "react";
import "./APageTitleContent.scss";

const APageTitleContent = ({className: propsClassName, children, ...rest}) => {
  let className = "a-page-title-content";

  if (propsClassName) {
    className += ` ${propsClassName}`;
  }

  return (
    <div className={className} {...rest}>
      {children}
    </div>
  );
};

APageTitleContent.displayName = "APageTitleContent";

export default APageTitleContent;
