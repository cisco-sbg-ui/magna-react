import React, {forwardRef, useContext, useEffect, useState} from "react";

import AInputBase from "../AInputBase";
import {AFormContext} from "../AForm";
import AIcon from "../AIcon";
import AFloatingMenu from "../AFloatingMenu";
import useFloatingDropwdown from "../AFloatingMenu/useFloatingDropdown";
import ACheckbox from "../ACheckbox";
import {AListItem} from "../AList";
import AEmptyState from "../AEmptyState";
import {keyCodes, localeIncludes, handleBoldText} from "../../utils/helpers";
import "./AMultiSelect.scss";
import AMultiSelectTag from "./AMultiSelectTag";
import AMultiSelectCounter from "./AMultiSelectCounter";

let multiselectCounter = 0;

const AMultiSelect = forwardRef(
  (
    {
      appendContent,
      className: propsClassName,
      dropdownClassName,
      dropdownStyle,
      disabled,
      hints,
      itemTemplate,
      itemText = "text",
      itemValue = "value",
      items = [],
      label,
      noDataContent: propsNoDataContent,
      noDataMessage = "No matches found",
      onChange,
      withTags = false,
      onClear,
      onSelected,
      placeholder,
      prependContent,
      readOnly,
      readOnlyInput,
      required,
      rules,
      skipValidation = false,
      validationState,
      value = [],
      filterFunction: propsFilterFunction,
      counterTooltipProps = {},
      hideIfReferenceHidden = true,
      ...rest
    },
    ref
  ) => {
    const [multiselectId] = useState(multiselectCounter++);
    const [isFocused, setIsFocused] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [hasScroll, setHasScroll] = useState(false);
    const [filterValue, setFilterValue] = useState("");
    const [error, setError] = useState("");
    const [workingValidationState, setWorkingValidationState] =
      useState(validationState);
    const open = isOpen;

    const noDataContent = propsNoDataContent ?? (
      <AEmptyState
        message={noDataMessage}
        variant="positive"
        className="a-multiselect__nodata"
        xsmall
      />
    );

    const {
      context,
      floatingRefs,
      floatingStyles,
      getReferenceProps,
      getFloatingProps,
      isReferenceHidden
    } = useFloatingDropwdown(open, setIsOpen);

    const filterFunction = propsFilterFunction
      ? propsFilterFunction
      : (val, item) => {
          let displayValue;
          if (typeof item === "string") {
            displayValue = item;
          } else if (typeof item === "object") {
            displayValue = item[itemText];
          }
          return (
            displayValue &&
            localeIncludes(displayValue, val, {
              usage: "search",
              sensitivity: "base"
            })
          );
        };
    const filteredItems = filterValue
      ? items.filter((item) => {
          return filterFunction(filterValue, item);
        })
      : items;

    let className = "a-multiselect",
      tagsClass = `${className}__tags`,
      counterClass = `${className}__counter`;

    const {register, unregister} = useContext(AFormContext);

    useEffect(() => {
      setWorkingValidationState(validationState);
    }, [validationState]);

    useEffect(() => {
      if (isFocused && items.length) setIsOpen(true);
    }, [items]); // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
      if (register) {
        register(`a-multiselect_${multiselectId}`, {
          reset,
          validate,
          disabled
        });
      }
    }, [validationState, value, disabled, rules]); // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
      if (unregister) {
        return () => {
          return unregister(`a-multiselect_${multiselectId}`);
        };
      }
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const validate = (testValue = value) => {
      if (skipValidation) {
        return;
      }
      if (rules || required) {
        let workingRules = [];
        if (rules) {
          workingRules = [...rules];
        }

        if (required) {
          workingRules = [
            {
              test: (v) =>
                (v && Array.isArray(v) && v.length > 0) ||
                `${label ? label + " is r" : "R"}equired`,
              level: "danger"
            },
            ...workingRules
          ];
        }

        setWorkingValidationState("default");
        setError(null);
        for (let i = 0; i < workingRules.length; i++) {
          const error = workingRules[i].test(testValue);
          if (error !== true) {
            setError(error);
            setWorkingValidationState(workingRules[i].level || "danger");
            return {
              message: error,
              level: workingRules[i].level || "danger"
            };
          }
        }
      }
    };

    const reset = () => {
      setWorkingValidationState(validationState);
      setError("");
    };

    const chevronProps = {
      className: "a-multiselect__chevron",
      size: 16
    };

    if (!disabled && !readOnly) {
      chevronProps.onClick = () => {
        setIsOpen(!isOpen);
        floatingRefs.reference?.current
          ?.querySelector(".a-multiselect__input")
          ?.focus();
      };
    }

    useEffect(() => {
      if (withTags) {
        const tagsEl = floatingRefs.reference?.current?.querySelector(
          ".a-multiselect__tags"
        );
        if (tagsEl) {
          const inputEl = floatingRefs.reference.current.querySelector(
            ".a-multiselect__input"
          );
          tagsEl.offsetHeight + inputEl.offsetHeight >
          floatingRefs.reference.current.offsetHeight
            ? setHasScroll(true)
            : setHasScroll(false);
        }
      }
    }, [onSelected, withTags, floatingRefs]);

    if (hasScroll && withTags) {
      className += " a-multiselect--hasScroll";
    }

    const onKeyDown = (e) => {
      if (e.key === keyCodes.up) {
        e.preventDefault();
        setIsOpen(!!filteredItems.length || !!noDataContent);
        const menuItems = floatingRefs.floating?.current?.querySelectorAll(
          ".a-multiselect__menu-items__wrapper .a-list-item[tabindex]"
        );

        menuItems && menuItems[menuItems.length - 1]?.focus();
      } else if (e.key === keyCodes.down || e.key === keyCodes.enter) {
        e.preventDefault();
        setIsOpen(!!filteredItems.length || !!noDataContent);

        floatingRefs.floating?.current
          ?.querySelectorAll(
            ".a-multiselect__menu-items__wrapper .a-list-item[tabindex]"
          )[0]
          ?.focus();
      }
    };

    const inputBaseProps = {
      ...rest,
      surfaceRef: floatingRefs.setReference,
      className,
      clearable: (value && !!value.length) || !!filterValue,
      disabled,
      focused: Boolean(isFocused || isOpen),
      append: <AIcon {...chevronProps}>chevron-down</AIcon>,
      error,
      hints,
      label,
      labelFor: `a-multiselect_${multiselectId}`,
      onClear: () => {
        const e = floatingRefs.reference.current.querySelector(
          ".a-multiselect__input"
        );
        var nativeInputValueSetter = Object.getOwnPropertyDescriptor(
          window.HTMLInputElement.prototype,
          "value"
        ).set;
        nativeInputValueSetter.call(e, "");
        var event = new Event("input", {bubbles: true});
        e.dispatchEvent(event);
        setIsOpen(false);
        reset();
        setFilterValue("");
        onSelected && onSelected([]);
        onClear && onClear(e);
      },
      readOnly: readOnly || readOnlyInput,
      tabIndex: readOnlyInput && "0",
      onKeyDown: readOnlyInput && onKeyDown,
      validationState: workingValidationState,
      required
    };

    if (propsClassName) {
      inputBaseProps.className += ` ${propsClassName}`;
    }

    if (!withTags) {
      inputBaseProps.className += ` ${counterClass}`;
    }

    const inputProps = {
      autoComplete: "off",
      className: "a-multiselect__input",
      disabled,
      id: `a-multiselect_${multiselectId}`,
      onBlur: (e) => {
        setIsFocused(false);
        !floatingRefs.floating?.current?.contains(e.relatedTarget) &&
          validate(value);
      },
      onChange: (e) => {
        setIsOpen(!!items.length || !!noDataContent);

        setFilterValue(e.target.value);

        onChange && onChange(e);
      },
      onClick: () => {
        setIsOpen(!!items.length || !!noDataContent);
      },
      onFocus: () => {
        setIsFocused(true);
      },
      onKeyDown,
      placeholder: withTags
        ? value && !value.length
          ? placeholder
          : ""
        : placeholder || label,
      readOnly: readOnly || readOnlyInput,
      value: filterValue
    };

    let menuClassName = "a-multiselect__menu-items";
    if (dropdownClassName) {
      menuClassName += ` ${dropdownClassName}`;
    }

    const menuComponentProps = {
      className: menuClassName,
      closeOnClick: false,
      initialFocus: -1,
      role: "listbox",
      style: {
        minWidth: "max-content",
        width: floatingRefs.reference?.current?.clientWidth + 2 || "auto",
        ...dropdownStyle,
        ...floatingStyles
      },
      hideIfReferenceHidden,
      isReferenceHidden
    };

    const counter = value && (
      <AMultiSelectCounter
        items={items}
        value={value}
        onSelected={onSelected}
        itemValue={itemValue}
        itemText={itemText}
        {...counterTooltipProps}
      />
    );

    const tags =
      value &&
      value.map((v) => {
        return (
          <AMultiSelectTag
            key={v[itemValue] || v}
            items={items}
            tagValue={v}
            value={value}
            onSelected={onSelected}
            itemValue={itemValue}
            itemText={itemText}
          />
        );
      });

    const noData = !filteredItems.length && !!noDataContent && (
      <AListItem>{noDataContent}</AListItem>
    );

    const mappedMenuItems = filteredItems.map((item, index) => {
      let children,
        computedValue,
        itemClass = "a-multiselect__menu-item";

      if (typeof item === "string") {
        computedValue = item;
        children = handleBoldText(filterValue, item);
      } else if (typeof item === "object") {
        computedValue = item[itemValue];
        children = handleBoldText(filterValue, item[itemText]);
      }

      const handleClick = () => {
        let newValue = Array.isArray(value) ? [...value] : [];
        if (value.includes(computedValue)) {
          newValue = newValue.filter((v) => v !== computedValue);
        } else {
          newValue.push(computedValue);
          newValue = newValue.filter(
            (value, i, arr) => arr.indexOf(value) === i
          );
        }

        validate(newValue);

        onSelected && onSelected(newValue);
      };

      const itemProps = {
        value: computedValue,
        className: itemClass,
        role: "option",
        onKeyDown: (e) => {
          if (e.key === keyCodes.enter) {
            handleClick();
          }
        },

        "aria-selected": false
      };

      itemProps.children = (
        <ACheckbox
          className="a-multiselect__menu-item-content"
          checked={value.includes(computedValue)}
          onClick={handleClick}
        >
          {children}
        </ACheckbox>
      );

      // If using a template, the children shouldn't be rendered
      // so add the click handler
      if (itemTemplate) {
        itemProps.onClick = handleClick;
        delete itemProps.children;
      }

      const MenuItemComponent = itemTemplate ? itemTemplate : AListItem;
      return (
        <MenuItemComponent
          key={`a-multiselect__menu-item_${index}`}
          {...itemProps}
          item={item}
          index={index}
        />
      );
    });

    const inputStyleType = withTags ? (
      <div className={tagsClass}>{tags}</div>
    ) : (
      counter
    );

    return (
      <AInputBase ref={ref} {...inputBaseProps}>
        {inputStyleType}
        <input
          ref={floatingRefs.setReference}
          {...getReferenceProps()}
          {...inputProps}
        />
        <AFloatingMenu
          ref={floatingRefs.setFloating}
          anchorRef={floatingRefs.reference}
          menuRef={floatingRefs.floating}
          context={context}
          open={open}
          {...menuComponentProps}
          {...getFloatingProps()}
        >
          {prependContent}
          <div className="a-multiselect__menu-items__wrapper">
            {noData}
            {mappedMenuItems}
          </div>
          {appendContent}
        </AFloatingMenu>
      </AInputBase>
    );
  }
);

AMultiSelect.displayName = "AMultiSelect";

export default AMultiSelect;
