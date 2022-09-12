import React, {forwardRef} from "react";

import "./ALayout.scss";

const ASpacer = forwardRef(({className: propsClassName, ...rest}, ref) => {
  let className = "a-spacer";

  if (propsClassName) {
    className += ` ${propsClassName}`;
  }

  return <div {...rest} ref={ref} className={className} />;
});

ASpacer.displayName = "ASpacer";

export default ASpacer;
