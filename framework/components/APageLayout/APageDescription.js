import React from "react";
import "./APageDescription.scss";

const APageDescription = ({className: propsClassName, children, ...rest}) => {
  let className = "a-page-description";

  if (propsClassName) {
    className += ` ${propsClassName}`;
  }

  return (
    <div className={className} {...rest}>
      {children}
    </div>
  );
};

APageDescription.propTypes = {};

APageDescription.displayName = "APageDescription";

export default APageDescription;
