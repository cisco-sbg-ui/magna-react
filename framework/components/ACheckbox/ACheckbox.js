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
    "M 2.9999998,0 C 1.3380015,0 0,1.3380016 0,3 v 9 c 0,1.661998 1.3380015,3 2.9999998,3 H 12 c 1.661997,0 3,-1.338002 3,-3 V 3 C 15,1.3380016 13.661997,0 12,0 Z M 10.344726,4.3447266 11.405273,5.4052734 6.3749998,10.435546 3.5947265,7.6552732 4.6552731,6.5947266 6.3749998,8.3144535 Z",
  unchecked:
    "M 2.9093777,0 C 1.3101651,0 0,1.3101651 0,2.9093777 v 8.7281333 c 0,1.599213 1.3101651,2.909377 2.9093777,2.909377 h 8.7281333 c 1.599213,0 2.909377,-1.310164 2.909377,-2.909377 V 2.9093777 C 14.546888,1.3101651 13.236724,0 11.637511,0 Z m 0,1.4546888 h 8.7281333 c 0.818477,0 1.454689,0.636211 1.454689,1.4546889 v 8.7281333 c 0,0.818477 -0.636212,1.454689 -1.454689,1.454689 H 2.9093777 c -0.8184779,0 -1.4546889,-0.636212 -1.4546889,-1.454689 V 2.9093777 c 0,-0.8184779 0.636211,-1.4546889 1.4546889,-1.4546889 z",
  indeterminate:
    "M 3,0 C 1.3380017,0 0,1.3380017 0,3 v 9 c 0,1.661999 1.3380017,3 3,3 h 9 c 1.661999,0 3,-1.338001 3,-3 V 3 C 15,1.3380017 13.661999,0 12,0 Z m 0.75,6.75 h 7.5 v 1.5 h -7.5 z"
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
      boxClassName = `${className} a-checkbox__box `;

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
        boxProps.className += ` ${color}--text`;
      } else {
        boxProps.style = {
          fill: color,
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

    const handleKeyDown = (e) => {
      if (["Enter", "Space"].includes(e.code)) {
        e.preventDefault();
      }

      onClick && onClick(e);
    };

    const checkboxContent = (
      <>
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
        <span {...boxProps}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15">
            <path d={currentPath} />
          </svg>
        </span>
      </>
    );

    const content =
      withLabel && children ? (
        <label className="a-checkbox__wrap">
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
