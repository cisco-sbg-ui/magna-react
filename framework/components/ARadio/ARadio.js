import PropTypes from "prop-types";
import React, {forwardRef} from "react";

import "./ARadio.scss";

const ARadio = forwardRef(
  (
    {
      checked = false,
      children,
      className: propsClassName,
      disabled = false,
      name,
      onClick,
      value,
      wrap,
      description,
      small,
      ...rest
    },
    ref
  ) => {
    let className = "a-radio";

    if (disabled) {
      className += " a-radio--disabled";
    }

    if (description) {
      className += " a-radio--hasDescription";
    }

    if (small) {
      className += " a-radio--small";
    }

    if (propsClassName) {
      className += ` ${propsClassName}`;
    }

    const content = (
      <>
        <input
          type="radio"
          name={name}
          className="a-radio__input"
          value={value}
          onChange={() => {}}
          disabled={disabled}
          onClick={onClick}
          aria-checked={checked}
          ref={(el) => el && (el.checked = checked)}
        />
        <span className="a-radio__box">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14">
            <circle className="a-radio__box__outer" r="7" cy="7" cx="7" />
            <circle className="a-radio__box__inner" r="3" cy="7" cx="7" />
            <circle className="a-radio__box__active" r="2.5" cy="7" cx="7" />
          </svg>
        </span>
        <span
          className={`a-radio__label${wrap ? " a-radio__label--wrap" : ""}`}
        >
          {children}
        </span>
      </>
    );

    return (
      <label {...rest} ref={ref} className={className}>
        {description ? (
          <>
            <div className="a-radio__label-container">{content}</div>
            <div className={`a-radio__description`}>{description}</div>
          </>
        ) : (
          content
        )}
      </label>
    );
  }
);

ARadio.defaultProps = {
  checked: false,
  disabled: false
};

ARadio.propTypes = {
  /**
   * Toggles the `checked` state.
   */
  checked: PropTypes.bool,
  /**
   * Adds a description below the label
   */
  description: PropTypes.string,
  /**
   * Toggles the `disabled` state.
   */
  disabled: PropTypes.bool,
  /**
   * The input's name.
   */
  name: PropTypes.string,
  /**
   * A callback for handling the click event.
   */
  onClick: PropTypes.func,
  /**
   * Applies the small variant
   */
  small: PropTypes.bool,
  /**
   * The input's value.
   */
  value: PropTypes.string,
  /**
   * Toggles wrapping of long text in the label.
   */
  wrap: PropTypes.bool
};

ARadio.displayName = "ARadio";

export default ARadio;
