import PropTypes from "prop-types";
import React, {forwardRef, useContext, useEffect, useState} from "react";

import AAccordionContext from "./AAccordionContext";
import AAccordionPanelContext from "./AAccordionPanelContext";

let accordionPanelCounter = 1;

const AAccordionPanel = forwardRef(
  (
    {
      children,
      className: propsClassName,
      collapsed = true,
      onToggle,
      panelKey,
      ...rest
    },
    ref
  ) => {
    const [hasBody, setHasBody] = useState(false);
    const [panelId, setPanelId] = useState(null);
    const [isFocused, setIsFocused] = useState(false);
    const {openedPanels, setOpenedPanels} = useContext(AAccordionContext);

    useEffect(() => {
      if (panelKey) return;
      if (!panelId) {
        const index = accordionPanelCounter++;
        setPanelId(index);
        if (!collapsed) setOpenedPanels((existing) => [...existing, index]);
      }
    }, [panelId, collapsed, setOpenedPanels, panelKey]);

    const isCollapsed = panelKey ? collapsed : !openedPanels.includes(panelId);
    let className = "a-accordion__card";

    if (isCollapsed) {
      className += " a-accordion__card--state-collapsed";
    }

    if (isFocused) {
      className += " a-accordion__card--is-focused";
    }

    if (hasBody) {
      className += " a-accordion__card--has-body";
    }

    if (propsClassName) {
      className += ` ${propsClassName}`;
    }

    const accordionPanelContext = {
      panelId,
      setIsFocused,
      hasBody,
      setHasBody,
      panelKey,
      isCollapsed,
      onToggle
    };

    const props = {};
    if (hasBody) {
      props["aria-expanded"] = !isCollapsed;
    }

    return (
      <div {...rest} {...props} className={className} ref={ref}>
        <AAccordionPanelContext.Provider value={accordionPanelContext}>
          {children}
        </AAccordionPanelContext.Provider>
      </div>
    );
  }
);

AAccordionPanel.propTypes = {
  /**
   * Sets the default collapsed state.
   */
  collapsed: PropTypes.bool,
  /**
   *
   */
  panelKey: PropTypes.string,
  /**
   * Handles the expand/collapse toggle event.
   */
  onToggle: PropTypes.func
};

AAccordionPanel.displayName = "AAccordionPanel";

export default AAccordionPanel;
