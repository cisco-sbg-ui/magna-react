import React from "react";
import PropTypes from "prop-types";
import "./APageTitle.scss";

const APageTitle = ({className: propsClassName, title, children, ...rest}) => {
  let className = "a-page-title";

  if (propsClassName) {
    className += ` ${propsClassName}`;
  }

  return (
    <div className={className} {...rest}>
      {title && <h1 className="a-page-title__text">{title}</h1>}
      <div className="a-page-title__content">{children}</div>
    </div>
  );
};

APageTitle.propTypes = {
  /**
   * Title text. If not supplied and using code, use `h1` for the text
   */
  title: PropTypes.string
};

APageTitle.displayName = "APageTitle";

export default APageTitle;
