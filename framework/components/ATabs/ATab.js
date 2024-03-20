import PropTypes from "prop-types";
import React, {forwardRef, useContext, useRef} from "react";

import ATabContext from "./ATabContext";
import {keyCodes} from "../../utils/helpers";
import {useCombinedRefs} from "../../utils/hooks";
import "./ATabs.scss";

const ATab = forwardRef(
  (
    {
      className: propsClassName,
      children,
      component,
      href,
      onClick,
      onKeyDown,
      onKeyUp,
      selected,
      tabKey,
      target,
      ariaControlledContentId,
      activeTabIndex,
      tabIndex,
      handleDirectionalKeyDown,
      isMenuChildActive,
      ...rest
    },
    ref
  ) => {
    const tabRef = useRef(null);
    const combinedRef = useCombinedRefs(ref, tabRef);
    const isSelected = activeTabIndex === tabIndex;
    const {setActiveTabIndex, vertical, secondary} = useContext(ATabContext);

    const menuTab =
      tabRef.current && tabRef.current.classList.contains("menu-tab")
        ? tabRef.current
        : null;

    let className = "a-tab-group__tab";

    if ((tabKey && selected) || isSelected || isMenuChildActive) {
      className += " a-tab-group__tab--selected";

      if (vertical) {
        className += " a-tab-group__tab--selected--vertical";
      }
    }

    if (vertical) {
      className += " a-tab-group__tab--vertical a-tab-group__tab--secondary";
    }

    if (secondary) {
      className += " a-tab-group__tab--secondary";
    }

    if (propsClassName) {
      className += ` ${propsClassName}`;
    }

    //If in controlled mode, handle previously selected class.
    const handleSiblingSelectedClass = () => {
      const parent = combinedRef.current.parentNode;
      const previousSelectedEl = parent.querySelector("[aria-selected=true]");
      if (previousSelectedEl) {
        previousSelectedEl.classList.remove("a-tab-group__tab--selected");
        previousSelectedEl.setAttribute("aria-selected", false);
      }
    };

    let TagName = "div";
    const props = {
      ...rest,
      "aria-selected": Boolean((tabKey && selected) || isSelected),
      ref: combinedRef,
      className,
      onClick: (e) => {
        !tabKey && setActiveTabIndex(tabIndex);
        if (menuTab) {
          handleSiblingSelectedClass();
        }
        onClick && onClick(e);
      },
      onKeyDown: (e) => {
        if (!href && [keyCodes.enter, keyCodes.space].includes(e.keyCode)) {
          e.preventDefault();
          !tabKey && !menuTab && setActiveTabIndex(tabIndex);
          if (menuTab) {
            handleSiblingSelectedClass();
          }
          onClick && onClick(e);
        } else {
          onKeyDown && onKeyDown(e);
        }
        !tabKey && handleDirectionalKeyDown(e);
      },
      onKeyUp: (e) => {
        onKeyUp && onKeyUp(e);
      },
      role: "tab",
      tabIndex: isSelected ? 0 : -1
    };

    if (href) {
      TagName = "a";
      props.href = href;
      props.target = target;
    }

    if (component) {
      TagName = component;
    }

    return (
      <TagName
        {...props}
        data-tab-index={tabIndex}
        aria-selected={isSelected}
        aria-controls={ariaControlledContentId}
      >
        {children}
      </TagName>
    );
  }
);

ATab.propTypes = {
  /**
   * Sets the base component. Useful for integrating with routers.
   */
  component: PropTypes.elementType,
  /**
   * If specified, the component will render as an HTML link.
   */
  href: PropTypes.string,
  /**
   * Toggles the `selected` state in controlled mode. Provides the default `selected` state in uncontrolled mode.
   */
  selected: PropTypes.bool,
  /**
   * Supplies an identifier to the tab for the purpose of being leveraged by the developer in controlled mode. If absent, uncontrolled mode is assumed.
   */
  tabKey: PropTypes.string,
  /**
   * If the `href` property is defined, the target can be set (ex: `_blank`, `_self`, `_parent`, `_top`)
   */
  target: PropTypes.string,
  /**
   * Aria feture which connects the tab to it's corresponding content
   */
  controlledContentId: PropTypes.string
};

ATab.displayName = "ATab";

export default ATab;
