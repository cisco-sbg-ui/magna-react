import React, {forwardRef} from "react";

import "./AList.scss";

const AListItemAction = forwardRef(
  ({children, className: propsClassName, ...rest}, ref) => {
    let className = "a-list-item__action";

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

AListItemAction.displayName = "AListItemAction";

export default AListItemAction;
