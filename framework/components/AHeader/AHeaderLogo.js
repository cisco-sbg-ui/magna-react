import PropTypes from "prop-types";
import React, {forwardRef} from "react";

import "./AHeader.scss";

const AHeaderLogo = forwardRef(
  ({children, className: propsClassName, href, ...rest}, ref) => {
    let className = "a-header__logo";

    if (propsClassName) {
      className += ` ${propsClassName}`;
    }

    return (
      <a {...rest} tabIndex="0" href={href} ref={ref} className={className}>
        {children}
      </a>
    );
  }
);

AHeaderLogo.defaultProps = {
  href: "/"
};

AHeaderLogo.propTypes = {
  /**
   * The logo link URL.
   */
  href: PropTypes.string
};

AHeaderLogo.displayName = "AHeaderLogo";

export default AHeaderLogo;
