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
      hint,
      label,
      labelFor,
      labelId,
      onClickLabel,
      required,
      infoTooltip,
      infoTooltipProps = {},
      validationState = "default",
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

    return (
      <div {...rest} ref={ref} className={className}>
        {label && (
          // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/click-events-have-key-events
          <label
            id={labelId}
            htmlFor={labelFor}
            onClick={onClickLabel}
            className="a-field-base__label"
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
        {hint && (
          <AHint
            className="a-field-base__hint"
            validationState={validationState}
          >
            {hint}
          </AHint>
        )}
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
