import PropTypes from "prop-types";
import React, {
  forwardRef,
  useCallback,
  useEffect,
  useRef,
  useState,
  Children
} from "react";
import AIcon from "../AIcon/AIcon";

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
      onClick: propsOnClick,
      onKeyDown: propsOnKeyDown,
      role,
      selected,
      disabled,
      target,
      twoLine,
      submenu,
      ...rest
    },
    ref
  ) => {
    const [roleValue, setRoleValue] = useState(role);
    const listItemRef = useRef(null);
    const combinedRef = useCombinedRefs(ref, listItemRef);
    const subMenuSelected = useRef(false);

    const [subMenuOpen, setSubMenuOpen] = useState(false);

    const handleSubmenu = useCallback(
      () => setSubMenuOpen(!subMenuOpen),
      [subMenuOpen]
    );

    const onClick = useCallback(
      (e) => {
        if (disabled) {
          return;
        }

        propsOnClick && propsOnClick(e);
        submenu && handleSubmenu();
      },
      [disabled, propsOnClick, submenu, handleSubmenu]
    );

    const onMouseEnter = useCallback(() => {
      if (disabled) {
        return;
      }
      subMenuSelected.current = true;
      submenu && handleSubmenu();
    }, [disabled, submenu, handleSubmenu]);

    const onMouseLeave = useCallback(() => {
      if (disabled) {
        return;
      }
      subMenuSelected.current = false;
      submenu && handleSubmenu();
    }, [disabled, submenu, handleSubmenu]);

    const onKeyDown = useCallback(
      (e) => {
        if (
          (onClick && e.keyCode === keyCodes.enter) ||
          (onClick &&
            e.keyCode === keyCodes.right &&
            document.activeElement.tagName !== "INPUT")
        ) {
          e.preventDefault();
          e.stopPropagation();
          onClick(e);
          submenu && setSubMenuOpen(true);
        } else if (onClick && e.keyCode === keyCodes.left && submenu) {
          e.stopPropagation();
          setSubMenuOpen(false);
        }

        propsOnKeyDown && propsOnKeyDown(e);
      },
      [onClick, propsOnKeyDown, submenu, setSubMenuOpen]
    );

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

    if (submenu) {
      className += " a-list-item--submenu";
    }

    if (selected || (subMenuSelected.current && submenu)) {
      className += " a-list-item--selected";
    }

    if (disabled) {
      className += " a-list-item--disabled";
    }

    if (propsClassName) {
      className += ` ${propsClassName}`;
    }

    let TagName = "div";
    const props = {
      ...rest,
      ref: combinedRef,
      className,
      disabled,
      onClick,
      onKeyDown,
      role: roleValue,
      onMouseEnter,
      onMouseLeave
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

    const handleChildren = () => {
      const arrayChildren = Children.toArray(children);
      return Children.map(arrayChildren, (child) => {
        const nestedChild = child.props?.children;
        const hasNestedChild = nestedChild && typeof nestedChild !== "string";
        if (hasNestedChild) {
          return React.cloneElement(child, {open: subMenuOpen});
        }

        return null;
      });
    };

    const displaySubMenu = (
      <>
        {children}
        <AIcon size={16}>caret-right</AIcon>
        {handleChildren()}
      </>
    );

    return <TagName {...props}>{submenu ? displaySubMenu : children}</TagName>;
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
   * Gives list item submenu behavior and styling
   */
  submenu: PropTypes.bool,
  /**
   * Toggles the `disabled` state.
   */
  disabled: PropTypes.bool,
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
