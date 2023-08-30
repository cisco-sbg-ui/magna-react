import React from "react";
import "./APageTitleContent.scss";

const APageTitleContent = ({
  className: propsClassName,
  children,
  variant,
  ...rest
}) => {
  let className = "a-page-title-content";

  if (propsClassName) {
    className += ` ${propsClassName}`;
  }

  if (variant === "left") {
    className += ` a-page-title-content--left`;
  }

  return (
    <div className={className} {...rest}>
      {children}
    </div>
  );
};

APageTitleContent.displayName = "APageTitleContent";

export default APageTitleContent;
