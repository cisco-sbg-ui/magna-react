import React from "react";
import PropTypes from "prop-types";

const APageTitleContentRight = ({
  className: propsClassName,
  children,
  noLeftContent,
  ...rest
}) => {
  let className = "a-page-title-content__right";

  if (propsClassName) {
    className += ` ${propsClassName}`;
  }

  if (noLeftContent) {
    className += " a-page-title-content__right--noLeftContent";
  }

  return (
    <div className={className} {...rest}>
      {children}
    </div>
  );
};

APageTitleContentRight.propTypes = {
  /** Set to true if using for right aligned content without APageTitleContentLeft */
  noLeftContent: PropTypes.bool
};

APageTitleContentRight.displayName = "APageTitleContentRight";

export default APageTitleContentRight;
