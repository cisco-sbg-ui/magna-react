import PropTypes from "prop-types";
import React, {forwardRef, useEffect, useRef, useState} from "react";

import {useCombinedRefs} from "../../utils/hooks";
import {keyCodes} from "../../utils/helpers";
import "./AList.scss";

const AListItem = forwardRef(
  (
    {
      children,
      className: propsClassName,
      component,
      href,
      onClick,
      onKeyDown,
      role,
      selected,
      target,
      twoLine,
      ...rest
    },
    ref
  ) => {
    const [roleValue, setRoleValue] = useState(role);
    const listItemRef = useRef(null);
    const combinedRef = useCombinedRefs(ref, listItemRef);

    useEffect(() => {
      if (
        !role &&
        combinedRef.current &&
        combinedRef.current.closest(".a-menu") !== null
      ) {
        setRoleValue("menuitem");
      }
    }, [role, combinedRef, setRoleValue]);

    let className = "a-list-item";

    if (twoLine) {
      className += " a-list-item--two-line";
    }

    if (selected) {
      className += " a-list-item--selected";
    }

    if (propsClassName) {
      className += ` ${propsClassName}`;
    }

    let TagName = "div";
    const props = {
      ...rest,
      ref: combinedRef,
      className,
      onClick,
      onKeyDown: (e) => {
        if (onClick && e.keyCode === keyCodes.enter) {
          e.preventDefault();
          onClick(e);
        }

        onKeyDown && onKeyDown(e);
      },
      role: roleValue
    };

    if (href) {
      TagName = "a";
      props.href = href;
      props.target = target;
    }

    if (href || onClick || component) {
      props.tabIndex = 0;
    }

    if (component) {
      TagName = component;
    }

    return <TagName {...props}>{children}</TagName>;
  }
);

AListItem.propTypes = {
  /**
   * Sets the base component. Useful for integrating with routers.
   */
  component: PropTypes.elementType,
  /**
   * If specified, the component will render as an HTML link.
   */
  href: PropTypes.string,
  /**
   * Sets the [WAI-ARIA](https://www.w3.org/WAI/standards-guidelines/aria/) role.
   * If the role is not set, the component may infer this.
   */
  role: PropTypes.string,
  /**
   * Toggles the `selected` state.
   */
  selected: PropTypes.bool,
  /**
   * If the `href` property is defined, the target can be set (ex: `_blank`, `_self`, `_parent`, `_top`)
   */
  target: PropTypes.string,
  /**
   * Toggles whether the list item has more than one line of text.
   */
  twoLine: PropTypes.bool
};

AListItem.displayName = "AListItem";

export default AListItem;
