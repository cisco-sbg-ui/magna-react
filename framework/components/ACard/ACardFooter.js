import PropTypes from "prop-types";
import React, {forwardRef} from "react";

const ACardFooter = forwardRef(
  ({children, className: propsClassName, ...rest}, ref) => {
    let className = "a-card__footer";

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

ACardFooter.propTypes = {};

ACardFooter.displayName = "ACardFooter";

export default ACardFooter;
