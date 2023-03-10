import PropTypes from "prop-types";
import React, {forwardRef, useRef, useState} from "react";

import AHint from "../AHint";
import AIcon from "../AIcon";
import ATooltip from "../ATooltip";
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
    const infoIconRef = useRef(),
      [infoTooltipOpen, setInfoTooltipOpen] = useState(false);

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
    } else {
      hintElement = (
        <AHint className="a-field-base__hint" validationState={validationState}>
          {error || hint}
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
            className="a-field-base__label"
          >
            {label}
            {required && (
              <span className="a-field-base__label--required">*</span>
            )}
            {infoTooltip && (
              <>
                <AIcon
                  ref={infoIconRef}
                  onMouseEnter={() => setInfoTooltipOpen(true)}
                  onMouseLeave={() => setInfoTooltipOpen(false)}
                >
                  information
                </AIcon>
                <ATooltip
                  anchorRef={infoIconRef}
                  id={`${labelId}-tooltip`}
                  open={infoTooltipOpen}
                  placement="top"
                  pointer
                  {...infoTooltipProps}
                >
                  {infoTooltip}
                </ATooltip>
              </>
            )}
          </label>
        )}
        {children}
        {hintElement}
      </div>
    );
  }
);

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
   * Overrides props of `ATooltip` used to display `infoTooltip`
   */
  infoTooltipProps: PropTypes.instanceOf(ATooltip.propTypes),
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
