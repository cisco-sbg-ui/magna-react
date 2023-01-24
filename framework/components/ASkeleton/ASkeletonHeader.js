import PropTypes from "prop-types";
import React, {forwardRef} from "react";

import "./ASkeleton.scss";

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
