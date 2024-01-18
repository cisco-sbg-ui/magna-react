import React, {forwardRef} from "react";

const AListItemSubtitle = forwardRef(
  ({children, className: propsClassName, ...rest}, ref) => {
    let className = "a-list-item__subtitle";

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

AListItemSubtitle.displayName = "AListItemSubtitle";

export default AListItemSubtitle;
