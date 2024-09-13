import PropTypes from "prop-types";
import React, {
  forwardRef,
  useEffect,
  useRef,
  useState,
  useCallback
} from "react";

import {debounce} from "../../utils/helpers";
import {useCombinedRefs} from "../../utils/hooks";
import OverflowMenuTab from "./OverflowMenuTab";
import AListItem from "../AList/AListItem";
import ATabContext from "./ATabContext";
import "./ATabs.scss";

const hiddenTabClass = "a-tab-group__tab--hide";

const isTabSelectedAndNotMenuTab = (el) => {
  return (
    el?.classList?.contains("a-tab-group__tab--selected") &&
    el.getAttribute("data-set") !== "menu"
  );
};

const getNextFocusId = (direction, containerEl, focusedEl) => {
  let nextId, toFocus;

  if (direction == "ArrowLeft") {
    toFocus = focusedEl.previousSibling;

    while (
      !toFocus ||
      toFocus?.classList?.contains(hiddenTabClass) ||
      isTabSelectedAndNotMenuTab(toFocus)
    ) {
      if (!toFocus) {
        toFocus = containerEl.lastChild;
      } else {
        toFocus = toFocus.previousSibling;
      }
    }

    nextId = toFocus.getAttribute("data-tabid");
  } else if (direction == "ArrowRight") {
    toFocus = focusedEl.nextSibling;

    while (
      !toFocus ||
      toFocus?.classList?.contains(hiddenTabClass) ||
      isTabSelectedAndNotMenuTab(toFocus)
    ) {
      if (!toFocus) {
        toFocus = containerEl.firstChild;
      } else {
        toFocus = toFocus.nextSibling;
      }
    }

    nextId = toFocus.getAttribute("data-tabid");
  }

  return {nextId, elementToFocus: toFocus};
};

