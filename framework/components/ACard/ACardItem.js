import PropTypes from "prop-types";
import React, {forwardRef} from "react";

import "./ACard.scss";

const ACardItem = forwardRef(
  (
    {children, className: propsClassName, stretched, attached, ...rest},
    ref
  ) => {
    let className = "a-card__item";

    if (attached === "left") {
      className += " a-card__item--attached-left";
    } else if (attached === "right") {
      className += " a-card__item--attached-right";
    } else if (attached === "horizontal") {
      className += " a-card__item--attached-horizontal";
    }

    if (stretched) {
      className += " a-card__item--stretched";
    }

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

ACardItem.propTypes = {
  stretched: PropTypes.bool,
  attached: PropTypes.oneOf(["lef", "right", "horizontal"])
};

ACardItem.displayName = "ACardItem";

export default ACardItem;
