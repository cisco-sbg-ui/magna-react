import React, {forwardRef} from "react";

const AListItemTitle = forwardRef(
  ({children, className: propsClassName, ...rest}, ref) => {
    let className = "a-list-item__title";

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

AListItemTitle.displayName = "AListItemTitle";

export default AListItemTitle;
