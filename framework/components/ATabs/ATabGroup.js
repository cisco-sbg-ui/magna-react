import PropTypes from "prop-types";
import React, {forwardRef, useEffect, useRef, useState} from "react";

import AMenuTab from "./AMenuTab";
import ATabContext from "./ATabContext";
import {useCombinedRefs} from "../../utils/hooks";
import "./ATabs.scss";

const ATabGroup = forwardRef(
  (
    {
      className: propsClassName,
      children = [],
      vertical = false,
      secondary = false,
      ...rest
    },
    ref
  ) => {
    const [tabChanged, setTabChanged] = useState(false);
    const [menuItems, setMenuItems] = useState([]);
    const tabGroupRef = useRef(null);
    const combinedRef = useCombinedRefs(ref, tabGroupRef);

    useEffect(() => {
      if (!combinedRef.current) {
        return;
      }

      const target = combinedRef.current.parentNode;

      const callback = () => {
        if (!combinedRef.current) {
          return;
        }
        const overflowMenuItems = [];

        const tabWrapper = combinedRef.current;

        const contentWrapper = combinedRef.current.querySelector(
          ".a-tab-group__tab-content"
        );

        //More tab
        const tab = combinedRef.current.querySelector("[data-set='menu']");

        if (!tab) {
          return;
        }

        const tabStyle = window.getComputedStyle(tab);

        const tabMargin =
          parseInt(tabStyle.marginLeft) + parseInt(tabStyle.marginRight);

        //Calculate width of more button which serves as our minimum width.
        let overflowLimit = tab.offsetWidth + tabMargin;

        Array.from(contentWrapper.childNodes).forEach((item, i) => {
          if (!item || !item.classList) {
            return;
          }
          //If vertical view, skip
          const classList = Array.from(item.classList);
          if (classList.includes("a-tab-group__tab--vertical")) {
            return;
          }
          //Show all elements initially while we calculate size
          item.classList.remove("hide");
          //Tab item's width
          const tabWidth = item.offsetWidth + tabMargin;
          //If items' total width falls under overall container width, skip
          if (tabWrapper.offsetWidth >= overflowLimit + tabWidth) {
            overflowLimit += tabWidth;
          } else if (item.dataset.set !== "menu") {
            //If items' total width exceeds overall container width, hide and push to overflow menu
            item.classList.add("hide");
            overflowMenuItems.push(item);
          }
        });

        //Handles more button's visibility
        if (!overflowMenuItems.length) {
          tab.classList.add("hide");
        } else if (overflowMenuItems.length) {
          tab.classList.remove("hide");
        }

        setMenuItems(overflowMenuItems);
      };

      const resizeObserver = new ResizeObserver(callback);

      resizeObserver.observe(target);

      return () => {
        resizeObserver.unobserve(target);
      };
    }, [combinedRef]);

    let className = "a-tab-group";
    let tabContentClassName = "a-tab-group__tab-content";

    if (vertical) {
      tabContentClassName += " a-tab-group__tab-content--vertical";
    }
    if (secondary) {
      tabContentClassName += " a-tab-group__tab-content--secondary";
    }

    if (propsClassName) {
      className += ` ${propsClassName}`;
    }

    const tabContext = {
      tabChanged,
      setTabChanged,
      vertical
    };

    return (
      <div {...rest} role="tablist" ref={combinedRef} className={className}>
        <div className="a-tab-group__tab-wrapper">
          <div className={tabContentClassName}>
            <ATabContext.Provider value={tabContext}>
              {children}
              {!vertical && (
                <AMenuTab tabKey={children.length + 1}>{menuItems}</AMenuTab>
              )}
            </ATabContext.Provider>
          </div>
        </div>
      </div>
    );
  }
);

ATabGroup.propTypes = {
  /**
   * Color of tabs primary (default) is green, blue is secondary
   */
  secondary: PropTypes.bool
};

ATabGroup.displayName = "ATabGroup";

export default ATabGroup;
