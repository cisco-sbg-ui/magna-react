import PropTypes from "prop-types";
import React, {
  forwardRef,
  useEffect,
  useRef,
  useState,
  useCallback
} from "react";

import OverflowMenuTab from "./OverflowMenuTab";
import AListItem from "../AList/AListItem";
import ATabContext from "./ATabContext";
import {useCombinedRefs} from "../../utils/hooks";
import "./ATabs.scss";

const ATabGroup = forwardRef(
  (
    {
      className: propsClassName,
      children = [],
      vertical = false,
      secondary = true,
      ...rest
    },
    ref
  ) => {
    const [tabChanged, setTabChanged] = useState(false);
    const [menuItems, setMenuItems] = useState([]);
    const tabGroupRef = useRef(null);
    const combinedRef = useCombinedRefs(ref, tabGroupRef);

    const handleOverflow = useCallback(() => {
      if (!combinedRef.current) {
        return;
      }
      //Overflow tab
      const tab = combinedRef.current.querySelector(".menu-tab");

      if (!tab) {
        return;
      }
      const overflowMenuItems = [];
      const tabWrapper = combinedRef.current.parentNode;

      const contentWrapper = combinedRef.current.querySelector(
        ".a-tab-group__tab-content"
      );

      const tabStyle = window.getComputedStyle(tab);

      const tabMargin =
        parseInt(tabStyle.marginLeft) + parseInt(tabStyle.marginRight);

      //Calculate width of overflow tab which serves as our minimum width.
      let overflowLimit = tab.offsetWidth + tabMargin + 5; //Increase by 5 as a width buffer on tabs with smaller words

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
        } else if (!classList.includes("menu-tab")) {
          //If items' total width exceeds overall container width, hide and push to overflow menu
          item.classList.add("hide");
          overflowMenuItems.push(i);
        }
      });

      //Handles overflow tab's visibility
      if (!overflowMenuItems.length) {
        tab.classList.add("hide");
      } else if (overflowMenuItems.length) {
        tab.classList.remove("hide");
      }

      setMenuItems(overflowMenuItems);
    }, [combinedRef]);

    useEffect(() => {
      handleOverflow();
    }, [handleOverflow]);

    useEffect(() => {
      if (!combinedRef.current) {
        return;
      }

      const target = combinedRef.current.parentNode;
      const resizeObserver = new ResizeObserver(() => {
        if (combinedRef.current) {
          handleOverflow();
        }
      });

      resizeObserver.observe(target);

      return () => {
        if (resizeObserver && target) {
          resizeObserver.unobserve(target);
        }
      };
    }, [combinedRef, handleOverflow]);

    let className = "a-tab-group";
    let tabContentClassName = "a-tab-group__tab-content";

    if (vertical) {
      tabContentClassName += " a-tab-group__tab-content--vertical";
    }

    if (propsClassName) {
      className += ` ${propsClassName}`;
    }

    const tabContext = {
      tabChanged,
      setTabChanged,
      vertical,
      secondary
    };
    const renderChildren = React.Children.map(children, (child, i) => {
      if (!menuItems.length) return null;
      const isOverflowItem = menuItems.includes(i);
      if (isOverflowItem) {
        //tabKey is not recognized by AListItem and gets added to DOM so we remove it here.
        const {tabKey, ...rest} = child.props;
        const routerLink = child.props.tab?.route;
        if (routerLink) {
          return (
            <AListItem component="div" {...rest}>
              {child}
            </AListItem>
          );
        }
        return <AListItem {...rest} />;
      }
    });

    return (
      <div {...rest} role="tablist" ref={combinedRef} className={className}>
        <div className="a-tab-group__tab-wrapper">
          <div className={tabContentClassName}>
            <ATabContext.Provider value={tabContext}>
              {children}
              {!vertical && <OverflowMenuTab>{renderChildren}</OverflowMenuTab>}
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
