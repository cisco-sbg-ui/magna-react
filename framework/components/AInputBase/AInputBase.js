import PropTypes from "prop-types";
import React, {forwardRef} from "react";

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
      hint,
      surfaceRef,
      label,
      labelFor,
      labelId,
      onClear,
      onClickLabel,
      prepend,
      readOnly,
      validationState = "default",
      ...rest
    },
    ref
  ) => {
    let className = "a-input-base";
    if (prepend) {
      className += " a-input-base--prepend";
    }

    if (append) {
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
        onClickLabel={onClickLabel}
        hint={hint}
        validationState={validationState}>
        <div ref={surfaceRef} className="a-input-base__surface">
          {prepend && <div className="a-input-base__prepend">{prepend}</div>}
          <div className="a-input-base__control">{children}</div>
          {(append || clearable) && (
            <div className="a-input-base__append">
              {clearable && !readOnly && !disabled && (
                <AIcon
                  tabIndex={0}
                  role="button"
                  className="a-input-base__clear"
                  size={10}
                  onClick={onClear}
                  onKeyDown={(e) => {
                    if ([keyCodes.enter, keyCodes.space].includes(e.keyCode)) {
                      e.preventDefault();
                      onClear(e);
                    }
                  }}>
                  close
                </AIcon>
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
   * Sets the hint content.
   */
  hint: PropTypes.node,
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
  validationState: PropTypes.oneOf(["default", "warning", "danger"])
};

AInputBase.displayName = "AInputBase";

export default AInputBase;
