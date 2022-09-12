import React, {forwardRef} from "react";

import "./APanel.scss";

const APanelHeader = forwardRef(
  ({children, className: propsClassName, ...rest}, ref) => {
    let className = "a-panel__header";

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

APanelHeader.displayName = "APanelHeader";

export default APanelHeader;
