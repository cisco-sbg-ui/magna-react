import React, {forwardRef} from "react";

import "./AAccordion.scss";

const AAccordionHeader = forwardRef(
  ({children, className: propsClassName, ...rest}, ref) => {
    let className = "a-accordion__header";

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

AAccordionHeader.displayName = "AAccordionHeader";

export default AAccordionHeader;
