import React from "react";
import PropTypes from "prop-types";
import "./ANetworkValue.scss";

const baseClass = "a-network-value";

const ANetworkValue = ({className: propsClassName, children, ...rest}) => {
  let className = baseClass;

  if (propsClassName) {
    className += ` ${propsClassName}`;
  }

  return (
    <div className={className} {...rest}>
      {children}
    </div>
  );
};

ANetworkValue.propTypes = {};

ANetworkValue.displayName = "ANetworkValue";

export default ANetworkValue;
