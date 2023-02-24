import PropTypes from "prop-types";
import React, {forwardRef, useContext} from "react";

import AAccordionContext from "./AAccordionContext";
import AAccordionPanelContext from "./AAccordionPanelContext";
import {keyCodes} from "../../utils/helpers";
import "./AAccordion.scss";

import AIcon from "../AIcon";

const AAccordionHeaderTitle = forwardRef(
  (
    {
      chevron = true,
      children,
      className: propsClassName,
      collapseIcon = "caretUp",
      expandIcon = "caretDown",
      onBlur,
      onClick,
      onFocus,
      onKeyDown,
      ...rest
    },
    ref
  ) => {
    const {panelId, setIsFocused, hasBody, panelKey, isCollapsed, onToggle} =
      useContext(AAccordionPanelContext);
    const {openedPanels, setOpenedPanels} = useContext(AAccordionContext);

    const togglePanel = () => {
      if (openedPanels.includes(panelId)) {
        setOpenedPanels(openedPanels.filter((x) => x !== panelId));
      } else {
        setOpenedPanels([...openedPanels, panelId]);
      }

      onToggle && onToggle(panelKey);
    };

    const handleClick = (e) => {
      hasBody && togglePanel();
      onClick && onClick(e);
    };

    const handleKeyDown = (e) => {
      if (hasBody && [keyCodes.enter, keyCodes.space].includes(e.keyCode)) {
        e.preventDefault();
        togglePanel();
      }

      onKeyDown && onKeyDown(e);
    };

    const handleBlur = (e) => {
      hasBody && setIsFocused(false);
      onBlur && onBlur(e);
    };

    const handleFocus = (e) => {
      hasBody && setIsFocused(true);
      onFocus && onFocus(e);
    };

    let className = "a-accordion__link",
      chevronClassName = "a-accordion__chevron";

    if (propsClassName) {
      className += ` ${propsClassName}`;
    }

    const chevronIcon =
      (panelKey && isCollapsed) ||
      (!panelKey && !openedPanels.includes(panelId))
        ? expandIcon
        : collapseIcon;

    const props = {};

    if (hasBody) {
      props.tabIndex = 0;
      props.role = "button";
    }

    return (
      /* eslint-disable jsx-a11y/no-static-element-interactions */
      <>
        <div
          {...rest}
          {...props}
          onBlur={handleBlur}
          onClick={handleClick}
          onFocus={handleFocus}
          onKeyDown={handleKeyDown}
          ref={ref}
          className={className}
        >
          {children}
        </div>
        {chevron && (
          <div
            onBlur={handleBlur}
            onClick={handleClick}
            onFocus={handleFocus}
            onKeyDown={handleKeyDown}
            className={chevronClassName}
          >
            <AIcon size={12}>{chevronIcon}</AIcon>
          </div>
        )}
      </>
      /* eslint-enable jsx-a11y/no-static-element-interactions */
    );
  }
);

AAccordionHeaderTitle.defaultProps = {
  chevron: true
};

AAccordionHeaderTitle.propTypes = {
  /**
   * Toggles the chevron.
   */
  chevron: PropTypes.bool,
  /**
   * Sets an alternative collapse icon.
   */
  collapseIcon: PropTypes.string,
  /**
   * Sets an alternative expand icon.
   */
  expandIcon: PropTypes.string
};

AAccordionHeaderTitle.displayName = "AAccordionHeaderTitle";

export default AAccordionHeaderTitle;
