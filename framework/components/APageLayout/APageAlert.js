import PropTypes from "prop-types";
import React, {forwardRef} from "react";
import "./APageAlert.scss";
import AToast from "../AToast";

const APageAlert = forwardRef(({className: propsClassName, ...rest}, ref) => {
  let className = "a-page-alert";

  if (propsClassName) {
    className += ` ${propsClassName}`;
  }

  return <AToast {...rest} className={className} ref={ref} />;
});

APageAlert.propTypes = {
  /**
   * String representing class names to be passed `AToast` component.
   */
  className: PropTypes.string,

  /**
   * Determines if the alert can be dismissed.
   */
  dismissible: PropTypes.bool,

  /** Node children */
  children: PropTypes.node
};

APageAlert.displayName = "APageAlert";

export default APageAlert;
