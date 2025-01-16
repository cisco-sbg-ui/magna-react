import React, {
  forwardRef,
  useContext,
  useEffect,
  useRef,
  useState
} from "react";

import AInputBase from "../AInputBase";
import AEmptyState from "../AEmptyState";
import {AFormContext} from "../AForm";
import AIcon from "../AIcon";
import AFloatingMenu from "../AFloatingMenu";
import useFloatingDropdown from "../AFloatingMenu/useFloatingDropdown";
import {AListItem} from "../AList";
import {keyCodes, filterListItems, handleBoldText} from "../../utils/helpers";
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
      hints,
      itemDisabled = "disabled",
      itemSelected = "selected",
      itemTemplate,
      itemText = "text",
      itemValue = "value",
      items = [],
      label,
      maxHeight,
      onSelected,
      placeholder: propsPlaceholder,
      prependContent,
      readOnly,
      required,
      rules,
      validateOnBlur,
      validationState,
      medium = true,
      useTemplateForSelectedItem = false,
      selectedDisplayTemplate,
      selectedDisplayItem,
      textWrapMenuItems,
      truncateMenuItems,
      hideIfReferenceHidden = true,
      search = true,
      onChange,
      value = "",
      filterFunction: propsFilterFunction,
      noDataContent: propsNoDataContent,
      noDataMessage = "No matches found",
      ...rest
    },
    ref
  ) => {
    const menuRef = useRef(null);
    const surfaceRef = useRef(null);
    const selectedItemRef = useRef(null);
    const [selectId] = useState(selectCounter++);
    const [filterValue, setFilterValue] = useState("");
    const [originalSelectedItem, setOriginalSelectedItem] = useState(
      items.find((x) => x[itemSelected])
    );
    const [selectedItem, setSelectedItem] = useState(
      items.find((x) => x[itemSelected])
    );
    const [isFocused, setIsFocused] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [error, setError] = useState("");
    const [hideInput, setHideInput] = useState(true);
    const [workingValidationState, setWorkingValidationState] =
      useState(validationState);

    const {
      context,
      floatingRefs,
      floatingStyles,
      getReferenceProps,
      getFloatingProps,
      isReferenceHidden
    } = useFloatingDropdown(isOpen, setIsOpen);

    const {register, unregister} = useContext(AFormContext);
    useEffect(() => {
      setWorkingValidationState(validationState);
    }, [validationState]);
    const filteredItems = filterValue
      ? filterListItems(items, filterValue, propsFilterFunction, itemText)
      : items;

    const noDataContent = propsNoDataContent ?? (
      <AEmptyState message={noDataMessage} variant="info" small />
    );
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
        setHideInput(true);
        setOriginalSelectedItem(newSelectedItem);
        setSelectedItem(newSelectedItem);
      }
    }, [items]); // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
      if (register) {
        register(`a-select_${selectId}`, {
          reset,
          validate,
          disabled
        });
      }
    }, [validationState, selectedItem, disabled, rules]); // eslint-disable-line react-hooks/exhaustive-deps

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
      if (items.every((x) => x[itemDisabled])) {
        return null;
      }

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
      if (items.every((x) => x[itemDisabled])) {
        return null;
      }

      let newItem = items[selectedIndex + 1];
      if (!newItem) {
        newItem = items[0];
      }

      if (newItem[itemDisabled]) {
        return getNextItem(selectedIndex + 1);
      }

      return newItem;
    };

    const ruleKeys = rules ? rules.map((r) => r.key).filter((k) => !!k) : [];

    const validate = (testValue = selectedItem) => {
      if (rules || required) {
        let workingRules = [];
        if (rules) {
          workingRules = [...rules];
        }

        if (required && !ruleKeys.includes("required")) {
          workingRules = [
            {
              key: "required",
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

    // useEffect(() => {
    //   if (!disabled && !readOnly && search && isOpen) {
    //     if (isOpen) {
    //       setHideInput(false);
    //     }
    //   }
    // }, []);

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
          if (search && hideInput) {
            setHideInput(false);
          } else {
            selectionProps.className += " a-select__surface--focused";
          }
        }

        selectionProps.onKeyDown = (e) => {
          if ([keyCodes.enter, keyCodes.space].includes(e.code)) {
            //must be code over key for "Space"
            e.preventDefault();
            setIsOpen(!isOpen);
          } else if (e.key === keyCodes.up) {
            e.preventDefault();
            const newItem = getPreviousItem(getSelectedIndex());
            newItem && selectItem(newItem);
          } else if (e.key === keyCodes.down) {
            e.preventDefault();
            const newItem = getNextItem(getSelectedIndex());
            newItem && selectItem(newItem);
          }
        };
      }
    }

    const selectItem = (item) => {
      setHideInput(true);
      setSelectedItem(item);
      !validateOnBlur && validate(item);
      onSelected && onSelected(item);
    };

    let menuClassName = "a-select__menu-items";
    if (dropdownClassName) {
      menuClassName += ` ${dropdownClassName}`;
    }

    if (textWrapMenuItems) {
      menuClassName += " a-select__menu-items--text-wrap-menu-items";
    } else if (truncateMenuItems) {
      menuClassName += " a-select__menu-items--truncate-menu-items";
    }

    const noData = !filteredItems.length && !!noDataContent && noDataContent;

    //Manually add focus after onload of input element as it has no state or loses state after being unmounted for selection value
    useEffect(() => {
      if (search && !hideInput) {
        document.querySelector(`#a-select__input_${selectId}`).focus();
      }
    }, [hideInput]);

    const onKeyDown = (e) => {
      if (e.key === keyCodes.up) {
        e.preventDefault();
        setIsOpen(!!filteredItems.length || !!noDataContent);
        const menuItems = floatingRefs.floating?.current?.querySelectorAll(
          ".a-select__menu-items__wrapper .a-list-item[tabindex]"
        );

        menuItems && menuItems[menuItems.length - 1]?.focus();
      } else if (e.key === keyCodes.down || e.key === keyCodes.enter) {
        e.preventDefault();
        setIsOpen(!!filteredItems.length || !!noDataContent);

        floatingRefs.floating?.current
          ?.querySelectorAll(
            ".a-select__menu-items__wrapper .a-list-item[tabindex]"
          )[0]
          ?.focus();
      }
    };

    const inputProps = {
      autoComplete: "off",
      className: "a-select__input",
      disabled,
      tabIndex: 0,
      id: `a-select__input_${selectId}`,
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
      placeholder: placeholder || label,
      readOnly: readOnly,
      value: filterValue
    };

    const menuComponentProps = {
      className: menuClassName,
      closeOnClick: false,
      focusOnOpen: !search,
      initialFocus: !search && getSelectedIndex() >= 0 ? getSelectedIndex() : 0,
      role: "listbox",
      style: {
        minWidth: "max-content",
        width: floatingRefs.reference?.current?.clientWidth
          ? floatingRefs.reference?.current.clientWidth + 2
          : "auto",
        ...dropdownStyle,
        ...floatingStyles
      },
      medium,
      hideIfReferenceHidden,
      isReferenceHidden
    };

    const selectIcon = isOpen ? "chevron-up" : "chevron-down";

    const placeholder =
      typeof propsPlaceholder === "string" ? (
        <span className="a-select__placeholder">{propsPlaceholder}</span>
      ) : (
        propsPlaceholder
      );

    let selectionContent;

    if (selectedDisplayTemplate) {
      const itemContent = selectedDisplayItem || selectedItem;
      if (itemContent) {
        const MenuItemComponent = selectedDisplayTemplate;

        selectionContent = (
          <MenuItemComponent
            key={`a-select__menu-item_selectedIndex`}
            item={itemContent}
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
        surfaceRef={floatingRefs.setReference}
        {...getReferenceProps()}
        className={className}
        medium={medium}
        label={label}
        labelId={`a-select__label_${selectId}`}
        onClickLabel={() => !disabled && surfaceRef.current.focus()}
        disabled={disabled}
        append={
          <AIcon {...chevronProps} size={16}>
            {selectIcon}
          </AIcon>
        }
        focused={isFocused || isOpen}
        readOnly={readOnly}
        validationState={workingValidationState}
        error={error}
        hints={hints}
        required={required}
      >
        <div className="a-select__selection-wrapper">
          <>
            {search && !hideInput ? (
              <input {...inputProps} />
            ) : (
              <div {...selectionProps}>{selectionContent}</div>
            )}
          </>
          <AFloatingMenu
            ref={floatingRefs.setFloating}
            anchorRef={floatingRefs.reference}
            menuRef={floatingRefs.floating}
            context={context}
            open={isOpen}
            {...menuComponentProps}
            {...getFloatingProps()}
          >
            {prependContent}
            {noData}
            <div
              className={`a-select__menu-items__wrapper${
                maxHeight ? " overflow-y-scroll" : ""
              }`}
              style={{maxHeight}}
            >
              {filteredItems.map((item, index) => {
                const itemProps = {
                  value: null,
                  children: null,
                  className: "a-select__menu-item",
                  role: "option",
                  "aria-selected": false
                };

                if (typeof item === "string") {
                  itemProps.children = (
                    <span>{handleBoldText(filterValue, item)}</span>
                  );
                  itemProps.onClick = () => {
                    setIsOpen(false);
                    surfaceRef.current.focus();
                    selectItem(item);
                  };

                  if (truncateMenuItems) {
                    itemProps.children = (
                      <span
                        title={itemProps.children}
                        className="a-select__menu-item-wrap"
                      >
                        {itemProps.children}
                      </span>
                    );
                  }

                  if (item === selectedItem) {
                    itemProps.className += " a-select__menu-item--selected";
                    itemProps["aria-selected"] = true;
                    itemProps.ref = selectedItemRef;
                  }
                } else if (typeof item === "object") {
                  itemProps.children = (
                    <span>{handleBoldText(filterValue, item[itemText])}</span>
                  );

                  if (truncateMenuItems) {
                    itemProps.children = (
                      <span
                        title={item[itemText]}
                        className="a-select__menu-item-wrap"
                      >
                        {itemProps.children}
                      </span>
                    );
                  }

                  if (item[itemDisabled]) {
                    itemProps["aria-disabled"] = true;
                    itemProps.disabled = true;
                    itemProps.onClick = (e) => {
                      e.stopPropagation();
                    };
                  } else {
                    itemProps.onClick = () => {
                      selectItem(item);
                      if (search && !hideInput) {
                        setHideInput(true);
                      } else {
                        surfaceRef.current.focus();
                      }
                      setIsOpen(false);
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
          </AFloatingMenu>
        </div>
      </AInputBase>
    );
  }
);

export default ASelect;
