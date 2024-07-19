import PropTypes from "prop-types";
import React, {
  forwardRef,
  useContext,
  useEffect,
  useRef,
  useState
} from "react";

import {AFormContext} from "../AForm";
import AHintContainer from "../AHint/AHintContainer";
import {useCombinedRefs} from "../../utils/hooks";
import "./ASwitch.scss";

let switchCounter = 0;

const ASwitch = forwardRef(
  (
    {
      checked = false,
      children,
      className: propsClassName,
      disabled = false,
      hints = [],
      onClick,
      required,
      rules,
      validationState,
      value,
      wrap,
      small,
      ariaLabel,
      ariaLabelledby,
      ...rest
    },
    ref
  ) => {
    const switchRef = useRef(null);
    const combinedRef = useCombinedRefs(ref, switchRef);
    const [switchId] = useState(switchCounter++);
    const [error, setError] = useState("");
    const [workingValidationState, setWorkingValidationState] =
      useState(validationState);

    const {register, unregister} = useContext(AFormContext);
    useEffect(() => {
      setWorkingValidationState(validationState);
    }, [validationState]);

    useEffect(() => {
      if (register) {
        register(`a-switch_${switchId}`, {
          reset,
          validate,
          disabled
        });
      }
    }, [validationState, checked, value, disabled, rules]); // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
      if (unregister) {
        return () => {
          return unregister(`a-switch_${switchId}`);
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

    let className = "a-switch";

    if (["danger", "warning"].includes(workingValidationState)) {
      className += ` a-checkbox--${workingValidationState}`;
    }

    if (disabled) {
      className += " a-switch--disabled";
    }

    if (propsClassName) {
      className += ` ${propsClassName}`;
    }

    if (small) {
      className += ` a-switch--small`;
    }

    const boxProps = {
      "aria-hidden": "true",
      className: "a-switch__box"
    };

    const handleKeyDown = (e) => {
      if (["Enter", "Space"].includes(e.code)) {
        e.preventDefault();

        validate(e.target.checked);
        onClick && onClick(e);
      }
    };

    return (
      <div {...rest} ref={combinedRef} className={className}>
        <label className="a-switch__wrap">
          <input
            tabIndex={0}
            type="checkbox"
            className="a-switch__input"
            value={value}
            checked={checked}
            aria-checked={checked}
            aria-label={ariaLabel || children}
            aria-labelledby={ariaLabelledby}
            aria-disabled={disabled}
            disabled={disabled}
            onChange={() => {}}
            onClick={(e) => {
              validate(e.target.checked);
              onClick && onClick(e);
            }}
            onKeyDown={handleKeyDown}
            role="switch"
            ref={(el) => el && (el.checked = checked)}
          />
          <span {...boxProps} />
          <span
            className={`a-switch__label${wrap ? " a-switch__label--wrap" : ""}`}
          >
            {children}
          </span>
        </label>
        <AHintContainer
          hints={hints}
          validationState={validationState}
          error={error}
        />
      </div>
    );
  }
);

ASwitch.propTypes = {
  /**
   * Toggles the `checked` state.
   */
  checked: PropTypes.bool,
  /**
   * Toggles the `disabled` state.
   */
  disabled: PropTypes.bool,
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
   * Small size variant
   */
  small: PropTypes.bool
};

ASwitch.displayName = "ASwitch";

export default ASwitch;
