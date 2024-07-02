import React, {forwardRef} from "react";
import ACardItem from "./ACardItem";
import "./ACard.scss";

const ACardTitle = forwardRef(
  ({children, className: propsClassName, ...rest}, ref) => {
    let className = "a-card-title";

    if (propsClassName) {
      className += ` ${propsClassName}`;
    }

    return (
      <ACardItem {...rest} ref={ref} className={className}>
        {children}
      </ACardItem>
    );
  }
);

ACardTitle.propTypes = {};

ACardTitle.displayName = "ACardContainerTitle";

export default ACardTitle;
