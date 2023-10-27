import React from "react";
import PropTypes from "prop-types";
import ACopyButton from "../ACopyButton";
import "./ANetworkValue.scss";

const baseClass = "a-network-value";

const ANetworkValue = ({
  className: propsClassName,
  children,
  copyButton,
  copyValue,
  ...rest
}) => {
  let className = baseClass;

  if (propsClassName) {
    className += ` ${propsClassName}`;
  }

  return (
    <div className={className} {...rest}>
      <div className={`${baseClass}__value`}>{children}</div>
      {copyButton && (
        <div className={`${baseClass}__copy`}>
          <ACopyButton
            value={copyValue || children}
            defaultLabel={false}
            small
          />
        </div>
      )}
    </div>
  );
};

ANetworkValue.propTypes = {
  /**
   * Show a copy button next to the vaulue
   */
  copyButton: PropTypes.bool,
  /**
   * Value to copy, if different from `children`
   */
  copyValue: PropTypes.string
};

ANetworkValue.displayName = "ANetworkValue";

export default ANetworkValue;
