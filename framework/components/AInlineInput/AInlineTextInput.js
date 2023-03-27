import React, {forwardRef, useEffect, useRef, useState} from "react";
import PropTypes from "prop-types";
import useEscapeKeydown from "../../hooks/useEscapeKeydown/useEscapeKeydown";
import AButton from "../AButton";
import AIcon from "../AIcon";
import ATextInput from "../ATextInput";
import ATextarea from "../ATextarea";
import "./AInlineInput.scss";

const baseClass = "a-inline-text-input";

const AInlineTextInput = forwardRef(
  (
    {
      inputComponent = ATextInput,
      inputComponentProps = {},
      clearable,
      disabled,
      value = "",
      placeholder = "...",
      onChange,
      ...rest
    },
    ref
  ) => {
    const inputRef = useRef(),
      [isEditing, setIsEditing] = useState(false),
      [displayValue, setDisplayValue] = useState(value),
      [editingValue, setEditingValue] = useState(value),
      ComponentTag = inputComponent;

    // Re-sync display if props changed, for example API update fails
    useEffect(() => {
      setEditingValue(value);
      setDisplayValue(value);
    }, [value]);

    useEscapeKeydown({
      isEnabled: isEditing,
      onKeydown: () => {
        setEditingValue(displayValue);
        setDisplayValue(displayValue);
        setIsEditing(false);
      }
    });

    let className = baseClass,
      inputContainerClass = `${baseClass}__input`,
      displayClass = `${baseClass}__display`,
      valueClass = !displayValue ? `${baseClass}__placeholder` : "",
      editIconClass = `${baseClass}__editIcon`,
      clearIconClass = `${baseClass}__clearIcon`;

    const handleChange = (e) => {
      // won't trigger on Escape key
      e.stopPropagation();

      setEditingValue(editingValue);
      setDisplayValue(editingValue);
      setIsEditing(false);

      onChange && onChange(editingValue);
    };

    return (
      <div
        ref={ref}
        className={className}
        tabIndex={0}
        role="button"
        onClick={(e) => {
          e.stopPropagation();

          if (disabled) {
            return;
          }

          !isEditing && setIsEditing(true);
        }}
        onKeyDown={(e) => {
          if (disabled) {
            return;
          }

          if (["Enter", "Space"].includes(e.key)) {
            e.preventDefault();
            onClick && onClick(e);
          }
        }}
        {...rest}
      >
        {isEditing && (
          <div className={inputContainerClass}>
            <ComponentTag
              ref={inputRef}
              value={editingValue}
              onChange={(e) => {
                e.stopPropagation();

                const {value: eventValue} = e.target;
                setEditingValue(eventValue);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleChange(e);
                }
              }}
              onBlur={handleChange}
              autoFocus // eslint-disable-line
              medium
              {...inputComponentProps}
            />
          </div>
        )}
        {!isEditing && (
          <div className={displayClass}>
            <div className={valueClass}>{displayValue || placeholder}</div>
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
        )}
      </div>
    );
  }
);

AInlineTextInput.displayName = "AInlineTextInput";

AInlineTextInput.propTypes = {
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
  onChange: PropTypes.func
};

export default AInlineTextInput;
