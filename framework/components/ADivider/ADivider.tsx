import React, {forwardRef} from "react";
import type {ADividerProps} from "./types";

import "./ADivider.scss";

const ADivider = forwardRef<HTMLHRElement, ADividerProps>(
  (
    {
      className: propsClassName,
      light = false,
      strong = false,
      vertical = false,
      role = "separator",
      ...rest
    },
    ref
  ) => {
    let className = "a-divider";

    if (light) {
      className += " a-divider--light";
    }

    if (strong) {
      className += " a-divider--strong";
    }

    if (vertical) {
      className += " a-divider--vertical";
    }

    if (propsClassName) {
      className += ` ${propsClassName}`;
    }

    return <hr {...rest} role={role} ref={ref} className={className} />;
  }
);

ADivider.displayName = "ADivider";

export default ADivider;
