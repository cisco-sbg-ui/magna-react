import PropTypes from "prop-types";
import React, {forwardRef} from "react";

import AHintContainer from "../AHint/AHintContainer";
import AIcon from "../AIcon";
import ATriggerTooltip from "../ATriggerTooltip";
import "./AFieldBase.scss";

const AFieldBase = forwardRef(
  (
    {
      children,
      className: propsClassName,
      error,
      hints,
      label,
      labelHidden = false,
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
            className={`a-field-base__label ${labelHidden ? "d-none" : ""}`}
          >
            {label}
            {required && <div className="a-field-base__label--required">*</div>}
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
        <AHintContainer
          hints={hints}
          error={error}
          validationState={validationState}
        />
      </div>
    );
  }
);

AFieldBase.propTypes = {
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
  // infoTooltipProps: PropTypes.shape(infoTooltipProps),
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
