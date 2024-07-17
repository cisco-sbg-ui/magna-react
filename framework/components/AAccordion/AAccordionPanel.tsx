import React, {forwardRef, useContext, useEffect, useState} from "react";

import AAccordionContext from "./AAccordionContext";
import AAccordionPanelContext from "./AAccordionPanelContext";
import "./AAccordion.scss";
import {AAccordionPanelProps} from "./types";

let accordionPanelCounter = 1;

const AAccordionPanel = forwardRef<HTMLDivElement, AAccordionPanelProps>(
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
    const [panelId, setPanelId] = useState(1);
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

    const props = hasBody && {"aria-expanded": !isCollapsed};

    return (
      <div {...rest} {...props} className={className} ref={ref}>
        <AAccordionPanelContext.Provider value={accordionPanelContext}>
          {children}
        </AAccordionPanelContext.Provider>
      </div>
    );
  }
);

AAccordionPanel.displayName = "AAccordionPanel";

export default AAccordionPanel;
