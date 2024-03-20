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
import {keyCodes} from "../../utils/helpers";

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
    const [activeTabIndex, setActiveTabIndex] = useState(false);
    const [menuItems, setMenuItems] = useState([]);
    const [menuOpen, setMenuOpen] = useState(false);
    const tabContentRef = useRef(null);
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
      const tabWrapper = combinedRef.current;

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

    const visibleTabs =
      tabContentRef.current &&
      Array.from(tabContentRef.current?.children).filter(
        (child) => !child.classList.contains("hide")
      );

    const handleDirectionalKeyDown = useCallback(
      (e) => {
        if (
          (vertical && [keyCodes.up, keyCodes.down].includes(e.keyCode)) ||
          (!vertical && [keyCodes.left, keyCodes.right].includes(e.keyCode))
        ) {
          const dir = e.keyCode;
          const goForward =
            (vertical && keyCodes.down === dir) ||
            (!vertical && keyCodes.right === dir);
          const goBack =
            (vertical && keyCodes.up === dir) ||
            (!vertical && keyCodes.left === dir);
          const visibleIndexes = visibleTabs.map((tab) =>
            Number(tab.dataset.tabIndex)
          );
          const visibleIndex = visibleIndexes.findIndex((visibleTabIndex) => {
            return visibleTabIndex === activeTabIndex;
          });
          const findNextIndex = () => {
            let nextIndex;
            const tabGroupChildren = tabContentRef.current.children;

            if (goBack) {
              if (visibleIndex >= 0) {
                nextIndex =
                  visibleIndex === 0
                    ? visibleIndexes.slice(-1)[0]
                    : visibleIndexes[visibleIndex - 1];
              } else {
                nextIndex = visibleIndexes.slice(-2)[0];
              }
            }

            if (goForward) {
              nextIndex = visibleIndexes[visibleIndex + 1] || visibleIndexes[0];
            }

            if (tabGroupChildren[nextIndex]?.classList.contains("menu-tab")) {
              setMenuOpen(true);
            }

            return nextIndex;
          };

          setActiveTabIndex(findNextIndex());
        }
      },
      [tabContentRef, visibleTabs, setMenuOpen, activeTabIndex, vertical]
    );

    useEffect(() => {
      if (activeTabIndex !== false) {
        return;
      }
      React.Children.forEach(children, (child, i) => {
        if (child.props.selected && !child.props.tabKey) {
          setActiveTabIndex(i);
        }
      });
    }, [activeTabIndex, children]);

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
      className += " a-tab-group--vertical";
    }

    if (propsClassName) {
      className += ` ${propsClassName}`;
    }

    const tabContext = {
      setActiveTabIndex,
      vertical,
      secondary
    };

    const cloneChildWithProps = (child, i) =>
      React.cloneElement(child, {
        activeTabIndex,
        tabIndex: i,
        handleDirectionalKeyDown
      });

    const renderChildrenWithProps = React.Children.map(
      children,
      cloneChildWithProps
    );

    const renderMenuChildren = React.Children.map(children, (child, i) => {
      if (!menuItems.length) return null;
      const isOverflowItem = menuItems.includes(i);
      const handleListItemClick = () => setActiveTabIndex(i);
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
        return (
          <AListItem
            onClick={handleListItemClick}
            {...rest}
            selected={i === activeTabIndex}
          />
        );
      }
    });

    return (
      <div
        {...rest}
        role="tablist"
        ref={combinedRef}
        className={className}
        aria-orientation={vertical ? "vertical" : "horizontal"}
      >
        <div className="a-tab-group__tab-wrapper" role="presentation">
          <div
            ref={tabContentRef}
            className={tabContentClassName}
            role="presentation"
          >
            <ATabContext.Provider value={tabContext}>
              {renderChildrenWithProps}
              {!vertical && (
                <OverflowMenuTab
                  activeTabIndex={activeTabIndex}
                  isMenuChildActive={menuItems.includes(activeTabIndex)}
                  menuOpen={menuOpen}
                  setMenuOpen={setMenuOpen}
                  tabIndex={React.Children.count(children)}
                  handleDirectionalKeyDown={handleDirectionalKeyDown}
                >
                  {renderMenuChildren}
                </OverflowMenuTab>
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
