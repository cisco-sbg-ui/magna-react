import React, {forwardRef} from "react";

import "./AHeader.scss";

const AHeader = forwardRef(
  ({children, className: propsClassName, ...rest}, ref) => {
    let className = "a-header";

    if (propsClassName) {
      className += ` ${propsClassName}`;
    }

    return (
      <header {...rest} ref={ref} className={className}>
        {children}
      </header>
    );
  }
);

AHeader.displayName = "AHeader";

export default AHeader;
