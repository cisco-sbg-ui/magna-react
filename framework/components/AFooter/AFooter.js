import React, {forwardRef} from "react";

const AFooter = forwardRef(
  ({children, className: propsClassName, ...rest}, ref) => {
    let className = "a-footer";

    if (propsClassName) {
      className += ` ${propsClassName}`;
    }

    return (
      <footer {...rest} ref={ref} className={className}>
        {children}
      </footer>
    );
  }
);

AFooter.displayName = "AFooter";

export default AFooter;
