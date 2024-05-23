import PropTypes from "prop-types";
import React, {
  forwardRef,
  useContext,
  useEffect,
  useRef,
  useState
} from "react";

import ATabContext from "./ATabContext";
import {useCombinedRefs} from "../../utils/hooks";
import "./ATabs.scss";

let tabCounter = 1;

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
      ...rest
    },
    ref
  ) => {
    const tabRef = useRef(null);
    const combinedRef = useCombinedRefs(ref, tabRef);
    const tabIdRef = useRef(tabCounter++);
    const tabId = tabKey?.toString() || tabIdRef?.current.toString();

    const {selectedTab, setSelectedTab, focusedTab, vertical, secondary} =
      useContext(ATabContext);
    const isSelected = selectedTab == tabId;
    const isFocused = focusedTab == tabId;

    const menuTab =
      tabRef.current &&
      tabRef.current.classList.contains("a-tab-group__menu-tab")
        ? tabRef.current
        : null;

    useEffect(() => {
      if (selected) {
        setSelectedTab(tabId);
      }
    }, [selected, setSelectedTab, tabId]);

    let className = "a-tab-group__tab";

    if ((tabKey && selected) || isSelected) {
      className += " a-tab-group__tab--selected";

      if (vertical) {
        className += " a-tab-group__tab--selected--vertical";
      }
    }

    if (isFocused) {
      className += " a-tab-group__tab--focused";
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

    // If in controlled mode, handle previously selected class when interacting
    // with the overflow menu.
    const handleSiblingSelectedClass = () => {
      const parent = combinedRef.current.parentNode;
      const previousSelectedEl = parent.querySelector("[aria-selected=true]");
      if (previousSelectedEl) {
        previousSelectedEl.classList.remove("a-tab-group__tab--selected");
        previousSelectedEl.setAttribute("aria-selected", false);
      }
    };

    let TagName = "button";

    const props = {
      ...rest,
      "data-tabid": tabId,
      "aria-selected": isSelected,
      tabIndex: isSelected ? 1 : -1,
      ref: combinedRef,
      className,
      onClick: (e) => {
        setSelectedTab(tabId);
        if (menuTab) {
          handleSiblingSelectedClass();
        }
        onClick && onClick(e);
      },
      role: "tab"
    };

    if (href) {
      TagName = "a";
      props.href = href;
      props.target = target;
    }

    if (component) {
      TagName = component;
    }

    return <TagName {...props}>{children}</TagName>;
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
  target: PropTypes.string
};

ATab.displayName = "ATab";

export default ATab;
