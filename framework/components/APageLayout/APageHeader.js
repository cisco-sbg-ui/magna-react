import React from "react";
import PropTypes from "prop-types";
import "./APageHeader.scss";

const baseClass = "a-page-header";

const APageHeader = ({
  className: propsClassName,
  hasTopLine = false,
  children,
  ...rest
}) => {
  let className = baseClass;

  if (propsClassName) {
    className += ` ${propsClassName}`;
  }

  if (hasTopLine) {
    className += ` ${baseClass}--top-line`;
  }

  return (
    <div className={className} {...rest}>
      {children}
    </div>
  );
};

APageHeader.propTypes = {
  /**
   * Set to true if using a top line component such as ABreadcrumb
   */
  hasTopLine: PropTypes.bool
};

APageHeader.displayName = "APageHeader";

export default APageHeader;
