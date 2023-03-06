import PropTypes from "prop-types";
import React, {forwardRef} from "react";

import AButton from "../AButton";
import AIcon from "../AIcon";
import "./ATree.scss";

const ATree = forwardRef(
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
    let className = "a-tree";
    if (dense) {
      className = " a-tree--dense";
    }

    if (hoverable) {
      className += " a-tree--hoverable";
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
      if (expandOnClick && e.target.closest(".a-tree__chevron") === null) {
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
      let rootClassName = "a-tree__root";
      if (hoverable && item.hover) {
        rootClassName += " a-tree__root--hover";
      }

      if (item.focus) {
        rootClassName += " a-tree__root--focus";
      }

      if (item.active) {
        rootClassName += " a-tree__root--active";
      }

      if (!item.items) {
        rootClassName += " a-tree__root--leaf";
      }

      const ContentComponent =
        item.contentComponent ||
        (item.contentProps &&
          Object.keys(item.contentProps).includes("href") &&
          "a") ||
        "div";
      const contentProps = {
        ...item.contentProps,
        className: "a-tree__content",
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
        key: `a-tree__node_${path.join("_")}`,
        className: "a-tree__node"
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
              <div key={`a-tree__level_${index}`} className="a-tree__level" />
            ))}
            {item.items && (
              <AButton
                tertiaryAlt
                icon
                className="a-tree__chevron"
                onClick={expandHandler(path)}
                style={{color: "currentColor"}}
              >
                <AIcon size={16}>
                  {item.expanded ? "chevron-up" : "chevron-right"}
                </AIcon>
              </AButton>
            )}
            <ContentComponent {...contentProps}>
              {item.content}
            </ContentComponent>
          </div>
          {item.items && item.expanded && (
            <div className="a-tree__children">
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

ATree.propTypes = {
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

ATree.displayName = "ATree";

export default ATree;
