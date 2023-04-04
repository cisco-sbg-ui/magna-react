import PropTypes from "prop-types";
import React, {forwardRef} from "react";

import "./ACard.scss";

const ACardContent = forwardRef(
  ({children, className: propsClassName, ...rest}, ref) => {
    let className = "a-card__content";

    if (propsClassName) {
      className += ` ${propsClassName}`;
    }

    return (
      <div {...rest} ref={ref} className={className}>
        {children}
      </div>
    );
  }
);

ACardContent.propTypes = {};

ACardContent.displayName = "ACardContent";

export default ACardContent;
