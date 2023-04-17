import PropTypes from "prop-types";
import React, {forwardRef} from "react";

import "./SidebarTree.scss";
import {AButton, AIcon} from "../../framework";

const SidebarTree = forwardRef(
  (
    {
      activatable,
      className: propsClassName,
      dense,
      expandOnClick,
      hoverable,
      items = [],
      onChange,
      ...rest
    },
    ref
  ) => {
    let className = "sidebar-tree";
    if (dense) {
      className = " sidebar-tree--dense";
    }

    if (hoverable) {
      className += " sidebar-tree--hoverable";
    }

    if (propsClassName) {
      className += ` ${propsClassName}`;
    }

    const clearAllActive = (allItems) => {
      allItems.items &&
        allItems.items.forEach((x) => {
          delete x.active;
          clearAllActive(x);
        });
    };

    const hoverHandler = (isHovered, path) => () => {
      if (!hoverable) return;

      const allItems = {items: items.slice()};
      const thisItem = path.reduce((acc, nextIndex) => {
        return acc.items[nextIndex];
      }, allItems);
      thisItem.hover = isHovered;
      onChange && onChange(allItems.items);
    };

    const expandHandler = (path) => () => {
      const allItems = {items: items.slice()};
      const thisItem = path.reduce((acc, nextIndex) => {
        return acc.items[nextIndex];
      }, allItems);
      thisItem.expanded = !thisItem.expanded;
      onChange && onChange(allItems.items);
    };

    const rootInteractionHandler = (path) => (e) => {
      if (
        expandOnClick &&
        e.target.closest(".sidebar-tree__chevron") === null
      ) {
        expandHandler(path)(e);
      }

      if (!activatable) return;

      const allItems = {items: items.slice()};
      const thisItem = path.reduce((acc, nextIndex) => {
        return acc.items[nextIndex];
      }, allItems);
      clearAllActive(allItems);
      thisItem.active = !thisItem.active;
      onChange && onChange(allItems.items);
    };

    const makeNode = (item, path) => {
      let rootClassName = "sidebar-tree__root";
      if (hoverable && item.hover) {
        rootClassName += " sidebar-tree__root--hover";
      }

      if (item.focus) {
        rootClassName += " sidebar-tree__root--focus";
      }

      if (item.active) {
        rootClassName += " sidebar-tree__root--active";
      }

      if (!item.items) {
        rootClassName += " sidebar-tree__root--leaf";
      }

      if (item.customIcon) {
        rootClassName += " sidebar-tree__root--icon";
      }

      const ContentComponent =
        item.contentComponent ||
        (item.contentProps &&
          Object.keys(item.contentProps).includes("href") &&
          "a") ||
        "div";
      const contentProps = {
        ...item.contentProps,
        className: "sidebar-tree__content",
        onFocus: (e) => {
          const allItems = {items: items.slice()};
          const thisItem = path.reduce((acc, nextIndex) => {
            return acc.items[nextIndex];
          }, allItems);
          thisItem.focus = true;
          onChange && onChange(allItems.items);
          item.contentProps.onFocus && item.contentProps.onFocus(e);
        },
        onBlur: (e) => {
          const allItems = {items: items.slice()};
          const thisItem = path.reduce((acc, nextIndex) => {
            return acc.items[nextIndex];
          }, allItems);
          thisItem.focus = false;
          onChange && onChange(allItems.items);
          item.contentProps.onBlur && item.contentProps.onBlur(e);
        }
      };

      if (
        item.contentComponent ||
        ContentComponent === "a" ||
        (item.contentProps && item.contentProps.onClick)
      ) {
        contentProps.tabIndex = 0;
        if (contentProps.style) {
          contentProps.style = {
            ...contentProps.style,
            cursor: "pointer"
          };
        } else {
          contentProps.style = {
            cursor: "pointer"
          };
        }
      }

      if (item.contentProps && item.contentProps.className) {
        contentProps.className += ` ${item.contentProps.className}`;
      }

      const nodeProps = {
        key: `sidebar-tree__node_${path.join("_")}`,
        className: "sidebar-tree__node"
      };

      if (item.items) {
        nodeProps["aria-expanded"] = Boolean(item.expanded);
      }

      return (
        <div {...nodeProps}>
          {/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
          <div
            className={rootClassName}
            onMouseEnter={hoverHandler(true, path)}
            onMouseLeave={hoverHandler(false, path)}
            onClick={rootInteractionHandler(path)}
          >
            {/* eslint-enable jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
            {path.slice(1).map((x, index) => (
              <div
                key={`sidebar-tree__level_${index}`}
                className="sidebar-tree__level"
              />
            ))}
            {item.items && (
              <AButton
                tertiaryAlt
                icon
                className="sidebar-tree__chevron"
                onClick={expandHandler(path)}
                style={{color: "currentColor"}}
              >
                <AIcon size={16}>
                  {item.expanded ? "chevron-up" : "chevron-right"}
                </AIcon>
              </AButton>
            )}
            {item.customIcon && (
              <AButton
                className="sidebar-tree__chevron"
                tertiaryAlt
                icon
                style={{color: "currentColor"}}
              >
                <AIcon size={16}>{item.customIcon}</AIcon>
              </AButton>
            )}
            <ContentComponent {...contentProps}>
              {item.content}
            </ContentComponent>
          </div>
          {item.items && item.expanded && (
            <div className="sidebar-tree__children">
              {item.items.map((x, index) => makeNode(x, [...path, index]))}
            </div>
          )}
        </div>
      );
    };

    return (
      <div {...rest} ref={ref} className={className}>
        {items && items.map((x, index) => makeNode(x, [index]))}
      </div>
    );
  }
);

SidebarTree.propTypes = {
  /**
   * Toggles the ability to give an active state to tree nodes.
   */
  activatable: PropTypes.bool,
  /**
   * Toggles a lesser node height.
   */
  dense: PropTypes.bool,
  /**
   * Toggles the ability to click anywhere on the right side of the chevron, additionally, to expand.
   */
  expandOnClick: PropTypes.bool,
  /**
   * Toggles a visual hover state.
   */
  hoverable: PropTypes.bool,
  /**
   * Sets an array of items to display.
   */
  items: PropTypes.arrayOf(PropTypes.object),
  /**
   * Handles change events on the items array.
   */
  onChange: PropTypes.func
};

SidebarTree.displayName = "SidebarTree";

export default SidebarTree;
