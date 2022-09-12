import PropTypes from "prop-types";
import React, {forwardRef} from "react";

import "./ADivider.scss";

const ADivider = forwardRef(
  (
    {className: propsClassName, light, lighter, role = "separator", ...rest},
    ref
  ) => {
    let className = "a-divider";

    if (lighter) {
      className += " a-divider--color-lighter";
    } else if (light) {
      className += " a-divider--color-light";
    }

    if (propsClassName) {
      className += ` ${propsClassName}`;
    }

    return <hr {...rest} role={role} ref={ref} className={className} />;
  }
);

ADivider.defaultProps = {
  role: "separator"
};

ADivider.propTypes = {
  /**
   * Toggles the light variant.
   */
  light: PropTypes.bool,
  /**
   * Toggles the lighter variant.
   */
  lighter: PropTypes.bool,
  /**
   * Sets the [WAI-ARIA](https://www.w3.org/WAI/standards-guidelines/aria/) role.
   */
  role: PropTypes.oneOf(["separator", "presentation"])
};

ADivider.displayName = "ADivider";

export default ADivider;
