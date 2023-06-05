import PropTypes from "prop-types";
import React, {
  forwardRef,
  useContext,
  useEffect,
  useRef,
  useState
} from "react";

import AInputBase from "../AInputBase";
import {AFormContext} from "../AForm";
import AButton from "../AButton";
import AIcon from "../AIcon";
import AMenu from "../AMenu";
import ATag from "../ATag";
import {AListItem} from "../AList";
import AEmptyState from "../AEmptyState";
import {useCombinedRefs} from "../../utils/hooks";
import {keyCodes} from "../../utils/helpers";
import useMenuSpacing from "../AMenuBase/hooks";
import useOutsideClick from "../../hooks/useOutsideClick/useOutsideClick";
import usePopupQuickExit from "../../hooks/usePopupQuickExit/usePopupQuickExit";
import "./AMultiSelect.scss";
import AMultiSelectTag from "./AMultiSelectTag";

let multiselectCounter = 0;

const AMultiSelect = forwardRef(
  (
    {
      appendContent,
      className: propsClassName,
      dropdownClassName,
      dropdownStyle,
      disabled,
      hint,
      itemTemplate,
      itemText = "text",
      itemValue = "value",
      items = [],
      label,
      noDataContent: propsNoDataContent,
      noDataMessage = "No matches found",
      onChange,
      onClear,
      onSelected,
      placeholder,
      prependContent,
      readOnly,
      required,
      rules,
      validationState,
      value = [],
      filterFunction: propsFilterFunction,
      ...rest
    },
    ref
  ) => {
    const multiselectRef = useRef(null);
    const menuRef = useRef(null);
    const inputBaseSurfaceRef = useRef(null);
    const combinedRef = useCombinedRefs(ref, multiselectRef);

    const [multiselectId] = useState(multiselectCounter++);
    const [isFocused, setIsFocused] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [filterValue, setFilterValue] = useState("");
    const [error, setError] = useState("");
    const [workingValidationState, setWorkingValidationState] =
      useState(validationState);
    const {checkMenuSpacing, menuPlacement} = useMenuSpacing(
      inputBaseSurfaceRef,
      menuRef
    );
    const filterFunction = propsFilterFunction
      ? propsFilterFunction
      : (val, item) => {
          let displayValue;
          if (typeof item === "string") {
            displayValue = item;
          } else if (typeof item === "object") {
            displayValue = item[itemText];
          }
          return displayValue.toLowerCase().includes(val);
        };
    const filteredItems = filterValue
      ? items.filter((item) => {
          return filterFunction(filterValue, item);
        })
      : items;

    let className = "a-multiselect";

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
          validate
        });
      }
    }, [validationState, value, rules]); // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
      if (unregister) {
        return () => {
          return unregister(`a-multiselect_${multiselectId}`);
        };
      }
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
      if (isOpen && menuRef.current) {
        checkMenuSpacing();
      }
    }, [isOpen, checkMenuSpacing, menuRef]);

    useOutsideClick({
      isEnabled: menuRef && menuRef.current && isOpen,
      rootRef: menuRef,
      onClick: () => setIsOpen(false)
    });

    usePopupQuickExit({
      popupRef: menuRef,
      isEnabled: isOpen,
      onExit: () => setIsOpen(false)
    });

    const validate = (testValue = value) => {
      if (rules || required) {
        let workingRules = [];
        if (rules) {
          workingRules = [...rules];
        }

        if (required) {
          workingRules = [
            {
              test: (v) => !!v || `${label ? label + " is r" : "R"}equired`,
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
        combinedRef.current.querySelector(".a-multiselect__input").focus();
      };
    }

    if (inputBaseSurfaceRef?.current) {
      const controlEl = inputBaseSurfaceRef?.current?.querySelector(
        ".a-input-base__control"
      );

      if (controlEl.scrollHeight > inputBaseSurfaceRef?.current?.offsetHeight) {
        className += " a-multiselect--hasScroll";
      }
    }

    const noDataContent = propsNoDataContent ?? (
      <AEmptyState
        message={noDataMessage}
        variant="positive"
        className="a-multiselect__nodata"
        xsmall
      />
    );

    const inputBaseProps = {
      ...rest,
      ref: combinedRef,
      surfaceRef: inputBaseSurfaceRef,
      className,
      clearable: (value && !!value.length) || !!filterValue,
      disabled,
      focused: Boolean(isFocused || isOpen),
      append: <AIcon {...chevronProps}>chevron-down</AIcon>,
      error,
      hint,
      label,
      labelFor: `a-multiselect_${multiselectId}`,
      onClear: () => {
        const e = combinedRef.current.querySelector(".a-multiselect__input");
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
      readOnly,
      validationState: workingValidationState,
      required
    };

    if (propsClassName) {
      inputBaseProps.className += ` ${propsClassName}`;
    }

    const onKeyDown = (e) => {
      if (e.keyCode === keyCodes.up) {
        e.preventDefault();
        setIsOpen(filteredItems.length || noDataContent);
        const menuItems = menuRef.current?.querySelectorAll(
          ".a-multiselect__menu-items__wrapper .a-list-item[tabindex]"
        );
        menuItems && menuItems[menuItems.length - 1]?.focus();
      } else if (e.keyCode === keyCodes.down) {
        e.preventDefault();
        setIsOpen(filteredItems.length || noDataContent);
        menuRef.current
          ?.querySelectorAll(
            ".a-multiselect__menu-items__wrapper .a-list-item[tabindex]"
          )[0]
          ?.focus();
      }
    };

    const inputProps = {
      autoComplete: "off",
      className: "a-multiselect__input",
      disabled,
      id: `a-multiselect_${multiselectId}`,
      onBlur: (e) => {
        setIsFocused(false);
        !menuRef.current?.contains(e.relatedTarget) && validate(value);
      },
      onChange: (e) => {
        setIsOpen(items.length || noDataContent);

        setFilterValue(e.target.value);

        // Measure the size of the actual text being entered to quickly
        // resize the input so it stretches and wraps in the input surface
        const span = document.createElement("span");
        span.style.opacity = 0;
        span.style.position = "absolute";
        span.innerHTML = e.target.value;
        multiselectRef.current?.appendChild(span);
        const offsetWidth = span.offsetWidth;

        if (
          offsetWidth + 1 <
          e.target.parentNode?.parentNode?.clientWidth - 16
        ) {
          e.target.style.width = `${offsetWidth + 16 + 1}px`;
        } else {
          e.target.style.width = `${e.target.parentNode?.parentNode?.clientWidth}px`;
        }
        multiselectRef.current?.removeChild(span);

        onChange && onChange(e);
      },
      onClick: () => {
        setIsOpen(items.length || noDataContent);
      },
      onFocus: () => {
        setIsFocused(true);
      },
      onKeyDown,
      placeholder: value && !value.length ? placeholder : "",
      readOnly,
      value: filterValue
    };

    let menuClassName = "a-multiselect__menu-items";
    if (dropdownClassName) {
      menuClassName += ` ${dropdownClassName}`;
    }

    const menuComponentProps = {
      anchorRef:
        inputBaseSurfaceRef?.current?.getBoundingClientRect() ||
        inputBaseSurfaceRef,
      className: menuClassName,
      closeOnClick: false,
      focusOnOpen: false,
      onClose: () => setIsOpen(false),
      open: Boolean((items.length || noDataContent) && isOpen),
      role: "listbox",
      style: {
        minWidth: "max-content",
        width: inputBaseSurfaceRef?.current?.clientWidth + 2 || "auto",
        ...dropdownStyle
      },
      placement: menuPlacement
    };

    const tags =
      value &&
      value.map((v) => {
        return (
          <AMultiSelectTag
            key={v[itemValue] || v}
            items={items}
            value={v}
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
        children = item;
      } else if (typeof item === "object") {
        computedValue = item[itemValue];
        children = item[itemText];
      }

      if (value.includes(computedValue)) {
        itemClass += ` a-multiselect__menu-item--selected`;
      }

      const itemProps = {
        value: computedValue,
        className: itemClass,
        role: "option",
        "aria-selected": false,
        onClick: () => {
          validate(itemValue);

          let newValue = [...value];
          if (value.includes(computedValue)) {
            newValue = newValue.filter((v) => v !== computedValue);
          } else {
            newValue.push(computedValue);
            newValue = newValue.filter(
              (value, i, arr) => arr.indexOf(value) === i
            );
          }

          onSelected && onSelected(newValue);

          setTimeout(() => {
            combinedRef.current.querySelector(".a-multiselect__input").focus();
          }, 30);
        }
      };

      itemProps.children = (
        <div className="a-multiselect__menu-item-content">
          <div className="a-multiselect__menu-item-content__label">
            {children}
          </div>
          {value.includes(computedValue) && (
            <div className="a-multiselect__menu-item-content__check">
              <AIcon>check</AIcon>
            </div>
          )}
        </div>
      );

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

    return (
      <AInputBase {...inputBaseProps}>
        <div
          className="a-multiselect__tags"
          onClick={(e) => {
            e.stopPropagation();
            setIsOpen(true);
          }}
          tabIndex={0}
          onKeyDown={onKeyDown}
          role="button"
        >
          {tags}
          <input {...inputProps} />
        </div>
        <AMenu ref={menuRef} {...menuComponentProps}>
          {prependContent}
          <div className="a-multiselect__menu-items__wrapper">
            {noData}
            {mappedMenuItems}
          </div>
          {appendContent}
        </AMenu>
      </AInputBase>
    );
  }
);

AMultiSelect.propTypes = {
  /**
   * Sets the content to append to the dropdown list.
   */
  appendContent: PropTypes.node,
  /**
   * Toggles the disabled state.
   */
  disabled: PropTypes.bool,
  /**
   * Because ASelect uses an AMenu, the dropdown interface
   * is mounted outside of the application area. To style
   * this portion of ASelect, a class can be provided.
   */
  dropdownClassName: PropTypes.string,
  /**
   * Similar to the dropdownClassName prop, this can be used
   * to pass a style object to the dropdown interface
   */
  dropdownStyle: PropTypes.object,
  /**
   * Sets the hint content.
   */
  hint: PropTypes.node,
  /**
   * Sets a React component to use when rendering menu items. The component will be sent the following props: `item`, `index`, `aria-selected`, `children`, `className`, `onClick`, `role`, `value`.
   */
  itemTemplate: PropTypes.elementType,
  /**
   * The property name of the option text when `items` is an array of objects.
   */
  itemText: PropTypes.string,
  /**
   * The property name of the option value when `items` is an array of objects.
   */
  itemValue: PropTypes.string,
  /**
   * An array of select options.
   */
  items: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.arrayOf(PropTypes.object)
  ]),
  /**
   * Sets the label content.
   */
  label: PropTypes.node,
  /**
   * Sets the content for when no matches are available.
   */
  noDataContent: PropTypes.node,
  /**
   * Handles the `change` event for when the text input is modified.
   */
  onChange: PropTypes.func,
  /**
   * Handles the `clear` event (for supplemental handling).
   */
  onClear: PropTypes.func,
  /**
   * Handles the `selected` event for when a selection is chosen in the dropdown.
   */
  onSelected: PropTypes.func,
  /**
   * Sets the text when no option is selected.
   */
  placeholder: PropTypes.string,
  /**
   * Sets the content to prepend to the dropdown list.
   */
  prependContent: PropTypes.node,
  /**
   * Toggles the `readOnly` state.
   */
  readOnly: PropTypes.bool,
  /**
   * Toggles a default rule for required values.
   */
  required: PropTypes.bool,
  /**
   * Sets validation rules for the component.
   */
  rules: PropTypes.arrayOf(
    PropTypes.shape({
      test: PropTypes.func,
      level: PropTypes.string
    })
  ),
  /**
   * Applies a validation state.
   */
  validationState: PropTypes.oneOf(["default", "warning", "danger"]),
  /**
   * Sets the text input value.
   */
  value: PropTypes.array,
  /**
   * Function to filter items when the input value changes
   */
  filterFunction: PropTypes.func
};

AMultiSelect.displayName = "AMultiSelect";

export default AMultiSelect;