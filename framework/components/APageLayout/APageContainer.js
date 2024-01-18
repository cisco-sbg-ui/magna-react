import React from "react";

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

APageContainer.propTypes = {};

APageContainer.displayName = "APageContainer";

export default APageContainer;
