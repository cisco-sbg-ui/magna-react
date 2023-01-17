import PropTypes from "prop-types";
import React, {forwardRef} from "react";

import "./ASkeleton.scss";

const ASkeletonBlock = forwardRef(
  ({className: propsClassName, ...rest}, ref) => {
    let className = `a-skeleton__block`;

    if (propsClassName) {
      className += ` ${propsClassName}`;
    }

    return <div ref={ref} className={className} {...rest} />;
  }
);

ASkeletonBlock.propTypes = {};

ASkeletonBlock.displayName = "ASkeletonBlock";

export default ASkeletonBlock;
