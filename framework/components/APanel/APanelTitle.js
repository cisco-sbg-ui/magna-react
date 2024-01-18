import PropTypes from "prop-types";
import React, {forwardRef} from "react";

const APanelTitle = forwardRef(
  ({children, className: propsClassName, small, ...rest}, ref) => {
    let className = "a-panel__title";

    if (small) {
      className += " a-panel__title--size-small";
    }

    if (propsClassName) {
      className += ` ${propsClassName}`;
    }

    return (
      <div {...rest} ref={ref} className={className}>
        {children}
      </div>
    );
  }
);

APanelTitle.propTypes = {
  /**
   * Toggles reduced text size.
   */
  small: PropTypes.bool
};

APanelTitle.displayName = "APanelTitle";

export default APanelTitle;
