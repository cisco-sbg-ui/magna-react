import PropTypes from "prop-types";
import React, {forwardRef} from "react";

import "./ACard.scss";

const ACardContainer = forwardRef(
  ({children, className: propsClassName, component, flat, ...rest}, ref) => {
    let className = "a-card-container";

    if (flat) className += " a-card-container--flat";

    if (propsClassName) {
      className += ` ${propsClassName}`;
    }

    const TagName = component || "div";

    return (
      <TagName {...rest} ref={ref} className={className}>
        {children}
      </TagName>
    );
  }
);

ACardContainer.propTypes = {
  /**
   * Sets the base component.
   */
  component: PropTypes.elementType,

  /**
   * Removes the shadow from the card container.
   */
  flat: PropTypes.bool
};

ACardContainer.displayName = "ACardContainer";

export default ACardContainer;
