import React, {forwardRef} from "react";

import ADivider from "../ADivider";
import "./AListItemDivider.scss";

const AListItemDivider = forwardRef(
  ({className: propsClassName, ...rest}, ref) => {
    let className = "a-list-item__divider";

    if (propsClassName) {
      className += ` ${propsClassName}`;
    }

    return <ADivider {...rest} ref={ref} className={className} />;
  }
);

AListItemDivider.displayName = "AListItemDivider";

export default AListItemDivider;
