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
import {AListItem} from "../AList";
import {keyCodes} from "../../utils/helpers";
import "./ASelect.scss";

let selectCounter = 0;

const ASelect = forwardRef(
  (
    {
      appendContent,
      className: propsClassName,
      dropdownClassName,
      dropdownStyle,
      disabled,
      hint,
      itemDisabled = "disabled",
      itemSelected = "selected",
      itemTemplate,
      itemText = "text",
      itemValue = "value",
      items = [],
      label,
      maxHeight,
      onSelected,
      placeholder,
      prependContent,
      readOnly,
      required,
      rules,
      validateOnBlur,
      validationState,
      medium,
      useTemplateForSelectedItem = false,
      selectdDisplayTemplate,
      selectedDisplayItem,
      ...rest
    },
    ref
  ) => {
    const menuRef = useRef(null);
    const inputBaseSurfaceRef = useRef(null);
    const surfaceRef = useRef(null);
    const selectedItemRef = useRef(null);
    const [selectId] = useState(selectCounter++);
    const [originalSelectedItem, setOriginalSelectedItem] = useState(
      items.find((x) => x[itemSelected])
    );
    const [selectedItem, setSelectedItem] = useState(
      items.find((x) => x[itemSelected])
    );
    const [isFocused, setIsFocused] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [error, setError] = useState("");
    const [workingValidationState, setWorkingValidationState] =
      useState(validationState);

    const {register, unregister} = useContext(AFormContext);
    useEffect(() => {
      setWorkingValidationState(validationState);
    }, [validationState]);

    useEffect(() => {
      if (isOpen && menuRef.current) {
        setTimeout(() => {
          menuRef.current.focus();
        }, 0);
      }
    }, [isOpen, menuRef]);

    useEffect(() => {
      const newSelectedItem = items.find((x) => x[itemSelected]);

      if (
        (!["string", "object"].includes(typeof originalSelectedItem) &&
          ["string", "object"].includes(typeof newSelectedItem)) ||
        (["string", "object"].includes(typeof originalSelectedItem) &&
          !["string", "object"].includes(typeof newSelectedItem)) ||
        (typeof newSelectedItem === "string" &&
          typeof originalSelectedItem === "object") ||
        (typeof newSelectedItem === "object" &&
          typeof originalSelectedItem === "string") ||
        (typeof newSelectedItem === "string" &&
          typeof originalSelectedItem === "string" &&
          newSelectedItem !== originalSelectedItem) ||
        (typeof newSelectedItem === "object" &&
          typeof originalSelectedItem === "object" &&
          (newSelectedItem[itemValue] !== originalSelectedItem[itemValue] ||
            newSelectedItem[itemText] !== originalSelectedItem[itemText]))
      ) {
        setOriginalSelectedItem(newSelectedItem);
        setSelectedItem(newSelectedItem);
      }
    }, [items]); // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
      if (register) {
        register(`a-select_${selectId}`, {
          reset,
          validate
        });
      }
    }, [validationState, selectedItem, rules]); // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
      if (unregister) {
        return () => {
          return unregister(`a-select_${selectId}`);
        };
      }
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    let className = "a-select";

    if (propsClassName) {
      className += ` ${propsClassName}`;
    }

    if (medium) {
      className += ` a-select--medium`;
    }

    const getSelectedIndex = () => {
      return items.findIndex((item) => {
        if (typeof item === "string") {
          return item === selectedItem;
        } else if (typeof item === "object") {
          return selectedItem
            ? item[itemValue] === selectedItem[itemValue]
            : null;
        }
      });
    };

    const getPreviousItem = (selectedIndex) => {
      if (items.every((x) => x[itemDisabled])) return null;

      let newItem = items[selectedIndex - 1];
      if (!newItem) {
        newItem = items[items.length - 1];
      }

      if (newItem[itemDisabled]) {
        return getPreviousItem(selectedIndex - 1);
      }

      return newItem;
    };

    const getNextItem = (selectedIndex) => {
      if (items.every((x) => x[itemDisabled])) return null;

      let newItem = items[selectedIndex + 1];
      if (!newItem) {
        newItem = items[0];
      }

      if (newItem[itemDisabled]) {
        return getNextItem(selectedIndex + 1);
      }

      return newItem;
    };

    const validate = (testValue = selectedItem) => {
      if (rules || required) {
        let workingRules = [];
        if (rules) {
          workingRules = [...rules];
        }

        if (required) {
          workingRules = [
            {
              test: (v) => {
                if (typeof testValue === "string") {
                  return !!v || `${label ? label + " is r" : "R"}equired`;
                }

                if (typeof testValue === "object") {
                  return (
                    !!v[itemValue] || `${label ? label + " is r" : "R"}equired`
                  );
                }

                return `${label ? label + " is r" : "R"}equired`;
              },
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
      className: "a-select__chevron"
    };

    const selectionProps = {
      className: "a-select__selection"
    };

    if (label) {
      selectionProps["aria-labelledby"] = `a-select__label_${selectId}`;
    }

    if (!disabled) {
      selectionProps.ref = surfaceRef;
      selectionProps.tabIndex = 0;
      selectionProps.role = "button";

      selectionProps.onFocus = () => {
        setIsFocused(true);
      };

      selectionProps.onBlur = (e) => {
        setIsFocused(false);
        !menuRef.current?.contains(e.relatedTarget) && validate(selectedItem);
      };

      if (!readOnly) {
        chevronProps.onClick = selectionProps.onClick = () => {
          setIsOpen(!isOpen);
          if (!isOpen) {
            reset();
          }
        };

        if (isOpen) {
          selectionProps.className += " a-select__surface--focused";
        }

        selectionProps.onKeyDown = (e) => {
          if ([keyCodes.enter, keyCodes.space].includes(e.keyCode)) {
            e.preventDefault();
            setIsOpen(!isOpen);
          } else if (e.keyCode === keyCodes.up) {
            e.preventDefault();
            const newItem = getPreviousItem(getSelectedIndex());
            newItem && selectItem(newItem);
          } else if (e.keyCode === keyCodes.down) {
            e.preventDefault();
            const newItem = getNextItem(getSelectedIndex());
            newItem && selectItem(newItem);
          }
        };
      }
    }

    const selectItem = (item) => {
      setSelectedItem(item);
      !validateOnBlur && validate(item);
      onSelected && onSelected(item);
    };

    let menuClassName = "a-select__menu-items";
    if (dropdownClassName) {
      menuClassName += ` ${dropdownClassName}`;
    }

    const menuComponentProps = {
      anchorRef: inputBaseSurfaceRef,
      className: menuClassName,
      closeOnClick: false,
      // Menu should not receive focus
      // so that the selected item can
      // be focused instead
      focusOnOpen: selectedItem ? false : true,
      onClose: () => {
        setIsOpen(false);
        surfaceRef.current.focus();
      },
      open: isOpen,
      role: "listbox",
      style: {
        minWidth: "max-content",
        width: inputBaseSurfaceRef?.current?.clientWidth
          ? inputBaseSurfaceRef.current.clientWidth + 2
          : "auto",
        ...dropdownStyle
      },
      medium
    };

    const selectIcon = isOpen ? "chevron-up" : "chevron-down";

    let selectionContent;

    if (selectdDisplayTemplate) {
      const itemContent = selectedDisplayItem || selectedItem;
      if (itemContent) {
        const MenuItemComponent = selectdDisplayTemplate;

        selectionContent = (
          <MenuItemComponent
            key={`a-select__menu-item_selectedIndex`}
            item={selectedDisplayItem || selectedItem}
          />
        );
      } else {
        selectionContent = placeholder;
      }
    } else if (!selectedItem) {
      selectionContent = placeholder;
    } else if (useTemplateForSelectedItem && itemTemplate) {
      const MenuItemComponent = itemTemplate;

      selectionContent = (
        <MenuItemComponent
          key={`a-select__menu-item_selectedIndex`}
          item={selectedItem}
        />
      );
    } else if (typeof selectedItem === "object") {
      selectionContent = selectedItem[itemText];
    } else if (typeof selectedItem === "string") {
      selectionContent = selectedItem;
    }

    return (
      <AInputBase
        {...rest}
        ref={ref}
        surfaceRef={inputBaseSurfaceRef}
        className={className}
        medium={medium}
        label={label}
        labelId={`a-select__label_${selectId}`}
        onClickLabel={() => !disabled && surfaceRef.current.focus()}
        disabled={disabled}
        append={
          <AIcon {...chevronProps} size={10}>
            {selectIcon}
          </AIcon>
        }
        focused={isFocused || isOpen}
        readOnly={readOnly}
        validationState={workingValidationState}
        hint={error || hint}>
        <div className="a-select__selection-wrapper">
          <div {...selectionProps}>{selectionContent}</div>
          <AMenu ref={menuRef} {...menuComponentProps}>
            {prependContent}
            <div
              className={`a-select__menu-items__wrapper${
                maxHeight ? " overflow-y-scroll" : ""
              }`}
              style={{maxHeight}}>
              {items.map((item, index) => {
                const itemProps = {
                  value: null,
                  children: null,
                  className: "a-select__menu-item",
                  role: "option",
                  "aria-selected": false
                };

                if (typeof item === "string") {
                  itemProps.value = item;
                  itemProps.children = item;
                  itemProps.onClick = () => {
                    setIsOpen(false);
                    surfaceRef.current.focus();
                    selectItem(item);
                  };

                  if (item === selectedItem) {
                    itemProps.className += " a-select__menu-item--selected";
                    itemProps["aria-selected"] = true;
                    itemProps.ref = selectedItemRef;
                  }
                } else if (typeof item === "object") {
                  itemProps.value = item[itemValue];
                  itemProps.children = item[itemText];
                  if (item[itemDisabled]) {
                    itemProps["aria-disabled"] = true;
                    itemProps.onClick = (e) => {
                      e.stopPropagation();
                    };
                  } else {
                    itemProps.onClick = () => {
                      setIsOpen(false);
                      surfaceRef.current.focus();
                      selectItem(item);
                    };
                  }

                  if (
                    selectedItem &&
                    item[itemValue] === selectedItem[itemValue]
                  ) {
                    itemProps.selected = true;
                    itemProps.className += " a-select__menu-item--selected";
                    itemProps["aria-selected"] = true;
                    itemProps.ref = selectedItemRef;
                  }
                }

                const MenuItemComponent = itemTemplate
                  ? itemTemplate
                  : AListItem;
                return (
                  <MenuItemComponent
                    key={`a-select__menu-item_${index}`}
                    {...itemProps}
                    item={item}
                    index={index}
                  />
                );
              })}
            </div>
            {appendContent}
          </AMenu>
        </div>
      </AInputBase>
    );
  }
);

ASelect.propTypes = {
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
   * The property name of the value indicating a disabled option when `items` is an array of objects.
   */
  itemDisabled: PropTypes.string,
  /**
   * The property name of the value indicating a selected option when `items` is an array of objects.
   */
  itemSelected: PropTypes.string,
  /**
   * Sets a React component to use when rendering menu items. The component will be sent the following props: `item`, `index`, `aria-disabled`, `aria-selected`, `children`, `className`, `onClick`, `role`, `selected`, `value`.
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
   * Sets the max-height of the select dropdown
   * in the case of many dropdown options needing
   * overflow styling
   */
  maxHeight: PropTypes.string,
  /**
   * Handles the `selected` event.
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
   * Toggles the `read-only` state
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
   * Delays validation until the `blur` event.
   */
  validateOnBlur: PropTypes.bool,
  /**
   * Applies a validation state.
   */
  validationState: PropTypes.oneOf(["default", "warning", "danger"]),
  /**
   * Magnetic medium size variant
   */
  medium: PropTypes.bool,
  /**
   * Use the `itemTemplate` with the selectedItem in the ASelect input.
   */
  useTemplateForSelectedItem: PropTypes.bool,
  /**
   * Sets a React component to use when rendering the selected menu item. The component will be sent the following props: `item`. This overrides `useTemplateForSelectedItem`.
   */
  selectdDisplayTemplate: PropTypes.elementType,
  /** If set, uses a custom item rather than the selectedItem when using `selectdDisplayTemplate` */
  selectedDisplayItem: PropTypes.object
};

ASelect.displayName = "ASelect";

export default ASelect;
