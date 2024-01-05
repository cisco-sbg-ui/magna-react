import PropTypes from "prop-types";
import React, {forwardRef} from "react";

import "./ADivider.scss";

const ADivider = forwardRef(
  (
    {
      className: propsClassName,
      light = false,
      strong = false,
      role = "separator",
      ...rest
    },
    ref
  ) => {
    let className = "a-divider";

    if (light) {
      className += " a-divider--light";
    }

    if (strong) {
      className += " a-divider--strong";
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
   * Toggles the light variant (1px vs 2px).
   */
  light: PropTypes.bool,
  /**
   * Toggles the strong variant.
   */
  strong: PropTypes.bool,
  /**
   * Sets the [WAI-ARIA](https://www.w3.org/WAI/standards-guidelines/aria/) role.
   */
  role: PropTypes.oneOf(["separator", "presentation"])
};

ADivider.displayName = "ADivider";

export default ADivider;
