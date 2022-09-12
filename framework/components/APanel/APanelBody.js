import React, {forwardRef} from "react";

import "./APanel.scss";

const APanelBody = forwardRef(
  ({children, className: propsClassName, ...rest}, ref) => {
    let className = "a-panel__body";

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

APanelBody.displayName = "APanelBody";

export default APanelBody;
