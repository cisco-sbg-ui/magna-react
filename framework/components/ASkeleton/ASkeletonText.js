import React, {forwardRef} from "react";

import "./ASkeleton.scss";

const ASkeletonText = forwardRef(
  ({className: propsClassName, animated, ...rest}, ref) => {
    let className = `a-skeleton__text`;

    if (propsClassName) {
      className += ` ${propsClassName}`;
    }

    if (animated) {
      className += ` a-skeleton--animated`;
    }

    return <div ref={ref} className={className} {...rest} />;
  }
);

ASkeletonText.displayName = "ASkeletonText";

export default ASkeletonText;
