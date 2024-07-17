import React, {forwardRef} from "react";

import "./AAccordion.scss";

interface AAccordionHeaderProps extends React.ComponentPropsWithRef<"div"> {}

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
