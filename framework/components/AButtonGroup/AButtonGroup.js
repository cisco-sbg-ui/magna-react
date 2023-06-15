import PropTypes from "prop-types";
import React, {forwardRef, useContext, useEffect, useState} from "react";

import AFieldBase from "../AFieldBase";
import {AFormContext} from "../AForm";
import AButtonGroupContext from "./AButtonGroupContext";
import "./AButtonGroup.scss";

let buttonGroupCounter = 0;

const AButtonGroup = forwardRef(
  (
    {
      children,
      className: propsClassName,
      hint,
      label,
      multiple = false,
      onChange,
      required,
      rules,
      selectedValues,
      validationState = "default",
      small = false,
      medium = true,
      ...rest
    },
    ref
  ) => {
    const [buttonGroupId] = useState(buttonGroupCounter++);
    const [error, setError] = useState("");
    const [workingValidationState, setWorkingValidationState] =
      useState(validationState);

    const {register, unregister} = useContext(AFormContext);
    useEffect(() => {
      setWorkingValidationState(validationState);
    }, [validationState]);

    useEffect(() => {
      if (register) {
        register(`a-button-group_${buttonGroupId}`, {
          reset,
          validate
        });
      }
    }, [validationState, selectedValues, rules]); // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
      if (unregister) {
        return () => {
          return unregister(`a-button-group_${buttonGroupId}`);
        };
      }
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const validate = (testValue = selectedValues) => {
      if (rules || required) {
        let workingRules = [];
        if (rules) {
          workingRules = [...rules];
        }

        if (required) {
          workingRules = [
            {
              test: (v) =>
                v.length > 0 || `${label ? label + " is r" : "R"}equired`,
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

    let className = "a-button-group";

    if (propsClassName) {
      className += ` ${propsClassName}`;
    }

    if (small) {
      className += " a-button-group--small";
    } else if (medium) {
      className += " a-button-group--medium";
    }

    const buttonGroupContext = {
      selectedValues,
      toggleValue: (toggledValue) => {
        let newSelectedValues = selectedValues.includes(toggledValue)
          ? selectedValues.filter((x) => x !== toggledValue)
          : multiple
          ? selectedValues.concat([toggledValue])
          : [toggledValue];
        validate(newSelectedValues);
        onChange && onChange(toggledValue, newSelectedValues);
      }
    };

    return (
      <AFieldBase
        {...rest}
        ref={ref}
        className={className}
        label={label}
        error={error}
        hint={hint}
        validationState={workingValidationState}
      >
        <div className="a-button-group__wrapper">
          <AButtonGroupContext.Provider value={buttonGroupContext}>
            {children}
          </AButtonGroupContext.Provider>
        </div>
      </AFieldBase>
    );
  }
);

AButtonGroup.propTypes = {
  /**
   * Sets the hint content.
   */
  hint: PropTypes.node,
  /**
   * Sets the label content.
   */
  label: PropTypes.node,
  /**
   * Toggles whether multiple buttons can be selected.
   */
  multiple: PropTypes.bool,
  /**
   * Handles the event when button selection has changed.
   * @param {String} targetValue The toggled button's value.
   * @param {Array} allSelectedValues An array of all selected button values.
   */
  onChange: PropTypes.func,
  /**
   * Sets an array of selected values.
   */
  selectedValues: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.arrayOf(PropTypes.number)
  ]),
  /**
   * Applies a validation state.
   */
  validationState: PropTypes.oneOf(["default", "warning", "danger"]),
  /** Magnetic small sizing */
  small: PropTypes.bool,
  /** Magnetic medium sizing */
  medium: PropTypes.bool
};

AButtonGroup.displayName = "AButtonGroup";

export default AButtonGroup;
