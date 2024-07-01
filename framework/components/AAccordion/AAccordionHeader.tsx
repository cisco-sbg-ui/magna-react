import React, {forwardRef} from "react";

import "./AAccordion.scss";
import {BasicComponentProps} from "../../types";

interface AAccordionHeaderProps extends BasicComponentProps {}

const AAccordionHeader = forwardRef<HTMLDivElement, AAccordionHeaderProps>(
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
