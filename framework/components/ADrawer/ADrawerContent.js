import React, {forwardRef} from "react";

import "./ADrawerContent.scss";

const ADrawerContent = forwardRef(
  ({children, className: propsClassName, ...rest}, ref) => {
    let className = "a-drawer__content";
    if (propsClassName) {
      className += ` ${propsClassName}`;
    }
    return (
      <div ref={ref} className={className} {...rest}>
        {children}
      </div>
    );
  }
);

ADrawerContent.displayName = "ADrawerContent";

export default ADrawerContent;
