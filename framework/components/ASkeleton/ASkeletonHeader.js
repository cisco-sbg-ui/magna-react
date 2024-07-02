import React, {forwardRef} from "react";

import "./ASkeleton.scss";

const ASkeletonHeader = forwardRef(
  ({className: propsClassName, ...rest}, ref) => {
    let className = `a-skeleton__header`;

    if (propsClassName) {
      className += ` ${propsClassName}`;
    }

    return <div ref={ref} className={className} {...rest} />;
  }
);

ASkeletonHeader.displayName = "ASkeletonHeader";

export default ASkeletonHeader;
