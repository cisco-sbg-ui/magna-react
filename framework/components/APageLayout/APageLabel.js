import React from "react";
import "./APageLabel.scss";

const APageLabel = ({className: propsClassName, children, ...rest}) => {
  let className = "a-page-label";

  if (propsClassName) {
    className += ` ${propsClassName}`;
  }

  return (
    <div className={className} {...rest}>
      {children}
    </div>
  );
};

APageLabel.displayName = "APageLabel";

export default APageLabel;
