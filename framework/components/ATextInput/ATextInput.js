import PropTypes from "prop-types";
import React, {
  forwardRef,
  useContext,
  useEffect,
  useRef,
  useState
} from "react";

import {ATooltipPropTypes} from "../ATooltip";
import AInputBase from "../AInputBase";
import {AFormContext} from "../AForm";
import AIcon from "../AIcon";
import {useCombinedRefs} from "../../utils/hooks";
import {keyCodes} from "../../utils/helpers";
import "./ATextInput.scss";

const chevronDown =
  "M15.787 4.837a.686.686 0 000-.994.744.744 0 00-1.029 0L8 10.376 1.24 3.843a.744.744 0 00-1.028 0 .69.69 0 000 .994L8 12.364l7.787-7.527z";
const chevronUp =
  "M.213 11.163a.686.686 0 000 .995.744.744 0 001.029 0L8 5.624l6.759 6.534a.744.744 0 001.028 0 .69.69 0 000-.995L8 3.636.213 11.163z";

let textInputCounter = 0;

const ATextInput = forwardRef(
  (
    {
      appendIcon,
      autoComplete,
      autoFocus,
      className: propsClassName,
      clearable,
      disabled,
      hint,
      label,
      max,
      maxLength,
      min,
      name,
      onBlur,
      onChange,
      onClear,
      onClick,
      onClickAppend,
      onClickPrepend,
      onFocus,
      onKeyUp,
      onPaste,
      placeholder,
      prependIcon,
      readOnly,
      required,
      rules,
      spinner = true,
      step,
      type = "text",
      validateOnBlur,
      validationState = "default",
      value,
      ...rest
    },
    ref
  ) => {
    const textInputRef = useRef(null);
    const [textInputId] = useState(textInputCounter++);
    const [isFocused, setIsFocused] = useState(false);
    const [longClickTimeout, setLongClickTimeout] = useState(null);
    const [longClickInterval, setLongClickInterval] = useState(null);
    const [error, setError] = useState("");
    const [hasValue, setHasValue] = useState(!!value);
    const [workingValidationState, setWorkingValidationState] =
      useState(validationState);
    const combinedRef = useCombinedRefs(ref, textInputRef);
    useEffect(() => {
      if (
        !autoFocus ||
        typeof document === "undefined" ||
        !combinedRef ||
        !combinedRef.current ||
        document.activeElement ===
          combinedRef.current.querySelector(".a-text-input__input")
      )
        return;

      combinedRef.current.querySelector(".a-text-input__input").focus();
    }, [autoFocus, combinedRef]);
    const {register, unregister} = useContext(AFormContext);
    useEffect(() => {
      setWorkingValidationState(validationState);
    }, [validationState]);

    useEffect(() => {
      if (register) {
        register(`a-text-input_${textInputId}`, {
          reset,
          validate
        });
      }
    }, [validationState, value, rules]); // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
      if (unregister) {
        return () => {
          return unregister(`a-text-input_${textInputId}`);
        };
      }
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const prependProps = {
      className: "a-text-input__prepend-icon"
    };

    if (!disabled && !readOnly && onClickPrepend) {
      prependProps.className += " interactable";
      prependProps.onClick = onClickPrepend;
      prependProps.onKeyDown = (e) => {
        if (
          onClickPrepend &&
          [keyCodes.enter, keyCodes.space].includes(e.keyCode)
        ) {
          e.preventDefault();
          onClickPrepend(e);
        }
      };
      prependProps.tabIndex = 0;
      prependProps.role = "button";
    }

    const appendProps = {
      className: "a-text-input__append-icon",
      key: "a-text-input__append-icon"
    };

    if (!disabled && !readOnly && onClickAppend) {
      appendProps.className += " interactable";
      appendProps.onClick = onClickAppend;
      appendProps.onKeyDown = (e) => {
        if (
          onClickAppend &&
          [keyCodes.enter, keyCodes.space].includes(e.keyCode)
        ) {
          e.preventDefault();
          onClickAppend(e);
        }
      };
      appendProps.tabIndex = 0;
      appendProps.role = "button";
    }

    let appendContent = [];

    const isNumberType = type === "number";

    const incrementInput = (amount = step || 1) => {
      const input = combinedRef.current.querySelector(".a-text-input__input");
      const nativeInputValueGetter = Object.getOwnPropertyDescriptor(
        window.HTMLInputElement.prototype,
        "value"
      ).get;
      const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
        window.HTMLInputElement.prototype,
        "value"
      ).set;
      const currentValue = parseFloat(nativeInputValueGetter.call(input));
      let finalValue = 0;
      if (!isNaN(currentValue)) {
        if (
          typeof min !== "undefined" &&
          currentValue < min &&
          Math.abs(currentValue + amount) < Math.abs(currentValue)
        ) {
          finalValue = min;
        } else if (
          typeof max !== "undefined" &&
          currentValue > max &&
          Math.abs(currentValue + amount) < Math.abs(currentValue)
        ) {
          finalValue = max;
        } else {
          finalValue = Math.ceil(currentValue / amount) * amount;

          if (finalValue === currentValue) finalValue += amount;

          if (
            (typeof min !== "undefined" && finalValue < min) ||
            (typeof max !== "undefined" && finalValue > max)
          ) {
            finalValue = currentValue;
          }
        }
      } else {
        finalValue = amount;
      }

      nativeInputValueSetter.call(input, finalValue);
      const event = new Event("input", {bubbles: true});
      input.dispatchEvent(event);
    };

    if (isNumberType && !disabled && !readOnly && spinner) {
      appendContent.push(
        <div key="a-text-input__spinner" className="a-text-input__spinner">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            className="a-text-input__spinner__up"
            onMouseLeave={() => {
              clearTimeout(longClickTimeout);
              clearInterval(longClickInterval);
            }}
            onMouseUp={() => {
              clearTimeout(longClickTimeout);
              clearInterval(longClickInterval);
            }}
            onMouseDown={() => {
              setLongClickTimeout(
                setTimeout(() => {
                  setLongClickInterval(
                    setInterval(() => {
                      incrementInput();
                    }, 33)
                  );
                }, 300)
              );

              incrementInput();
            }}
          >
            <path d={chevronUp} />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            className="a-text-input__spinner__down"
            onMouseLeave={() => {
              clearTimeout(longClickTimeout);
              clearInterval(longClickInterval);
            }}
            onMouseUp={() => {
              clearTimeout(longClickTimeout);
              clearInterval(longClickInterval);
            }}
            onMouseDown={() => {
              setLongClickTimeout(
                setTimeout(() => {
                  setLongClickInterval(
                    setInterval(() => {
                      incrementInput(-1 * (step || 1));
                    }, 33)
                  );
                }, 300)
              );

              incrementInput(-1 * (step || 1));
            }}
          >
            <path d={chevronDown} />
          </svg>
        </div>
      );
    }

    if (appendIcon) {
      appendContent.push(<AIcon {...appendProps}>{appendIcon}</AIcon>);
    }

    const ruleKeys = rules ? rules.map((r) => r.key).filter((k) => !!k) : [];

    const validate = (testValue = value) => {
      if (
        rules ||
        required ||
        typeof min !== "undefined" ||
        typeof max !== "undefined"
      ) {
        let workingRules = [];
        if (rules) {
          workingRules = [...rules];
        }

        if (typeof max !== "undefined" && !ruleKeys.includes("max")) {
          workingRules = [
            {
              key: "max",
              test: (v) =>
                v <= max ||
                `${label ? label + " has a m" : "M"}aximum value of ${max}`,
              level: "danger"
            },
            ...workingRules
          ];
        }

        if (typeof min !== "undefined" && !ruleKeys.includes("min")) {
          workingRules = [
            {
              key: "min",
              test: (v) =>
                v >= min ||
                `${label ? label + " has a m" : "M"}inimum value of ${min}`,
              level: "danger"
            },
            ...workingRules
          ];
        }

        if (required && !ruleKeys.includes("required")) {
          workingRules = [
            {
              key: "required",
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
      setHasValue(false);
    };

    const inputBaseProps = {
      ...rest,
      ref: combinedRef,
      className: "a-text-input",
      clearable: hasValue,
      error,
      hint,
      label,
      required,
      labelFor: `a-text-input_${textInputId}`,
      disabled,
      focused: isFocused,
      append: appendContent,
      prepend: prependIcon && <AIcon {...prependProps}>{prependIcon}</AIcon>,
      readOnly,
      validationState: workingValidationState,
      onClear: () => {
        const e = combinedRef.current.querySelector(".a-text-input__input");
        const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
          window.HTMLInputElement.prototype,
          "value"
        ).set;
        nativeInputValueSetter.call(e, "");
        const event = new Event("input", {bubbles: true});
        e.dispatchEvent(event);
        reset();
        onClear && onClear(e);
      }
    };

    if (isNumberType) {
      inputBaseProps.className += " a-text-input--type-number";
    }

    if (propsClassName) {
      inputBaseProps.className += ` ${propsClassName}`;
    }

    const inputProps = {
      autoComplete,
      className: "a-text-input__input",
      disabled,
      id: `a-text-input_${textInputId}`,
      max,
      maxLength,
      min,
      name,
      onBlur: (e) => {
        setIsFocused(false);
        validate(e.target.value);
        onBlur && onBlur(e);
      },
      onChange: (e) => {
        !validateOnBlur && validate(e.target.value);
        onChange && onChange(e);

        setHasValue(!!value || !!e.target.value);
      },
      onClick,
      onFocus: (e) => {
        setIsFocused(true);
        onFocus && onFocus(e);
      },
      onKeyUp,
      onPaste,
      placeholder,
      readOnly,
      step,
      type,
      value
    };

    return (
      <AInputBase {...inputBaseProps}>
        <input {...inputProps} />
      </AInputBase>
    );
  }
);

const {anchorRef, ...infoTooltipProps} = ATooltipPropTypes;

ATextInput.propTypes = {
  /**
   * Appends an icon inside the text input. The value should be an [icon name](/components/icon).
   */
  appendIcon: PropTypes.string,
  /**
   * The input's `autocomplete` attribute.
   */
  autoComplete: PropTypes.string,
  /**
   * Toggles whether the input auto-focuses on mount.
   */
  autoFocus: PropTypes.bool,
  /**
   * Toggles whether to display a clearable icon.
   */
  clearable: PropTypes.bool,
  /**
   * Toggles the `disabled` state.
   */
  disabled: PropTypes.bool,
  /**
   * Sets the hint content.
   */
  hint: PropTypes.node,
  /**
   * Sets the label content.
   */
  label: PropTypes.node,
  /**
   * Adds an information tooltip next to the label
   */
  infoTooltip: PropTypes.string,
  /**
   * Overrides props of `ATooltip` used to display `infoTooltip`. See `ATooltip.propTypes`.
   */
  infoTooltipProps: PropTypes.shape(infoTooltipProps),
  /**
   * Sets the maximum value of a number type text input.
   */
  max: PropTypes.number,
  /**
   * Sets the maximum length of the text input value.
   */
  maxLength: PropTypes.number,
  /**
   * Sets the minimum value of a number type text input.
   */
  min: PropTypes.number,
  /**
   * The input's `name` attribute.
   */
  name: PropTypes.string,
  /**
   * Handles the `blur` event
   */
  onBlur: PropTypes.func,
  /**
   * Handles the `change` event.
   */
  onChange: PropTypes.func,
  /**
   * Handles the `clear` event (for supplemental handling).
   */
  onClear: PropTypes.func,
  /**
   * Handles the `click` event for the input.
   */
  onClick: PropTypes.func,
  /**
   * Handles the `click` event for an appended icon.
   */
  onClickAppend: PropTypes.func,
  /**
   * Handles the `click` event for a prepended icon.
   */
  onClickPrepend: PropTypes.func,
  /**
   * Handles the `focus` event.
   */
  onFocus: PropTypes.func,
  /**
   * Handles the `keyUp` event.
   */
  onKeyUp: PropTypes.func,
  /**
   * Handles the `paste` event.
   */
  onPaste: PropTypes.func,
  /**
   * The input's `placeholder` attribute.
   */
  placeholder: PropTypes.string,
  /**
   * Prepends an icon inside the text input. The value should be an [icon name](/components/icon).
   */
  prependIcon: PropTypes.string,
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
   * Toggles the spinner for number type inputs.
   */
  spinner: PropTypes.bool,
  /**
   * Sets the increment/decrement value for number type text inputs.
   */
  step: PropTypes.number,
  /**
   * Change the input type to take advantage of native behavior.
   */
  type: PropTypes.oneOf(["text", "password", "email", "number"]),
  /**
   * Delays validation until the `blur` event.
   */
  validateOnBlur: PropTypes.bool,
  /**
   * Applies a validation state.
   */
  validationState: PropTypes.oneOf(["default", "warning", "danger"]),
  /**
   * The input's `value` attribute.
   */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ATextInput.displayName = "ATextInput";

export default ATextInput;
