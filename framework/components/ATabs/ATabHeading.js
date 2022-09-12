import React, {forwardRef} from "react";

import "./ATabs.scss";

const ATabHeading = forwardRef(
  ({children, className: propsClassName, ...rest}, ref) => {
    let className = "a-tab-group__tab-heading";

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

ATabHeading.displayName = "ATabHeading";

export default ATabHeading;
