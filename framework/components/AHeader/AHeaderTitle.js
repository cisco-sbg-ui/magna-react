import React, {forwardRef} from "react";

import "./AHeader.scss";

const AHeaderTitle = forwardRef(
  ({children, className: propsClassName, ...rest}, ref) => {
    let className = "a-header__title h1";

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

AHeaderTitle.displayName = "AHeaderTitle";

export default AHeaderTitle;
