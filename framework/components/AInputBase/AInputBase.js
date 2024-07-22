import PropTypes from "prop-types";
import React, {forwardRef} from "react";

import AButton from "../AButton";
import AIcon from "../AIcon";
import AFieldBase from "../AFieldBase";
import {keyCodes} from "../../utils/helpers";
import "./AInputBase.scss";

const AInputBase = forwardRef(
  (
    {
      append,
      children,
      className: propsClassName,
      clearable,
      disabled,
      focused,
      hints,
      surfaceRef,
      label,
      labelHidden,
      labelFor,
      labelId,
      onClear,
      onClickLabel,
      prepend,
      readOnly,
      validationState = "default",
      large,
      small,
      ...rest
    },
    ref
  ) => {
    const showPrepend =
        (Array.isArray(prepend) && prepend.length) ||
        (!Array.isArray(prepend) && prepend),
      showAppend =
        (Array.isArray(append) && append.length) ||
        (!Array.isArray(append) && append);

    let className = "a-input-base";
    if (showPrepend) {
      className += " a-input-base--prepend";
    }

    if (showAppend) {
      className += " a-input-base--append";
    }

    if (clearable) {
      className += " a-input-base--clearable";
    }

    if (focused) {
      className += " a-input-base--focused";
    }

    if (disabled) {
      className += " a-input-base--disabled";
    }

    if (readOnly) {
      className += " a-input-base--readonly";
    }

    if (large) {
      className += " a-input-base--large";
    } else if (small) {
      className += " a-input-base--small";
    } else {
      className += " a-input-base--medium";
    }

    if (validationState !== "default") {
      className += ` a-input-base--${validationState}`;
    }

    if (propsClassName) {
      className += ` ${propsClassName}`;
    }

    return (
      <AFieldBase
        {...rest}
        ref={ref}
        className={className}
        label={label}
        labelId={labelId}
        labelFor={labelFor}
        labelHidden={labelHidden}
        onClickLabel={onClickLabel}
        hints={hints}
        validationState={validationState}
      >
        <div ref={surfaceRef} className="a-input-base__surface">
          {showPrepend && (
            <div className="a-input-base__prepend">{prepend}</div>
          )}
          <div className="a-input-base__control">{children}</div>
          {(showAppend || clearable) && (
            <div className="a-input-base__append">
              {clearable && !readOnly && (
                <AButton
                  tertiaryAlt
                  style={{padding: 0, height: "unset"}}
                  onClick={onClear}
                  onKeyDown={(e) => {
                    //must be code over key for "Space"
                    if ([keyCodes.enter, keyCodes.space].includes(e.code)) {
                      e.preventDefault();
                      onClear(e);
                    }
                  }}
                >
                  <AIcon
                    tabIndex={0}
                    role="button"
                    className="a-input-base__clear"
                    size={16}
                  >
                    x-circle
                  </AIcon>
                </AButton>
              )}
              {append}
            </div>
          )}
        </div>
      </AFieldBase>
    );
  }
);

AInputBase.propTypes = {
  /**
   * Append content to the control.
   */
  append: PropTypes.node,
  /**
   * Toggles whether the clear button is rendered.
   */
  clearable: PropTypes.bool,
  /**
   * Toggles the `disabled` state.
   */
  disabled: PropTypes.bool,
  /**
   * Toggles the `focused` state.
   */
  focused: PropTypes.bool,
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
   * Sets the label content.
   */
  label: PropTypes.node,
  /**
   * The label's `for` attribute.
   */
  labelFor: PropTypes.string,
  /**
   * The label's `id` attribute.
   */
  labelId: PropTypes.string,
  /**
   * Handles the `clear` event.
   */
  onClear: PropTypes.func,
  /**
   * Handles the label's `click` event.
   */
  onClickLabel: PropTypes.func,
  /**
   * Prepends content to the control.
   */
  prepend: PropTypes.node,
  /**
   * Toggles the `readOnly` state.
   */
  readOnly: PropTypes.bool,
  /**
   * Sets the `ref` of the surface element.
   */
  surfaceRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({current: PropTypes.any})
  ]),
  /**
   * Applies a validation state.
   */
  validationState: PropTypes.oneOf(["default", "warning", "danger"]),
  /**
   * Sets widget size to magnetic large
   */
  large: PropTypes.bool,
  /**
   * Sets widget size to magnetic small (default)
   */
  small: PropTypes.bool
};

AInputBase.displayName = "AInputBase";

export default AInputBase;
