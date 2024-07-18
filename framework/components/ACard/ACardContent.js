import React, {forwardRef} from "react";

import "./ACard.scss";

const ACardContent = forwardRef(
  ({children, className: propsClassName, ...rest}, ref) => {
    let className = "a-card__content";

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

ACardContent.displayName = "ACardContent";

export default ACardContent;
