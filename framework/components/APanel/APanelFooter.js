import React, {forwardRef} from "react";

import "./APanel.scss";

const APanelFooter = forwardRef(
  ({children, className: propsClassName, ...rest}, ref) => {
    let className = "a-panel__footer";

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

APanelFooter.displayName = "APanelFooter";

export default APanelFooter;
