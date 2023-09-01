import React from "react";

const APageTitleContentRight = ({
  className: propsClassName,
  children,
  ...rest
}) => {
  let className = "a-page-title-content__right";

  if (propsClassName) {
    className += ` ${propsClassName}`;
  }

  return (
    <div className={className} {...rest}>
      {children}
    </div>
  );
};

APageTitleContentRight.displayName = "APageTitleContentRight";

export default APageTitleContentRight;
