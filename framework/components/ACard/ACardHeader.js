import React, {forwardRef} from "react";

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

ACardHeader.propTypes = {};

ACardHeader.displayName = "ACardHeader";

export default ACardHeader;
