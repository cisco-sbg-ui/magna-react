import React from "react";
import "./APageContainer.scss";

const APageContainer = ({className: propsClassName, children, ...rest}) => {
  let className = "a-page-container";

  if (propsClassName) {
    className += ` ${propsClassName}`;
  }

  return (
    <div className={className} {...rest}>
      {children}
    </div>
  );
};

APageContainer.displayName = "APageContainer";

export default APageContainer;
