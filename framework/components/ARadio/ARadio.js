import PropTypes from "prop-types";
import React, {forwardRef} from "react";

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
      ...rest
    },
    ref
  ) => {
    let className = "a-radio";

    if (disabled) {
      className += " a-radio--disabled";
    }

    if (propsClassName) {
      className += ` ${propsClassName}`;
    }

    return (
      <label {...rest} ref={ref} className={className}>
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
