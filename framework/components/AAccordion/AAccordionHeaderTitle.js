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
      collapseIcon = "caret-up",
      expandIcon = "caret-down",
      iconPlacement = "right",
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

    const handlerProps = {
      onBlur: handleBlur,
      onClick: handleClick,
      onFocus: handleFocus,
      onKeyDown: handleKeyDown
    };

    let className = "a-accordion__link",
      chevronClassName = "a-accordion__chevron";

    if (propsClassName) {
      className += ` ${propsClassName}`;
    }

    if (iconPlacement === "left") {
      chevronClassName += " a-accordion__chevron-left";
    }

    if (iconPlacement === "right") {
      chevronClassName += " a-accordion__chevron-right";
    }

    const chevronIcon =
      (panelKey && isCollapsed) ||
      (!panelKey && !openedPanels.includes(panelId))
        ? expandIcon
        : collapseIcon;

    const titleDivProps = {
      ...(hasBody && {tabIndex: 0}),
      ...(hasBody && {role: "button"})
    };

    return (
      /* eslint-disable jsx-a11y/no-static-element-interactions */
      <>
        {chevron && iconPlacement === "left" && (
          <div {...handlerProps} className={chevronClassName}>
            <AIcon size={12}>{chevronIcon}</AIcon>
          </div>
        )}
        <div
          {...rest}
          {...handlerProps}
          {...titleDivProps}
          ref={ref}
          className={className}
        >
          {children}
        </div>
        {chevron && iconPlacement === "right" && (
          <div {...handlerProps} className={chevronClassName}>
            <AIcon size={12}>{chevronIcon}</AIcon>
          </div>
        )}
      </>
      /* eslint-enable jsx-a11y/no-static-element-interactions */
    );
  }
);

AAccordionHeaderTitle.defaultProps = {
  chevron: true,
  collapseIcon: "caret-up",
  expandIcon: "caret-down",
  iconPlacement: "right"
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
  expandIcon: PropTypes.string,
  /**
   * Decide where the icon will be placed in relation to the title.
   * Default is "right".
   */
  iconPlacement: PropTypes.oneOf(["right", "left"])
};

AAccordionHeaderTitle.displayName = "AAccordionHeaderTitle";

export default AAccordionHeaderTitle;
