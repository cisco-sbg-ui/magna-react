import React, {forwardRef} from "react";

import "./AList.scss";

const AListItemContent = forwardRef(
  ({children, className: propsClassName, ...rest}, ref) => {
    let className = "a-list-item__content";

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

AListItemContent.displayName = "AListItemContent";

export default AListItemContent;
