import React, {forwardRef} from "react";

const ASkeletonHeader = forwardRef(
  ({className: propsClassName, loading, ...rest}, ref) => {
    let className = `a-skeleton__header`;

    if (propsClassName) {
      className += ` ${propsClassName}`;
    }

    return <div ref={ref} className={className} {...rest} />;
  }
);

ASkeletonHeader.propTypes = {};

ASkeletonHeader.displayName = "ASkeletonHeader";

export default ASkeletonHeader;
