import PropTypes from "prop-types";
import React, {
  forwardRef,
  useContext,
  useEffect,
  useRef,
  useState
} from "react";

import {AFormContext} from "../AForm";
import AHint from "../AHint";
import {isStockColor, isValidColor} from "../../utils/helpers";
import {useCombinedRefs} from "../../utils/hooks";
import "./ACheckbox.scss";

const Icons = {
  checked:
    "M2.25 0C1.051-.01.029.966 0 2.25v10.5c0 .597.237 1.17.66 1.592l.035.035.186.158.039.03c.386.282.852.434 1.33.433h1.91l8.588.002a2.266 2.266 0 002.25-2.256V3.625L15 2.254A2.268 2.268 0 0012.744 0zm9.906 3.81h.008c.257-.004.505.082.705.243l.94.82-.99 1.041-6.423 6.736-3.5-3.502a1.7 1.7 0 01-.36-.927 1.12 1.12 0 01.343-.73 1.165 1.165 0 011.66.013L6.377 9.36l4.883-5.18c.33-.275.63-.366.896-.37z",
  unchecked:
    "M2.256 0A2.245 2.245 0 000 2.254V12.75A2.22 2.22 0 002.256 15h10.492C13.992 15 15 13.96 15 12.75V2.254A2.245 2.245 0 0012.744 0zm1.26 2.531h7.968c.568 0 .985.417.985.985v7.968a.956.956 0 01-.985.985H3.516a.956.956 0 01-.985-.985V3.516c0-.568.417-.985.985-.985z",
  indeterminate:
    "M2.254 0A2.268 2.268 0 000 2.254v10.49A2.268 2.268 0 002.254 15h10.49A2.267 2.267 0 0015 12.744V7.693l-2.348-.104a1.23 1.23 0 01-.37.858c-.241.209-.534.395-.892.41H3.828c-.447-.04-.74-.202-.942-.406l-.002-.002-.003-.003a1.14 1.14 0 01-.35-.855V7.59c0-.335.133-.653.37-.89v-.002c.23-.23.539-.37.895-.37h7.591c.36 0 .7.192.895.37.229.207.375.536.37.892L15 7.693v-5.44A2.268 2.268 0 0012.744 0z"
};

let checkboxCounter = 0;

const ACheckbox = forwardRef(
  (
    {
      checked = false,
      children,
      className: propsClassName,
      color = "#049fd9",
      disabled = false,
      hint,
      indeterminate = false,
      onClick,
      required,
      rules,
      validationState,
      value,
      wrap,
      ...rest
    },
    ref
  ) => {
    const checkboxRef = useRef(null);
    const combinedRef = useCombinedRefs(ref, checkboxRef);
    const [checkboxId] = useState(checkboxCounter++);
    const [error, setError] = useState("");
    const [workingValidationState, setWorkingValidationState] =
      useState(validationState);

    const {register, unregister} = useContext(AFormContext);
    useEffect(() => {
      setWorkingValidationState(validationState);
    }, [validationState]);

    useEffect(() => {
      if (register) {
        register(`a-checkbox_${checkboxId}`, {
          reset,
          validate
        });
      }
    }, [validationState, checked, value, rules]); // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
      if (unregister) {
        return () => {
          return unregister(`a-checkbox_${checkboxId}`);
        };
      }
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const validate = (testValue = checked) => {
      if (rules || required) {
        let workingRules = [];
        if (rules) {
          workingRules = [...rules];
        }

        if (required) {
          workingRules = [
            {
              test: (v) => !!v || "Required",
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

    let className = "a-checkbox";

    if (["danger", "warning"].includes(workingValidationState)) {
      className += ` a-checkbox--${workingValidationState}`;
    }

    if (disabled) {
      className += " a-checkbox--disabled";
    }

    if (propsClassName) {
      className += ` ${propsClassName}`;
    }

    const boxProps = {
      "aria-hidden": "true",
      className: "a-checkbox__box"
    };

    if (!disabled && !["danger", "warning"].includes(workingValidationState)) {
      if (isStockColor(color)) {
        boxProps.className += ` ${color}--text`;
      } else {
        boxProps.style = {
          color
        };
      }
    }

    let currentPath = Icons.unchecked;
    if (indeterminate) {
      currentPath = Icons.indeterminate;
    } else if (checked) {
      currentPath = Icons.checked;
    }

    return (
      <div {...rest} ref={combinedRef} className={className}>
        <label className="a-checkbox__wrap">
          <input
            type="checkbox"
            className="a-checkbox__input"
            value={value}
            aria-checked={indeterminate ? "mixed" : checked}
            checked={checked}
            aria-disabled={disabled}
            disabled={disabled}
            onChange={() => {}}
            onClick={(e) => {
              validate(e.target.checked);
              onClick && onClick(e);
            }}
            ref={(el) =>
              el &&
              ((el.indeterminate = indeterminate) || (el.checked = checked))
            }
          />
          <span {...boxProps}>
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15">
              <path d={currentPath} />
            </svg>
          </span>
          <span
            className={`a-checkbox__label${
              wrap ? " a-checkbox__label--wrap" : ""
            }`}>
            {children}
          </span>
        </label>
        {(error || hint) && (
          <AHint validationState={workingValidationState}>
            {error || hint}
          </AHint>
        )}
      </div>
    );
  }
);

ACheckbox.propTypes = {
  /**
   * Toggles the `checked` state.
   */
  checked: PropTypes.bool,
  /**
   * Specify the checkbox color. Accepts any stock color or CSS color value. The default value is cisco-blue base.
   */
  color: isValidColor,
  /**
   * Toggles the `disabled` state.
   */
  disabled: PropTypes.bool,
  /**
   * Sets the hint content.
   */
  hint: PropTypes.node,
  /**
   * Toggles the `indeterminate` state.
   */
  indeterminate: PropTypes.bool,
  /**
   * A callback for handling the click event.
   */
  onClick: PropTypes.func,
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
   * The input's value.
   */
  value: PropTypes.string,
  /**
   * Toggles wrapping of long text in the label.
   */
  wrap: PropTypes.bool
};

ACheckbox.displayName = "ACheckbox";

export default ACheckbox;
