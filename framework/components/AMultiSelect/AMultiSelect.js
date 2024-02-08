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
import AIcon from "../AIcon";
import AMenu from "../AMenu";
import ACheckbox from "../ACheckbox";
import {AListItem} from "../AList";
import AEmptyState from "../AEmptyState";
import {useCombinedRefs} from "../../utils/hooks";
import {keyCodes, localeIncludes, handleBoldText} from "../../utils/helpers";
import useMenuSpacing from "../AMenuBase/hooks";
import useOutsideClick from "../../hooks/useOutsideClick/useOutsideClick";
import usePopupQuickExit from "../../hooks/usePopupQuickExit/usePopupQuickExit";
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
      hint,
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
      required,
      rules,
      skipValidation = false,
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
    const [hasScroll, setHasScroll] = useState(false);
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

    useEffect(() => {
      if (withTags) {
        const tagsEl = inputBaseSurfaceRef?.current?.querySelector(
          ".a-multiselect__tags"
        );
        if (tagsEl) {
          const inputEl = inputBaseSurfaceRef.current.querySelector(
            ".a-multiselect__input"
          );
          tagsEl.offsetHeight + inputEl.offsetHeight >
          inputBaseSurfaceRef.current.offsetHeight
            ? setHasScroll(true)
            : setHasScroll(false);
        }
      }
    }, [onSelected, withTags]);

    if (hasScroll && withTags) {
      className += " a-multiselect--hasScroll";
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
      hints,
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

    if (!withTags) {
      inputBaseProps.className += ` ${counterClass}`;
    }

    const onKeyDown = (e) => {
      if (e.keyCode === keyCodes.up) {
        e.preventDefault();
        setIsOpen(filteredItems.length || noDataContent);
        const menuItems = menuRef.current?.querySelectorAll(
          ".a-multiselect__menu-items__wrapper .a-list-item[tabindex]"
        );
        menuItems && menuItems[menuItems.length - 1]?.focus();
      } else if (e.keyCode === keyCodes.down || e.keyCode === keyCodes.enter) {
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

        onChange && onChange(e);
      },
      onClick: () => {
        setIsOpen(items.length || noDataContent);
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

    const counter = value && (
      <AMultiSelectCounter
        items={items}
        value={value}
        onSelected={onSelected}
        itemValue={itemValue}
        itemText={itemText}
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
        validate(itemValue);

        let newValue = Array.isArray(value) ? [...value] : [];
        if (value.includes(computedValue)) {
          newValue = newValue.filter((v) => v !== computedValue);
        } else {
          newValue.push(computedValue);
          newValue = newValue.filter(
            (value, i, arr) => arr.indexOf(value) === i
          );
        }

        onSelected && onSelected(newValue);
      };

      const itemProps = {
        value: computedValue,
        className: itemClass,
        role: "option",
        onKeyDown: (e) => {
          if (e.keyCode === keyCodes.enter) {
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
      if (!!itemTemplate) {
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
      <AInputBase {...inputBaseProps}>
        {inputStyleType}
        <input {...inputProps} />
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
   * Sets hint or multiple hints.
   */
  hints: PropTypes.arrayOf(
    PropTypes.shape({
      /**
       * Hint content.
       */
      content: PropTypes.node.isRequired,
      /**
       * Style the hint with the component validation state. Default: false.
       */
      hintUsesValidationState: PropTypes.bool,
      /**
       * Override the validation state of the hint by incorporating the desired state.
       * The component validation state is disregarded when this property is configured.
       */
      validationStateOverride: PropTypes.oneOf([
        "default",
        "warning",
        "danger"
      ]),
      /**
       * Do not show hint when there are validation errors.
       */
      hideHintOnError: PropTypes.bool
    })
  ),
  /**
   * Sets the hint content.
   * @deprecated use "hints" property
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
   * Skips internal and/or extra validation rules
   */
  skipValidation: PropTypes.bool,
  /**
   * Applies tag style to input. Default is counter style.
   */
  withTags: PropTypes.bool,
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
