import React, {forwardRef} from "react";

const AListItemAvatar = forwardRef(
  ({children, className: propsClassName, ...rest}, ref) => {
    let className = "a-list-item__avatar";

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

AListItemAvatar.displayName = "AListItemAvatar";

export default AListItemAvatar;
