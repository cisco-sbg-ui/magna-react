import React, {forwardRef, useEffect, useRef, useState} from "react";
import PropTypes from "prop-types";
import AButton from "../AButton";
import {AForm} from "../AForm";
import AIcon from "../AIcon";
import ATextInput from "../ATextInput";
import ATextarea from "../ATextarea";
import ATriggerTooltip from "../ATriggerTooltip";
import "./AInlineInputBase.scss";

const baseClass = "a-inline-input";

const AInlineInputBase = forwardRef(
  (
    {
      inputComponent = ATextInput,
      inputComponentProps = {},
      clearable,
      disabled,
      required = false,
      value = "",
      placeholder = "...",
      onChange,
      small,
      medium,
      large,
      showTooltip = false,
      ...rest
    },
    ref
  ) => {
    const formRef = useRef(),
      inputRef = useRef(),
      [isEditing, setIsEditing] = useState(false),
      [displayValue, setDisplayValue] = useState(value),
      [editingValue, setEditingValue] = useState(value),
      ComponentTag = inputComponent,
      {
        onBlur: propsOnBlur,
        onClick: propsOnClick,
        onKeyDown: propsOnKeyDown
      } = rest,
      tooltipDisabled = !showTooltip || !displayValue || isEditing;

    // Re-sync display if props changed, for example API update fails
    useEffect(() => {
      setEditingValue(value);
      setDisplayValue(value);
    }, [value]);

    let className = baseClass,
      inputContainerClass = `${baseClass}__input`,
      displayClass = `${baseClass}__display`,
      valueClass = !displayValue ? `${baseClass}__placeholder` : "",
      editIconClass = `${baseClass}__editIcon`,
      clearIconClass = `${baseClass}__clearIcon`;

    if (small) {
      className += ` ${baseClass}--size-small`;
    } else if (large) {
      className += ` ${baseClass}--size-large`;
    } else {
      className += ` ${baseClass}--size-medium`;
    }

    if (disabled) {
      className += ` ${baseClass}--disabled`;
    }

    const handleEditComplete = (e) => {
      // won't trigger on Escape key
      e.stopPropagation();

      setEditingValue(editingValue);

      const validationStates = formRef.current.validate();

      if (validationStates.length) {
        return;
      }

      setDisplayValue(editingValue);
      setIsEditing(false);

      if (value !== editingValue) {
        onChange && onChange(editingValue);
      }
    };

    let content;
    if (isEditing) {
      const additionalProps = {
        required
      };

      content = (
        <div className={inputContainerClass}>
          <AForm ref={formRef}>
            <ComponentTag
              ref={inputRef}
              value={editingValue}
              onChange={(e) => {
                e.stopPropagation();

                const {value: eventValue} = e.target;
                setEditingValue(eventValue);
              }}
              onKeyDown={(e) => {
                e.stopPropagation();

                if (e.key === "Enter") {
                  handleEditComplete(e);
                } else if (e.key === "Escape") {
                  setEditingValue(value);
                  setDisplayValue(value);
                  setIsEditing(false);
                }

                propsOnKeyDown && propsOnKeyDown(e);
              }}
              onBlur={(e) => {
                handleEditComplete(e);

                propsOnBlur && propsOnBlur(e);
              }}
              small={small}
              medium={medium}
              large={large}
              autoFocus // eslint-disable-line
              {...additionalProps}
              {...inputComponentProps}
            />
          </AForm>
        </div>
      );
    } else {
      content = (
        <div className={displayClass}>
          <ATriggerTooltip content={displayValue} disabled={tooltipDisabled}>
            <div className={valueClass}>{displayValue || placeholder}</div>
          </ATriggerTooltip>
          <div className={editIconClass}>
            <AIcon>pencil-simple</AIcon>
          </div>
          {clearable && displayValue && (
            <div className={clearIconClass}>
              <AButton
                tertiaryAlt
                onClick={(e) => {
                  e.stopPropagation();

                  setEditingValue("");
                  setDisplayValue("");
                  setIsEditing(false);

                  onChange && onChange("");
                }}
              >
                <AIcon>x</AIcon>
              </AButton>
            </div>
          )}
        </div>
      );
    }

    return (
      <div
        ref={ref}
        className={className}
        tabIndex={0}
        role="button"
        onClick={(e) => {
          if (disabled) {
            return;
          }

          e.stopPropagation();

          !isEditing && setIsEditing(true);

          propsOnClick && propsOnClick(e);
        }}
        onKeyDown={(e) => {
          if (disabled) {
            return;
          }

          if (["Enter", "Space"].includes(e.key)) {
            e.preventDefault();
          }

          propsOnKeyDown && propsOnKeyDown(e);
        }}
        {...rest}
      >
        {content}
      </div>
    );
  }
);

AInlineInputBase.displayName = "AInlineInputBase";

export const AInlineInputBasePropTypes = {
  /**
   * Input component element type
   */
  inputComponent: PropTypes.oneOf([ATextInput, ATextarea]),
  /**
   * Props passed to the input component
   */
  inputComponentProps: PropTypes.object,
  /**
   * Clears the input value.
   */
  clearable: PropTypes.bool,
  /**
   * Toggles the `disabled` state.
   */
  disabled: PropTypes.bool,
  /**
   * Sets `required` on the input, and makes the value required
   */
  required: PropTypes.bool,
  /**
   * The input's `value` attribute.
   */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * The input's `placeholder` attribute.
   */
  placeholder: PropTypes.string,
  /**
   * Handles the `change` event.
   */
  onChange: PropTypes.func,
  /**
   * Sets widget size to magnetic large
   */
  large: PropTypes.bool,
  /**
   * Sets widget size to magnetic medium (default)
   */
  medium: PropTypes.bool,
  /**
   * Sets widget size to magnetic small
   */
  small: PropTypes.bool,
  /**
   * Show a tooltip on the displayed value
   */
  showTooltip: PropTypes.bool
};

AInlineInputBase.propTypes = AInlineInputBasePropTypes;

export default AInlineInputBase;
