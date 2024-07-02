import React, {forwardRef} from "react";

import "./ACard.scss";

const ACardHeader = forwardRef(
  ({children, className: propsClassName, ...rest}, ref) => {
    let className = "a-card__header";

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

ACardHeader.displayName = "ACardHeader";

export default ACardHeader;
