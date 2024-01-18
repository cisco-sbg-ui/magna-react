import PropTypes from "prop-types";
import React, {forwardRef, useState} from "react";

import AAccordionContext from "./AAccordionContext";

const AAccordion = forwardRef(
  ({bordered, children, className: propsClassName, ...rest}, ref) => {
    const [openedPanels, setOpenedPanels] = useState([]);

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

AAccordion.propTypes = {
  /**
   * Toggles the `bordered` display variant.
   */
  bordered: PropTypes.bool
};

AAccordion.displayName = "AAccordion";

export default AAccordion;
