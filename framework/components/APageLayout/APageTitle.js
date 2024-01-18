import React from "react";
import PropTypes from "prop-types";

const APageTitle = ({
  className: propsClassName,
  title,
  withChildrenContainer = false,
  children,
  ...rest
}) => {
  let className = "a-page-title";

  if (propsClassName) {
    className += ` ${propsClassName}`;
  }

  return (
    <div className={className} {...rest}>
      {title && <h1 className="a-page-title__text">{title}</h1>}
      {withChildrenContainer ? (
        <div className="a-page-title__content">{children}</div>
      ) : (
        children
      )}
    </div>
  );
};

APageTitle.propTypes = {
  /**
   * Title text. If not supplied and using code, use `h1` for the text
   */
  title: PropTypes.string,
  /**
   * If not using `APageTitleContent`, set to true to wrap the content for size/alignment
   */
  withChildrenContainer: PropTypes.bool
};

APageTitle.displayName = "APageTitle";

export default APageTitle;
