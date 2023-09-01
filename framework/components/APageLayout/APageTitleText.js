import React from "react";

const APageTitleText = ({className: propsClassName, children, ...rest}) => {
  let className = "a-page-title-text";

  if (propsClassName) {
    className += ` ${propsClassName}`;
  }

  return (
    <h1 className={className} {...rest}>
      {children}
    </h1>
  );
};

APageTitleText.displayName = "APageTitleText";

export default APageTitleText;
