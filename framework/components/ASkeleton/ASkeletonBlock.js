import PropTypes from "prop-types";
import React, {forwardRef} from "react";

const ASkeletonBlock = forwardRef(
  ({className: propsClassName, height, style: propsStyle, ...rest}, ref) => {
    let className = `a-skeleton__block`,
      style = {...propsStyle};

    if (propsClassName) {
      className += ` ${propsClassName}`;
    }

    if (height) {
      style.height = `${height}px`;
    }

    return <div ref={ref} className={className} style={style} {...rest} />;
  }
);

ASkeletonBlock.propTypes = {
  /**
   * Set a custom height in px
   */
  height: PropTypes.number
};

ASkeletonBlock.displayName = "ASkeletonBlock";

export default ASkeletonBlock;
