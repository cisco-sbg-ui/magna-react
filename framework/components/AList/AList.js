import PropTypes from "prop-types";
import React, {forwardRef} from "react";

import "./AList.scss";

const AList = forwardRef(
  (
    {
      children,
      className: propsClassName,
      component,
      hoverable = true,
      medium,
      ...rest
    },
    ref
  ) => {
    let className = "a-list";

    if (hoverable) {
      className += " a-list--hoverable";
    }

    if (propsClassName) {
      className += ` ${propsClassName}`;
    }

    if (medium) {
      className += ` a-list--medium`;
    }

    const TagName = component || "div";

    return (
      <TagName {...rest} ref={ref} className={className}>
        {children}
      </TagName>
    );
  }
);

AList.propTypes = {
  /**
   * Sets the base component.
   */
  component: PropTypes.elementType,
  /**
   * Toggles the hover visualization on list items.
   */
  hoverable: PropTypes.bool,
  /**
   * Magnetic medium size variant
   */ medium: PropTypes.bool
};

AList.displayName = "AList";

export default AList;
