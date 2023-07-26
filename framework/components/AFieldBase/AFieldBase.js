import PropTypes from "prop-types";
import React, {forwardRef} from "react";

import AHint from "../AHint";
import AIcon from "../AIcon";
import ATriggerTooltip from "../ATriggerTooltip";
import {ATooltipPropTypes} from "../ATooltip";
import "./AFieldBase.scss";

const AFieldBase = forwardRef(
  (
    {
      children,
      className: propsClassName,
      error,
      hint,
      hintUsesValidationState = true,
      label,
      labelHidden = false,
      labelFor,
      labelId,
      onClickLabel,
      required,
      infoTooltip,
      infoTooltipProps = {},
      validationState = "default",
      hideHintOnError = true,
      ...rest
    },
    ref
  ) => {
    let className = "a-field-base";

    if (validationState !== "default") {
      className += ` a-field-base--${validationState}`;
    }

    if (propsClassName) {
      className += ` ${propsClassName}`;
    }

    let hintElement;
    if (hint && error && !hideHintOnError) {
      hintElement = (
        <>
          <AHint className="a-field-base__hint">{hint}</AHint>
          <AHint
            className="a-field-base__hint"
            validationState={validationState}
          >
            {error}
          </AHint>
        </>
      );
    } else if (error) {
      hintElement = (
        <AHint className="a-field-base__hint" validationState={validationState}>
          {error}
        </AHint>
      );
    } else if (hint) {
      hintElement = (
        <AHint
          className="a-field-base__hint"
          validationState={hintUsesValidationState && validationState}
        >
          {hint}
        </AHint>
      );
    }

    return (
      <div {...rest} ref={ref} className={className}>
        {label && (
          // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/click-events-have-key-events
          <label
            id={labelId}
            htmlFor={labelFor}
            onClick={onClickLabel}
            className={`a-field-base__label ${labelHidden ? "d-none" : ""}`}
          >
            {label}
            {required && (
              <span className="a-field-base__label--required">*</span>
            )}
            {infoTooltip && (
              <ATriggerTooltip
                id={`${labelId}-tooltip`}
                placement="top"
                content={infoTooltip}
                pointer
                {...infoTooltipProps}
              >
                <AIcon>information</AIcon>
              </ATriggerTooltip>
            )}
          </label>
        )}
        {children}
        {hintElement}
      </div>
    );
  }
);

const {anchorRef, ...infoTooltipProps} = ATooltipPropTypes;

AFieldBase.propTypes = {
  /**
   * Sets the hint content.
   */
  hint: PropTypes.node,
  /**
   * Style the hint with the validation state. Default: true.
   */
  hintUsesValidationState: PropTypes.bool,
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
   * Adds required asterisk next to label
   */
  required: PropTypes.bool,
  /**
   * Adds an information tooltip next to the label
   */
  infoTooltip: PropTypes.string,
  /**
   * Overrides props of `ATooltip` used to display `infoTooltip`. See `ATooltip.propTypes`.
   */
  infoTooltipProps: PropTypes.shape(infoTooltipProps),
  /**
   * Handles the label's `click` event.
   */
  onClickLabel: PropTypes.func,
  /**
   * Applies a validation state.
   */
  validationState: PropTypes.oneOf(["default", "warning", "danger"])
};

AFieldBase.displayName = "AFieldBase";

export default AFieldBase;
