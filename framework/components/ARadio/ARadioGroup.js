import PropTypes from "prop-types";
import React, {forwardRef} from "react";

const ARadioGroup = ({
  horizontal = false,
  small = false,
  children,
  ...rest
}) => {
  let className = "a-radio-group";

  if (horizontal) {
    className += " a-radio-group--horizontal";
  }

  if (small) {
    className += " a-radio-group--small";
  }

  return (
    <div className={className} {...rest}>
      {children}
    </div>
  );
};

ARadioGroup.propTypes = {
  /**
   * Align the radio buttons horizontally
   */
  horizontal: PropTypes.bool,
  /**
   * Applies small variant to all child `ARadio` components
   */
  small: PropTypes.bool
};

export default ARadioGroup;
