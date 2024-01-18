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
import {useCombinedRefs} from "../../utils/hooks";

let textareaCounter = 0;

const ATextarea = forwardRef(
  (
    {
      autoFocus,
      autoGrow,
      className: propsClassName,
      disabled,
      disableGrammarly,
      hint,
      label,
      maxLength,
      onBlur,
      onChange: propsOnChange,
      onFocus,
      onKeyUp,
      onPaste,
      placeholder,
      readOnly,
      required,
      rules,
      rows = 3,
      skipValidation = false,
      validateOnBlur,
      validationState = "default",
      value,
      ...rest
    },
    ref
  ) => {
    const textareaRef = useRef(null);
    const combinedRef = useCombinedRefs(ref, textareaRef);
    const [isFocused, setIsFocused] = useState(false);
    const [textareaId] = useState(textareaCounter++);
    const [error, setError] = useState("");
    const [workingValidationState, setWorkingValidationState] =
      useState(validationState);

    useEffect(() => {
      if (
        !autoFocus ||
        typeof document === "undefined" ||
        !combinedRef ||
        !combinedRef.current ||
        document.activeElement ===
          combinedRef.current.querySelector(".a-textarea__field")
      )
        return;

      combinedRef.current.querySelector(".a-textarea__field").focus();
    }, [autoFocus, combinedRef]);

    useEffect(() => {
      if (autoGrow) {
        calculateInputHeight();
      } else {
        const input =
          combinedRef.current &&
          combinedRef.current.querySelector(".a-textarea__field");
        if (!input) return;

        input.style.height = "auto";
      }
    }, [autoGrow]); // eslint-disable-line react-hooks/exhaustive-deps

    const {register, unregister} = useContext(AFormContext);
    useEffect(() => {
      setWorkingValidationState(validationState);
    }, [validationState]);

    useEffect(() => {
      if (register) {
        register(`a-textarea_${textareaId}`, {
          reset,
          validate
        });
      }
    }, [validationState, value, rules]); // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
      if (unregister) {
        return () => {
          return unregister(`a-textarea_${textareaId}`);
        };
      }
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const calculateInputHeight = () => {
      const input =
        combinedRef.current &&
        combinedRef.current.querySelector(".a-textarea__field");
      if (!input) return;

      input.style.height = "0";
      const height = input.scrollHeight;
      const minHeight = rows * 18.4; /* <- row height */
      input.style.height = Math.max(minHeight, height) + "px";
    };

    const ruleKeys = rules ? rules.map((r) => r.key) : [];

    const validate = (testValue = value) => {
      if (skipValidation) {
        return;
      }
      if (rules || required) {
        let workingRules = [];
        if (rules) {
          workingRules = [...rules];
        }

        if (required && !ruleKeys.includes("required")) {
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

    const inputBaseProps = {
      ...rest,
      ref: combinedRef,
      className: "a-textarea",
      focused: isFocused,
      error,
      hint,
      label,
      labelFor: `a-textarea__field_${textareaId}`,
      disabled,
      readOnly,
      validationState: workingValidationState,
      required
    };

    if (autoGrow) {
      inputBaseProps.className += " a-textarea--auto-grow";
    }

    if (propsClassName) {
      inputBaseProps.className += ` ${propsClassName}`;
    }

    const fieldProps = {
      className: "a-textarea__field",
      id: `a-textarea__field_${textareaId}`,
      disabled,
      maxLength,
      placeholder,
      readOnly,
      rows,
      value,
      onBlur: (e) => {
        setIsFocused(false);
        validate(e.target.value);
        onBlur && onBlur(e);
      },
      onChange: (e) => {
        if (autoGrow) {
          calculateInputHeight();
        }

        !validateOnBlur && validate(e.target.value);
        propsOnChange && propsOnChange(e);
      },
      onFocus: (e) => {
        setIsFocused(true);
        onFocus && onFocus(e);
      },
      onKeyUp,
      onPaste
    };

    if (disableGrammarly) {
      fieldProps["data-gramm"] = false;
    }

    return (
      <AInputBase {...inputBaseProps}>
        <textarea {...fieldProps} />
      </AInputBase>
    );
  }
);

ATextarea.propTypes = {
  /**
   * Toggles whether the textarea auto-focuses on mount.
   */
  autoFocus: PropTypes.bool,
  /**
   * Toggles height resize behavior based on content length.
   */
  autoGrow: PropTypes.bool,
  /**
   * Toggles the disabled state.
   */
  disabled: PropTypes.bool,
  /**
   * Toggles whether to disable the Grammarly browser extension.
   */
  disableGrammarly: PropTypes.bool,
  /**
   * Sets the hint content.
   */
  hint: PropTypes.node,
  /**
   * Sets the label content.
   */
  label: PropTypes.node,
  /**
   * Sets the maximum length of the textarea value.
   */
  maxLength: PropTypes.number,
  /**
   * Handles the `blur` event
   */
  onBlur: PropTypes.func,
  /**
   * Handles the `change` event.
   */
  onChange: PropTypes.func,
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
   * Sets the textarea placeholder text.
   */
  placeholder: PropTypes.string,
  /**
   * Toggles the read-only state.
   */
  readOnly: PropTypes.bool,
  /**
   * Toggles a default rule for required values.
   */
  required: PropTypes.bool,
  /**
   * Sets the default number of rows for the textarea.
   */
  rows: PropTypes.number,
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
   * Sets the textarea value.
   */
  value: PropTypes.string,
  /**
   * By default the hint hides on error and becomes an AAlert if no
   * error message is specified. Disable to show both hint and error.
   * Default: false
   */
  hideHintOnError: PropTypes.bool
};

ATextarea.displayName = "ATextarea";

export default ATextarea;
