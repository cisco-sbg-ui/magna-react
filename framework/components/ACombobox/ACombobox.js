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
import AFloatingMenu from "../AFloatingMenu";
import useFloatingDropwdown from "../AFloatingMenu/useFloatingDropdown";
import {AListItem} from "../AList";
import AEmptyState from "../AEmptyState";
import {useCombinedRefs} from "../../utils/hooks";
import {keyCodes} from "../../utils/helpers";
import "./ACombobox.scss";

let comboboxCounter = 0;

const ACombobox = forwardRef(
  (
    {
      appendContent,
      className: propsClassName,
      clearable,
      dropdownClassName,
      dropdownStyle,
      disabled = false,
      hint,
      hints,
      itemTemplate,
      itemText = "text",
      itemValue = "value",
      items = [],
      label,
      maxHeight,
      noDataContent: propsNoDataContent,
      noDataMessage = "No matches found",
      onChange,
      onClear,
      onSelected,
      placeholder,
      prependContent,
      readOnly,
      required = false,
      rules,
      skipValidation = false,
      validateOnBlur,
      validationState,
      value,
      hideIfReferenceHidden = true,
      ...rest
    },
    ref
  ) => {
    const comboboxRef = useRef(null);
    const combinedRef = useCombinedRefs(ref, comboboxRef);

    const [comboboxId] = useState(comboboxCounter++);
    const [isFocused, setIsFocused] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [error, setError] = useState("");
    const [workingValidationState, setWorkingValidationState] =
      useState(validationState);
    const open = Boolean((items.length || noDataContent) && isOpen);

    const {
      context,
      floatingRefs,
      floatingStyles,
      getReferenceProps,
      getFloatingProps,
      isReferenceHidden
    } = useFloatingDropwdown(isOpen, setIsOpen);

    const {register, unregister} = useContext(AFormContext);
    useEffect(() => {
      setWorkingValidationState(validationState);
    }, [validationState]);

    useEffect(() => {
      if (isFocused && items.length) setIsOpen(true);
    }, [items]); // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
      if (register) {
        register(`a-combobox_${comboboxId}`, {
          reset,
          validate,
          disabled
        });
      }
    }, [validationState, value, disabled, rules]); // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
      if (unregister) {
        return () => {
          return unregister(`a-combobox_${comboboxId}`);
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
      className: "a-combobox__chevron",
      size: 16
    };

    if (!disabled && !readOnly) {
      chevronProps.onClick = () => {
        setIsOpen(!isOpen);
        combinedRef.current.querySelector(".a-combobox__input").focus();
      };
    }

    const noDataContent = propsNoDataContent ?? (
      <AEmptyState
        message={noDataMessage}
        variant="positive"
        className="a-combobox__nodata"
        xsmall
      />
    );

    const inputBaseProps = {
      ...rest,
      className: "a-combobox",
      clearable,
      disabled,
      focused: Boolean(isFocused || isOpen),
      append: <AIcon {...chevronProps}>chevron-down</AIcon>,
      error,
      hint,
      hints,
      label,
      labelFor: `a-combobox_${comboboxId}`,
      onClear: () => {
        const e = combinedRef.current.querySelector(".a-combobox__input");
        var nativeInputValueSetter = Object.getOwnPropertyDescriptor(
          window.HTMLInputElement.prototype,
          "value"
        ).set;
        nativeInputValueSetter.call(e, "");
        var event = new Event("input", {bubbles: true});
        e.dispatchEvent(event);
        setIsOpen(false);
        reset();
        onClear && onClear(e);
      },
      readOnly,
      validationState: workingValidationState,
      required
    };

    if (propsClassName) {
      inputBaseProps.className += ` ${propsClassName}`;
    }

    const inputProps = {
      autoComplete: "off",
      className: "a-combobox__input",
      disabled,
      id: `a-combobox_${comboboxId}`,
      onBlur: (e) => {
        setIsFocused(false);
        !floatingRefs.floating?.current?.contains(e.relatedTarget) &&
          validate(value);
      },
      onChange: (e) => {
        setIsOpen(items.length || noDataContent);
        !validateOnBlur && validate(e.target.value);
        onChange && onChange(e);
      },
      onClick: () => setIsOpen(items.length || noDataContent),
      onFocus: () => {
        setIsFocused(true);
      },
      onKeyDown: (e) => {
        if (e.key === keyCodes.up) {
          e.preventDefault();
          setIsOpen(items.length || noDataContent);
          const menuItems = floatingRefs.floating?.current?.querySelectorAll(
            ".a-combobox__menu-items__wrapper .a-list-item[tabindex]"
          );
          menuItems && menuItems[menuItems.length - 1]?.focus();
        } else if (e.key === keyCodes.down) {
          e.preventDefault();
          setIsOpen(items.length || noDataContent);
          floatingRefs.floating?.current
            ?.querySelectorAll(
              ".a-combobox__menu-items__wrapper .a-list-item[tabindex]"
            )[0]
            ?.focus();
        }
      },
      placeholder,
      readOnly,
      value
    };

    let menuClassName = "a-combobox__menu-items";
    if (dropdownClassName) {
      menuClassName += ` ${dropdownClassName}`;
    }

    const menuComponentProps = {
      className: menuClassName,
      closeOnClick: false,
      initialFocus: -1,
      onClose: () => setIsOpen(false),
      open,
      role: "listbox",
      style: {
        minWidth: "max-content",
        width: combinedRef.current?.clientWidth + 2 || "auto",
        ...dropdownStyle,
        ...floatingStyles
      },
      hideIfReferenceHidden,
      isReferenceHidden
    };

    return (
      <AInputBase
        ref={combinedRef}
        {...inputBaseProps}
        surfaceRef={floatingRefs.setReference}
        {...getReferenceProps()}
      >
        <input {...inputProps} />
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
          <div
            className={`a-combobox__menu-items__wrapper${
              maxHeight ? " overflow-y-scroll" : ""
            }`}
            style={{maxHeight}}
          >
            {!items.length && !!noDataContent && (
              <AListItem>{noDataContent}</AListItem>
            )}
            {items.map((item, index) => {
              const itemProps = {
                value: null,
                children: null,
                className: "a-combobox__menu-item",
                role: "option",
                "aria-selected": false,
                onClick: () => {
                  validate(typeof item === "string" ? item : item[itemValue]);
                  setIsOpen(false);
                  onSelected && onSelected(item);
                  setTimeout(() => {
                    combinedRef.current
                      .querySelector(".a-combobox__input")
                      .focus();
                  }, 30);
                }
              };

              if (typeof item === "string") {
                itemProps.value = item;
                itemProps.children = item;
              } else if (typeof item === "object") {
                itemProps.value = item[itemValue];
                itemProps.children = item[itemText];
              }

              const MenuItemComponent = itemTemplate ? itemTemplate : AListItem;
              return (
                <MenuItemComponent
                  key={`a-combobox__menu-item_${index}`}
                  {...itemProps}
                  item={item}
                  index={index}
                />
              );
            })}
          </div>
          {appendContent}
        </AFloatingMenu>
      </AInputBase>
    );
  }
);

ACombobox.propTypes = {
  /**
   * Sets the content to append to the dropdown list.
   */
  appendContent: PropTypes.node,
  /**
   * Toggles whether to display a clearable icon.
   */
  clearable: PropTypes.bool,
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
  hints: PropTypes.oneOfType([
    PropTypes.arrayOf(
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
    // Accept a string and use default AHint rendering
    PropTypes.string,
    // Pass a custom renderable object as the hint
    PropTypes.node
  ]),
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
   * Sets the max-height of the select dropdown
   * in the case of many dropdown options needing
   * overflow styling
   *
   * @example maxHeight="300px"
   */
  maxHeight: PropTypes.string,
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
   * Delays validation until the `blur` event.
   */
  validateOnBlur: PropTypes.bool,
  /**
   * Applies a validation state.
   */
  validationState: PropTypes.oneOf(["default", "warning", "danger"]),
  /**
   * Sets the text input value.
   */
  value: PropTypes.string
};

ACombobox.displayName = "ACombobox";

export default ACombobox;
