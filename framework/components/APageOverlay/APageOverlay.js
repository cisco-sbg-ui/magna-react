import {forwardRef} from "react";

import "./APageOverlay.scss";

const APageOverlay = forwardRef(
  ({children, className: propsClassName, as, ...rest}, ref) => {
    const Component = as || "div";
    let className = "a-page-overlay";
    if (propsClassName) {
      className += ` ${propsClassName}`;
    }

    return (
      <Component {...rest} className={className} ref={ref}>
        {children}
      </Component>
    );
  }
);

APageOverlay.displayName = "APageOverlay";

export default APageOverlay;
