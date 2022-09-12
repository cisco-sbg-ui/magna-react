import React, {forwardRef} from "react";

import "./AHeader.scss";

const AHeaderSubtitle = forwardRef(
  ({children, className: propsClassName, ...rest}, ref) => {
    let className = "a-header__subtitle";

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

AHeaderSubtitle.displayName = "AHeaderSubtitle";

export default AHeaderSubtitle;
