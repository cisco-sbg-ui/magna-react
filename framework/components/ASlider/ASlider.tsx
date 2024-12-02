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
import type {ASliderProps, ASliderRules, ASliderValidationState} from "./types";

//This appears to help the handler stay within the bounds of the slider.
const floatSafeRemainder = (val: number, step: number) => {
  const valDecCount = (val.toString().split(".")[1] || "").length;
  const stepDecCount = (step.toString().split(".")[1] || "").length;
  const decCount = valDecCount > stepDecCount ? valDecCount : stepDecCount;
  const valInt = parseInt(val.toFixed(decCount).replace(".", ""));
  const stepInt = parseInt(step.toFixed(decCount).replace(".", ""));
  return (valInt % stepInt) / Math.pow(10, decCount);
};

let sliderCounter = 0;

const ASlider = forwardRef<HTMLDivElement, ASliderProps>(
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
      value = 0,
      ...rest
    },
    ref
  ) => {
    const sliderRef = useRef<HTMLDivElement>(null);
    //TODO update when combinedRefs is typed
    const combinedRef: any = useCombinedRefs(ref, sliderRef);
    const [sliderId] = useState(sliderCounter++);
    const {appRef} = useContext(AAppContext);
    const [offset1, setOffset1] = useState(0);
    const [isDown1, setIsDown1] = useState(false);
    const [offset2, setOffset2] = useState(0);
    const [isDown2, setIsDown2] = useState(false);
    const [error, setError] = useState<string>("");
    const [workingValidationState, setWorkingValidationState] =
      useState<ASliderValidationState>(validationState);

    //@ts-expect-error TODO convert once AFormContext is typed
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

    const roundToStep = (val: number) => {
      const realStep = (step * 100) / (max - min);
      const resto = floatSafeRemainder(val, realStep);
      if (resto <= realStep / 2) {
        return val - resto;
      }

      return val + realStep - resto;
    };

    const handleChange = (thumb1Pos: number | null, thumb2Pos: number) => {
      const splitStep = step.toString().split(".");
      const precision = splitStep.length > 1 ? parseInt(splitStep[1]) : 0;

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
      (e: MouseEvent | TouchEvent) => {
        if (disabled) return;
        e.preventDefault();
        if (isDown1) {
          const sliderCoords = getRoundedBoundedClientRect(combinedRef.current);
          if (!sliderCoords) {
            return;
          }

          const clientX: number =
            (e as MouseEvent).clientX || (e as TouchEvent).touches[0].clientX;

          const position = Math.min(
            Math.max(0, clientX + offset1),
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
      (e: MouseEvent | TouchEvent) => {
        if (disabled) return;
        e.preventDefault();
        if (isDown2) {
          const sliderCoords = getRoundedBoundedClientRect(combinedRef.current);
          if (!sliderCoords) {
            return;
          }

          const clientX: number =
            (e as MouseEvent).clientX || (e as TouchEvent).touches[0].clientX;

          const position = Math.min(
            Math.max(0, clientX + offset2),
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
      if (!appRefcurrent) {
        return;
      }
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
        let workingRules: ASliderRules[] = [];
        if (rules) {
          workingRules = [...rules];
        }

        if (required) {
          workingRules = [
            {
              test: (v) => (v ? "" : "Required"),
              level: "danger"
            },
            ...workingRules
          ];
        }

        setWorkingValidationState("default");
        setError("");

        for (let i = 0; i < workingRules.length; i++) {
          const rule: ASliderRules = workingRules[i];
          if (rule && rule.test) {
            const error = rule.test(testValue);
            const level: ASliderValidationState = rule.level || "danger";
            if (error) {
              setError(error);
              setWorkingValidationState(level);
              return {
                message: error,
                level: rule.level || "danger"
              };
            }
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

    const tickItems =
      ticks &&
      ticks.map((x, i) => {
        const style: React.CSSProperties = {};
        const num = typeof x === "number" ? x : parseInt(x);
        if (!isNaN(num)) {
          const width = (ticks[i + 1] as number) - num;
          style.width = `${width}px`;
        } else {
          style.width = "0";
        }

        return (
          <div style={style} key={i} className="a-slider__tick-label">
            <span className={`a-slider__tick-mark`} />
            <span>{x}</span>
          </div>
        );
      });

    return (
      <AFieldBase
        {...rest}
        ref={combinedRef}
        className={className}
        label={label}
        error={error}
        hints={hints}
        validationState={workingValidationState}>
        <div className="a-slider__control">
          <div className="a-slider__track">
            {thumb1Position !== null && (
              <div
                className="a-slider__track--low"
                style={{
                  left: 0,
                  width: Math.min(thumb1Position, thumb2Position) + "%"
                }}></div>
            )}
            <div
              className="a-slider__selection"
              style={{
                left: Math.min(thumb1Position || 0, thumb2Position) + "%",
                width: Math.abs((thumb1Position || 0) - thumb2Position) + "%"
              }}></div>
            <div
              className="a-slider__track--high"
              style={{
                left: Math.max(thumb1Position || 0, thumb2Position) + "%",
                right: 0
              }}></div>
          </div>
          <div className="a-slider__tick">{tickItems}</div>
          <div className="a-slider__handles">
            {thumb1Position !== null && (
              <div
                className="a-slider__handle a-slider__handle--min"
                role="slider"
                aria-valuemin={min}
                aria-valuemax={max}
                aria-valuenow={Array.isArray(value) ? value[0] : value}
                aria-readonly={disabled}
                tabIndex={0}
                style={{left: thumb1Position + "%"}}
                onMouseDown={(e: React.MouseEvent<HTMLDivElement>) => {
                  if (disabled) return;
                  const target = e.target as HTMLDivElement;
                  setIsDown1(true);
                  setOffset1(target.offsetLeft - e.clientX);
                }}
                onTouchStart={(e: React.TouchEvent<HTMLDivElement>) => {
                  if (disabled) return;
                  const target = e.target as HTMLDivElement;
                  setIsDown1(true);
                  setOffset1(target.offsetLeft - e.touches[0].clientX);
                }}
                onKeyDown={(e: React.KeyboardEvent<HTMLDivElement>) => {
                  if (disabled) return;
                  //must be code over key for "Space"
                  if (["ArrowRight", "ArrowUp"].includes(e.key)) {
                    e.preventDefault();
                    // Increases slider value one step.
                    handleChange(
                      thumb1Position + (step * 100) / (max - min),
                      thumb2Position
                    );
                    return;
                  }

                  if (["ArrowLeft", "ArrowDown"].includes(e.key)) {
                    e.preventDefault();
                    // Decreases slider value one step.
                    handleChange(
                      thumb1Position - (step * 100) / (max - min),
                      thumb2Position
                    );
                    return;
                  }

                  if (e.key === keyCodes.pageup) {
                    e.preventDefault();
                    // Increase slider 10 steps.
                    handleChange(
                      thumb1Position + (step * 1000) / (max - min),
                      thumb2Position
                    );
                    return;
                  }

                  if (e.key === keyCodes.pagedown) {
                    e.preventDefault();
                    // Decrease slider 10 steps.
                    handleChange(
                      thumb1Position - (step * 1000) / (max - min),
                      thumb2Position
                    );
                    return;
                  }

                  if (e.key === keyCodes.home) {
                    e.preventDefault();
                    // Decrease slider to minimum.
                    handleChange(0, thumb2Position);
                    return;
                  }

                  if (e.key === keyCodes.end) {
                    e.preventDefault();
                    // Increase slider to maximum.
                    handleChange(100, thumb2Position);
                    return;
                  }
                }}></div>
            )}
            <div
              className="a-slider__handle a-slider__handle--max"
              role="slider"
              aria-valuemin={min}
              aria-valuemax={max}
              aria-valuenow={Array.isArray(value) ? value[1] : value}
              aria-readonly={disabled}
              tabIndex={0}
              style={{left: thumb2Position + "%"}}
              onMouseDown={(e: React.MouseEvent<HTMLDivElement>) => {
                if (disabled) return;
                const target = e.target as HTMLDivElement;
                setIsDown2(true);
                setOffset2(target.offsetLeft - e.clientX);
              }}
              onTouchStart={(e: React.TouchEvent<HTMLDivElement>) => {
                if (disabled) return;
                const target = e.target as HTMLDivElement;
                setIsDown2(true);
                setOffset2(target.offsetLeft - e.touches[0].clientX);
              }}
              onKeyDown={(e: React.KeyboardEvent<HTMLDivElement>) => {
                if (disabled) return;
                if (["ArrowRight", "ArrowUp"].includes(e.key)) {
                  e.preventDefault();
                  // Increases slider value one step.
                  handleChange(
                    thumb1Position,
                    thumb2Position + (step * 100) / (max - min)
                  );
                  return;
                }

                if (["ArrowLeft", "ArrowDown"].includes(e.key)) {
                  e.preventDefault();
                  // Decreases slider value one step.
                  handleChange(
                    thumb1Position,
                    thumb2Position - (step * 100) / (max - min)
                  );
                  return;
                }

                if (e.key === keyCodes.pageup) {
                  e.preventDefault();
                  // Increase slider 10 steps.
                  handleChange(
                    thumb1Position,
                    thumb2Position + (step * 1000) / (max - min)
                  );
                  return;
                }

                if (e.key === keyCodes.pagedown) {
                  e.preventDefault();
                  // Decrease slider 10 steps.
                  handleChange(
                    thumb1Position,
                    thumb2Position - (step * 1000) / (max - min)
                  );
                  return;
                }

                if (e.key === keyCodes.home) {
                  e.preventDefault();
                  // Decrease slider to minimum.
                  handleChange(thumb1Position, 0);
                  return;
                }

                if (e.key === keyCodes.end) {
                  e.preventDefault();
                  // Increase slider to maximum.
                  handleChange(thumb1Position, 100);
                  return;
                }
              }}></div>
          </div>
        </div>
      </AFieldBase>
    );
  }
);

ASlider.displayName = "ASlider";

export default ASlider;
