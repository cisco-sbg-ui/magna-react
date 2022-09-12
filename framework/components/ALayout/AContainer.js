import PropTypes from "prop-types";
import React, {forwardRef} from "react";

import "./ALayout.scss";

const AContainer = forwardRef(
  ({className: propsClassName, fluid = false, ...rest}, ref) => {
    let className = "a-container";

    if (fluid) {
      className += " a-container--fluid";
    }

    if (propsClassName) {
      className += ` ${propsClassName}`;
    }

    return <div {...rest} ref={ref} className={className} />;
  }
);

AContainer.propTypes = {
  /**
   * Removes the maximum width viewpoint restriction.
   */
  fluid: PropTypes.bool
};

AContainer.displayName = "AContainer";

export default AContainer;
