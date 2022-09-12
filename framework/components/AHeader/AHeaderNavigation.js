import React, {forwardRef} from "react";

import "./AHeader.scss";

const AHeaderNavigation = forwardRef(
  ({children, className: propsClassName, ...rest}, ref) => {
    let className = "a-header__navigation";

    if (propsClassName) {
      className += ` ${propsClassName}`;
    }

    return (
      <div {...rest} ref={ref} className={className}>
        {children}
      </div>
    );
  }
);

AHeaderNavigation.displayName = "AHeaderNavigation";

export default AHeaderNavigation;
