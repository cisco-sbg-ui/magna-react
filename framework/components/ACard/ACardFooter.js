import React, {forwardRef} from "react";

import "./ACard.scss";

const ACardFooter = forwardRef(
  ({children, className: propsClassName, ...rest}, ref) => {
    let className = "a-card__footer";

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

ACardFooter.displayName = "ACardFooter";

export default ACardFooter;
