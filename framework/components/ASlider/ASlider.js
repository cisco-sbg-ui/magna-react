import PropTypes from "prop-types";
import React, {
  forwardRef,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState
} from "react";

import AAppContext from "../AApp/AAppContext";
import {AFormContext} from "../AForm";
import AFieldBase from "../AFieldBase";

import {useCombinedRefs} from "../../utils/hooks";
import {getRoundedBoundedClientRect, keyCodes} from "../../utils/helpers";
import "./ASlider.scss";

const floatSafeRemainder = (val, step) => {
  var valDecCount = (val.toString().split(".")[1] || "").length;
  var stepDecCount = (step.toString().split(".")[1] || "").length;
  var decCount = valDecCount > stepDecCount ? valDecCount : stepDecCount;
  var valInt = parseInt(val.toFixed(decCount).replace(".", ""));
  var stepInt = parseInt(step.toFixed(decCount).replace(".", ""));
  return (valInt % stepInt) / Math.pow(10, decCount);
};

let sliderCounter = 0;

const ASlider = forwardRef(
  (
    {
      className: propsClassName,
      disabled,
      hints,
      label,
      min = 0,
      max = 100,
      onChange,
      required,
      rules,
      step = 1,
      ticks,
      validationState = "default",
      value,
      ...rest
    },
    ref
  ) => {
    const sliderRef = useRef(null);
    const combinedRef = useCombinedRefs(ref, sliderRef);
    const [sliderId] = useState(sliderCounter++);
    const {appRef} = useContext(AAppContext);
    const [offset1, setOffset1] = useState(0);
    const [isDown1, setIsDown1] = useState(false);
    const [offset2, setOffset2] = useState(0);
    const [isDown2, setIsDown2] = useState(false);
    const [error, setError] = useState("");
    const [workingValidationState, setWorkingValidationState] =
      useState(validationState);

    const {register, unregister} = useContext(AFormContext);
    useEffect(() => {
      setWorkingValidationState(validationState);
    }, [validationState]);

    useEffect(() => {
      if (register) {
        register(`a-slider_${sliderId}`, {
          reset,
          validate,
          disabled
        });
      }
    }, [validationState, value, disabled, rules]); // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
      if (unregister) {
        return () => {
          return unregister(`a-slider_${sliderId}`);
        };
      }
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const thumb1Position = Array.isArray(value)
      ? (value[0] * 100) / (max - min)
      : null;
    const thumb2Position = Array.isArray(value)
      ? (value[1] * 100) / (max - min)
      : (value * 100) / (max - min);

    const roundToStep = (val) => {
      const realStep = (step * 100) / (max - min);
      var resto = floatSafeRemainder(val, realStep);
      if (resto <= realStep / 2) {
        return val - resto;
      }

      return val + realStep - resto;
    };

    const handleChange = (thumb1Pos, thumb2Pos) => {
      const splitStep = step.toString().split(".");
      const precision = splitStep.length > 1 ? splitStep[1] : 0;

      if (onChange) {
        if (thumb1Pos !== null) {
          const newValue = [
            Math.min(
              max,
              Math.max(
                min,
                parseFloat(
                  (
                    ((max - min) * Math.min(thumb1Pos, thumb2Pos)) /
                    100
                  ).toFixed(precision)
                )
              )
            ),
            Math.min(
              max,
              Math.max(
                min,
                parseFloat(
                  (
                    ((max - min) * Math.max(thumb1Pos, thumb2Pos)) /
                    100
                  ).toFixed(precision)
                )
              )
            )
          ];

          validate(newValue);
          onChange(newValue);
          return;
        }

        const newValue = Math.max(
          min,
          Math.min(
            max,
            parseFloat((((max - min) * thumb2Pos) / 100).toFixed(precision))
          )
        );

        validate(newValue);
        onChange(newValue);
      }
    };

    const mouseUpHandler1 = useCallback(() => {
      if (disabled) return;
      setIsDown1(false);
    }, [setIsDown1, disabled]);
    const mouseMoveHandler1 = useCallback(
      (e) => {
        if (disabled) return;
        e.preventDefault();
        if (isDown1) {
          const sliderCoords = getRoundedBoundedClientRect(combinedRef.current);
          const position = Math.min(
            Math.max(0, (e.clientX || e.touches[0].clientX) + offset1),
            sliderCoords.width - 17
          );

          const adjustedPosition = roundToStep(
            (100 * position) / (sliderCoords.width - 17)
          );
          handleChange(adjustedPosition, thumb2Position);
        }
      },
      [isDown1, disabled, combinedRef, offset1, thumb2Position] // eslint-disable-line react-hooks/exhaustive-deps
    );

    const mouseUpHandler2 = useCallback(() => {
      if (disabled) return;
      setIsDown2(false);
    }, [setIsDown2, disabled]);
    const mouseMoveHandler2 = useCallback(
      (e) => {
        if (disabled) return;
        e.preventDefault();
        if (isDown2) {
          const sliderCoords = getRoundedBoundedClientRect(combinedRef.current);
          const position = Math.min(
            Math.max(0, (e.clientX || e.touches[0].clientX) + offset2),
            sliderCoords.width - 17
          );

          const adjustedPosition = roundToStep(
            (100 * position) / (sliderCoords.width - 17)
          );
          handleChange(thumb1Position, adjustedPosition);
        }
      },
      [isDown2, disabled, combinedRef, offset2, thumb1Position] // eslint-disable-line react-hooks/exhaustive-deps
    );

    useEffect(() => {
      const appRefcurrent = appRef.current;
      appRefcurrent.addEventListener("mouseup", mouseUpHandler1);
      appRefcurrent.addEventListener("mousemove", mouseMoveHandler1);
      appRefcurrent.addEventListener("touchend", mouseUpHandler1);
      appRefcurrent.addEventListener("touchmove", mouseMoveHandler1);
      appRefcurrent.addEventListener("mouseup", mouseUpHandler2);
      appRefcurrent.addEventListener("mousemove", mouseMoveHandler2);
      appRefcurrent.addEventListener("touchend", mouseUpHandler2);
      appRefcurrent.addEventListener("touchmove", mouseMoveHandler2);

      return () => {
        appRefcurrent.removeEventListener("mouseup", mouseUpHandler1);
        appRefcurrent.removeEventListener("mousemove", mouseMoveHandler1);
        appRefcurrent.removeEventListener("touchup", mouseUpHandler1);
        appRefcurrent.removeEventListener("touchmove", mouseMoveHandler1);
        appRefcurrent.removeEventListener("mouseup", mouseUpHandler2);
        appRefcurrent.removeEventListener("mousemove", mouseMoveHandler2);
        appRefcurrent.removeEventListener("touchup", mouseUpHandler2);
        appRefcurrent.removeEventListener("touchmove", mouseMoveHandler2);
      };
    }, [
      appRef,
      mouseUpHandler1,
      mouseMoveHandler1,
      mouseUpHandler2,
      mouseMoveHandler2
    ]);

    const validate = (testValue = value) => {
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

    let className = "a-slider";

    if (propsClassName) {
      className += ` ${propsClassName}`;
    }

    if (["danger", "warning"].includes(workingValidationState)) {
      className += ` a-slider--${workingValidationState}`;
    }

    if (disabled) {
      className += " a-slider--disabled";
    }

    return (
      <AFieldBase
        {...rest}
        ref={combinedRef}
        className={className}
        label={label}
        error={error}
        hints={hints}
        validationState={workingValidationState}
      >
        <div className="a-slider__control">
          <div className="a-slider__track">
            {thumb1Position !== null && (
              <div
                className="a-slider__track--low"
                style={{
                  left: 0,
                  width: Math.min(thumb1Position, thumb2Position) + "%"
                }}
              ></div>
            )}
            <div
              className="a-slider__selection"
              style={{
                left: Math.min(thumb1Position || 0, thumb2Position) + "%",
                width: Math.abs((thumb1Position || 0) - thumb2Position) + "%"
              }}
            ></div>
            <div
              className="a-slider__track--high"
              style={{
                left: Math.max(thumb1Position || 0, thumb2Position) + "%",
                right: 0
              }}
            ></div>
          </div>
          <div className="a-slider__tick">
            {ticks &&
              ticks.map((x, index) => (
                <div key={index} className="a-slider__tick-label">
                  <span>{x}</span>
                </div>
              ))}
          </div>
          <div className="a-slider__handles">
            {thumb1Position !== null && (
              <div
                className="a-slider__handle a-slider__handle--min"
                role="slider"
                aria-valuemin={min}
                aria-valuemax={max}
                aria-valuenow={value[0]}
                aria-readonly={disabled}
                tabIndex="0"
                style={{left: thumb1Position + "%"}}
                onMouseDown={(e) => {
                  if (disabled) return;
                  setIsDown1(true);
                  setOffset1(e.target.offsetLeft - e.clientX);
                }}
                onTouchStart={(e) => {
                  if (disabled) return;
                  setIsDown1(true);
                  setOffset1(e.target.offsetLeft - e.touches[0].clientX);
                }}
                onKeyDown={(e) => {
                  if (disabled) return;
                  if ([keyCodes.right, keyCodes.up].includes(e.keyCode)) {
                    e.preventDefault();
                    // Increases slider value one step.
                    handleChange(
                      thumb1Position + (step * 100) / (max - min),
                      thumb2Position
                    );
                    return;
                  }

                  if ([keyCodes.left, keyCodes.down].includes(e.keyCode)) {
                    e.preventDefault();
                    // Decreases slider value one step.
                    handleChange(
                      thumb1Position - (step * 100) / (max - min),
                      thumb2Position
                    );
                    return;
                  }

                  if (e.keyCode === keyCodes.pageup) {
                    e.preventDefault();
                    // Increase slider 10 steps.
                    handleChange(
                      thumb1Position + (step * 1000) / (max - min),
                      thumb2Position
                    );
                    return;
                  }

                  if (e.keyCode === keyCodes.pagedown) {
                    e.preventDefault();
                    // Decrease slider 10 steps.
                    handleChange(
                      thumb1Position - (step * 1000) / (max - min),
                      thumb2Position
                    );
                    return;
                  }

                  if (e.keyCode === keyCodes.home) {
                    e.preventDefault();
                    // Decrease slider to minimum.
                    handleChange(0, thumb2Position);
                    return;
                  }

                  if (e.keyCode === keyCodes.end) {
                    e.preventDefault();
                    // Increase slider to maximum.
                    handleChange(100, thumb2Position);
                    return;
                  }
                }}
              ></div>
            )}
            <div
              className="a-slider__handle a-slider__handle--max"
              role="slider"
              aria-valuemin={min}
              aria-valuemax={max}
              aria-valuenow={Array.isArray(value) ? value[1] : value}
              aria-readonly={disabled}
              tabIndex="0"
              style={{left: thumb2Position + "%"}}
              onMouseDown={(e) => {
                if (disabled) return;
                setIsDown2(true);
                setOffset2(e.target.offsetLeft - e.clientX);
              }}
              onTouchStart={(e) => {
                if (disabled) return;
                setIsDown2(true);
                setOffset2(e.target.offsetLeft - e.touches[0].clientX);
              }}
              onKeyDown={(e) => {
                if (disabled) return;
                if ([keyCodes.right, keyCodes.up].includes(e.keyCode)) {
                  e.preventDefault();
                  // Increases slider value one step.
                  handleChange(
                    thumb1Position,
                    thumb2Position + (step * 100) / (max - min)
                  );
                  return;
                }

                if ([keyCodes.left, keyCodes.down].includes(e.keyCode)) {
                  e.preventDefault();
                  // Decreases slider value one step.
                  handleChange(
                    thumb1Position,
                    thumb2Position - (step * 100) / (max - min)
                  );
                  return;
                }

                if (e.keyCode === keyCodes.pageup) {
                  e.preventDefault();
                  // Increase slider 10 steps.
                  handleChange(
                    thumb1Position,
                    thumb2Position + (step * 1000) / (max - min)
                  );
                  return;
                }

                if (e.keyCode === keyCodes.pagedown) {
                  e.preventDefault();
                  // Decrease slider 10 steps.
                  handleChange(
                    thumb1Position,
                    thumb2Position - (step * 1000) / (max - min)
                  );
                  return;
                }

                if (e.keyCode === keyCodes.home) {
                  e.preventDefault();
                  // Decrease slider to minimum.
                  handleChange(thumb1Position, 0);
                  return;
                }

                if (e.keyCode === keyCodes.end) {
                  e.preventDefault();
                  // Increase slider to maximum.
                  handleChange(thumb1Position, 100);
                  return;
                }
              }}
            ></div>
          </div>
        </div>
      </AFieldBase>
    );
  }
);

ASlider.propTypes = {
  /**
   * Toggles the disabled state.
   */
  disabled: PropTypes.bool,
  /**
   * Sets hint or multiple hints.
   */
  hints: PropTypes.arrayOf(
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
  /**
   * Sets the label content.
   */
  label: PropTypes.node,
  /**
   * Sets the minimum value.
   */
  min: PropTypes.number,
  /**
   * Sets the maximum value.
   */
  max: PropTypes.number,
  /**
   * Handles the `change` event.
   */
  onChange: PropTypes.func,
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
   * Sets the increment/decrement value.
   */
  step: PropTypes.number,
  /**
   * Sets an array of tick mark names.
   */
  ticks: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  ),
  /**
   * Applies a validation state.
   */
  validationState: PropTypes.oneOf(["default", "warning", "danger"]),
  /**
   * Sets the slider value(s).
   */
  value: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.number),
    PropTypes.number
  ])
};

ASlider.displayName = "ASlider";

export default ASlider;
