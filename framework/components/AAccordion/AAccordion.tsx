import React, {forwardRef, useState} from "react";
import AAccordionContext from "./AAccordionContext";
import "./AAccordion.scss";
import {AAccordionProps} from "./types";

const AAccordion = forwardRef<HTMLDivElement, AAccordionProps>(
  ({bordered, children, className: propsClassName, ...rest}, ref) => {
    const [openedPanels, setOpenedPanels] = useState<number[]>([]);

    let className = "a-accordion";

    if (bordered) {
      className += " a-accordion--style-bordered";
    }

    if (propsClassName) {
      className += ` ${propsClassName}`;
    }

    const accordionContext = {
      openedPanels,
      setOpenedPanels
    };

    return (
      <div {...rest} ref={ref} className={className}>
        <AAccordionContext.Provider value={accordionContext}>
          {children}
        </AAccordionContext.Provider>
      </div>
    );
  }
);

AAccordion.displayName = "AAccordion";

export default AAccordion;
