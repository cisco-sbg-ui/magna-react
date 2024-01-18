import React from "react";

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

APageLabel.propTypes = {};

APageLabel.displayName = "APageLabel";

export default APageLabel;
