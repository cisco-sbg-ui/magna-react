import React, {forwardRef, useContext, useEffect} from "react";

import AAccordionPanelContext from "./AAccordionPanelContext";
import "./AAccordion.scss";
import {AAccordionProps} from "./types";

const AAccordionBody = forwardRef<HTMLDivElement, AAccordionProps>(
  ({children, className: propsClassName, ...rest}, ref) => {
    const context = useContext(AAccordionPanelContext);
    if (!context) {
      throw new Error("AAccordionBody must be used within a AAccordionPanel");
    }
    const {hasBody, setHasBody} = useContext(AAccordionPanelContext);
    useEffect(() => {
      if (!hasBody) {
        setHasBody(true);
      }
    });

    let className = "a-accordion__body";

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

AAccordionBody.displayName = "AAccordionBody";

export default AAccordionBody;