const ATabGroup = forwardRef(
  (
    {
      className: propsClassName,
      children = [],
      vertical = false,
      secondary = true,
      selectOnArrow = false,
      ...rest
    },
    ref
  ) => {
    const [selectedTab, _setSelectedTab] = useState(false);
    const [focusedTab, setFocusedTab] = useState(null); // for keyboard support
    const [menuItems, setMenuItems] = useState([]);
    const tabGroupRef = useRef(null);
    const tabContainerRef = useRef(null);
    const overflowRef = useRef(null);
    const combinedRef = useCombinedRefs(ref, tabGroupRef);
    const menuItemRefs = useRef([]);

    const setSelectedTab = useCallback(
      (tabId) => {
        _setSelectedTab(tabId);
        setFocusedTab(tabId);
      },
      [_setSelectedTab, setFocusedTab]
    );

    const handleOverflow = useCallback(() => {
      if (!combinedRef.current || vertical) {
        return;
      }

      //Overflow tab
      const overflowTab = combinedRef.current.querySelector(
        ".a-tab-group__menu-tab"
      );

      if (!overflowTab) {
        return;
      }

      let overflowing = false;
      const overflowMenuItems = [];
      const tabWrapper = combinedRef.current;

      const contentWrapper = tabContainerRef.current;

      const tabStyle = window.getComputedStyle(overflowTab);

      const tabMargin =
        parseInt(tabStyle.marginLeft) + parseInt(tabStyle.marginRight);

      //Calculate width of overflow tab which serves as our minimum width.
      let overflowLimit = overflowTab.offsetWidth + tabMargin + 12; //Increase by 5 as a width buffer on tabs with smaller words

      Array.from(contentWrapper.childNodes).forEach((item, i) => {
        if (!item || !item.classList) {
          return;
        }

        //Show all elements initially while we calculate size
        item.classList.remove(hiddenTabClass);
        //Tab item's width
        const tabWidth = item.offsetWidth + tabMargin;
        //If items' total width falls under overall container width, skip
        if (
          tabWrapper.offsetWidth >= overflowLimit + tabWidth &&
          !overflowing
        ) {
          overflowLimit += tabWidth;
        } else if (!item.classList.contains("a-tab-group__menu-tab")) {
          //If items' total width exceeds overall container width, hide and push to overflow menu
          item.classList.add(hiddenTabClass);
          overflowMenuItems.push(i);
          overflowing = true; // Once we detect an overflow, don't bother checking the rest
        }
      });

      //Handles overflow tab's visibility
      if (!overflowMenuItems.length) {
        overflowTab.classList.add(hiddenTabClass);
      } else if (overflowMenuItems.length) {
        overflowTab.classList.remove(hiddenTabClass);
      }

      setMenuItems(overflowMenuItems);
    }, [combinedRef, vertical]);

    useEffect(() => {
      handleOverflow();
    }, [handleOverflow, selectedTab]);

    useEffect(() => {
      if (!combinedRef.current) {
        return;
      }

      const target = combinedRef.current;
      const resizeObserver = new ResizeObserver(
        debounce(() => {
          if (tabContainerRef.current) {
            handleOverflow();
          }
        }, 10)
      );

      resizeObserver.observe(target);

      return () => {
        if (resizeObserver && target) {
          resizeObserver.unobserve(target);
        }
      };
    }, [combinedRef, tabContainerRef, handleOverflow]);

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
      selectedTab,
      setSelectedTab,
      focusedTab,
      setFocusedTab,
      vertical,
      secondary
    };

    const renderChildren = React.Children.map(children, (child, i) => {
      if (!menuItems.length) {
        return null;
      }

      const isOverflowItem = menuItems.includes(i);

      if (isOverflowItem) {
        //tabKey is not recognized by AListItem and gets added to DOM so we remove it here.
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const {tabKey, ...rest} = child.props;
        const routerLink = child.props.tab?.route;

        if (routerLink) {
          const onKeyDown = (e) => {
            if (e.key !== "Enter") {
              return;
            }

            menuItemRefs.current[i]?.children[0]?.click();
          };

          return (
            <AListItem
              ref={(ref) => (menuItemRefs.current[i] = ref)}
              onKeyDown={onKeyDown}
              className="a-tab-group__menu-overflow-item"
              {...rest}
            >
              {child}
            </AListItem>
          );
        }

        return <AListItem {...rest} />;
      }
    });

    return (
      <div
        {...rest}
        role="tablist"
        ref={combinedRef}
        className={className}
        tabIndex={0}
        onClick={() => {}}
        onKeyDown={(e) => {
          e.stopPropagation();

          const focusedEl = tabContainerRef.current?.querySelector(
            `[data-tabid='${focusedTab}']`
          );

          if (["ArrowLeft", "ArrowRight"].includes(e.key)) {
            const {nextId, elementToFocus} = getNextFocusId(
              e.key,
              tabContainerRef.current,
              focusedEl
            );

            setFocusedTab(nextId);

            if (elementToFocus.getAttribute("data-set") === "menu") {
              elementToFocus.click();
            } else {
              overflowRef.current?.setMenuOpen(false);
              combinedRef.current?.focus();
            }

            if (selectOnArrow && elementToFocus.tagName !== "A") {
              elementToFocus.click();
            }
          } else if (["Enter"].includes(e.key)) {
            focusedEl.click();
          }
        }}
      >
        <div ref={ref} className="a-tab-group__tab-wrapper">
          <div ref={tabContainerRef} className={tabContentClassName}>
            <ATabContext.Provider value={tabContext}>
              {children}
              {!vertical && (
                <OverflowMenuTab
                  tabGroupRef={combinedRef}
                  passthroughRef={overflowRef}
                >
                  {renderChildren}
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
  secondary: PropTypes.bool,
  /**
   * Fire the tab onClick callback when selected through arrow keys
   */
  selectOnArrow: PropTypes.bool
};

ATabGroup.displayName = "ATabGroup";

export default ATabGroup;
