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
    "M13.2072 5.20718L6.50008 11.9143L2.79297 8.20718L4.20718 6.79297L6.50008 9.08586L11.793 3.79297L13.2072 5.20718Z",
  indeterminate: "M13 9H3V7H13V9Z"
};

let checkboxCounter = 0;

const ACheckbox = forwardRef(
  (
    {
      id,
      checked = false,
      children,
      className: propsClassName,
      color,
      disabled = false,
      hint,
      indeterminate = false,
      onClick,
      required,
      rules,
      validationState,
      value,
      wrap,
      small,
      withLabel = true,
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

    let className = "a-checkbox",
      boxClassName = `${className}__box`;

    if (["danger", "warning"].includes(workingValidationState)) {
      className += ` a-checkbox--${workingValidationState}`;
    }

    if (disabled) {
      className += " a-checkbox--disabled";
    }

    if (!disabled) {
      className += " a-checkbox--enabled";
    }

    if (checked || indeterminate) {
      className += " a-checkbox--selected";
    }

    if (propsClassName) {
      className += ` ${propsClassName}`;
    }

    const boxSize = small ? "small" : "medium";

    const boxProps = {
      "aria-hidden": "true",
      className: `${boxClassName} a-${boxSize}-box`
    };

    if (!disabled && !["danger", "warning"].includes(workingValidationState)) {
      if (isStockColor(color)) {
        boxProps.className += ` ${color}--border-color`;
      } else {
        boxProps.style = {
          borderColor: color
        };
      }
    }

    let currentPath;
    const currentViewBox = "0 0 16 16";
    let empty = false;
    if (indeterminate) {
      currentPath = Icons.indeterminate;
    } else if (checked) {
      currentPath = Icons.checked;
    } else {
      empty = true;
      boxProps.className += " a-empty-box";
    }

    if (!empty && color) {
      if (isStockColor(color)) {
        boxProps.className += ` ${color}`;
      } else {
        boxProps.style = {backgroundColor: color};
      }
    }

    if (color && !disabled) {
      boxProps.className += ` a-checkbox--hasColor`;
    }

    const handleKeyDown = (e) => {
      if (["Enter", "Space"].includes(e.code)) {
        e.preventDefault();

        onClick && onClick(e);
      }
    };

    const checkboxContent = (
      <div className="a-checkbox__focuswrap">
        <input
          id={id}
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
            el && ((el.indeterminate = indeterminate) || (el.checked = checked))
          }
        />
        {empty ? (
          <div {...boxProps}></div>
        ) : (
          <span {...boxProps}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox={currentViewBox}>
              <path d={currentPath} />
            </svg>
          </span>
        )}
      </div>
    );

    const content =
      withLabel && children ? (
        <label className={`a-checkbox__wrap a-checkbox--${boxSize}`}>
          {checkboxContent}
          <span
            className={`a-checkbox__label${
              wrap ? " a-checkbox__label--wrap" : ""
            }`}
          >
            {children}
          </span>
        </label>
      ) : (
        <div
          className="a-checkbox__wrap"
          onClick={onClick}
          onKeyDown={handleKeyDown}
          aria-checked={checked}
          aria-labelledby={children}
          role="checkbox"
          tabIndex={0}
        >
          {checkboxContent}
        </div>
      );

    return (
      <div {...rest} ref={combinedRef} className={className}>
        {content}
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
   * ID to be passed to the checkbox <input>
   */
  id: PropTypes.string,
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
  wrap: PropTypes.bool,
  /**
   * Option for small size (default is medium)
   */
  small: PropTypes.bool,
  /**
   * Wrap the checkbox in the <label> tag. Defaults to true
   */
  withLabel: PropTypes.bool
};

ACheckbox.displayName = "ACheckbox";

export default ACheckbox;
