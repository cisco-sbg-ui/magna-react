import React, {forwardRef} from "react";
import "./ACard.scss";

const ACardSubTitle = forwardRef(
  ({children, className: propsClassName, ...rest}, ref) => {
    let className = "a-card-subtitle";

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

ACardSubTitle.propTypes = {};

ACardSubTitle.displayName = "ACardContainerSubTitle";

export default ACardSubTitle;
