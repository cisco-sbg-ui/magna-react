import React, {forwardRef} from "react";

const ASkeletonText = forwardRef(
  ({className: propsClassName, ...rest}, ref) => {
    let className = `a-skeleton__text`;

    if (propsClassName) {
      className += ` ${propsClassName}`;
    }

    return <div ref={ref} className={className} {...rest} />;
  }
);

ASkeletonText.propTypes = {};

ASkeletonText.displayName = "ASkeletonText";

export default ASkeletonText;
