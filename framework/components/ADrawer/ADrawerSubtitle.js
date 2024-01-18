import React, {forwardRef} from "react";
import PropTypes from "prop-types";

/**
 * The area displayed at the top of the drawer underneath the title.
 */
const ADrawerSubtitle = forwardRef(
  ({children, className: propsClassName, ...rest}, ref) => {
    let className = "a-drawer__subtitle";

    if (propsClassName) {
      className += ` ${propsClassName}`;
    }

    return (
      <div className={className} ref={ref} {...rest}>
        {children}
      </div>
    );
  }
);

ADrawerSubtitle.propTypes = {
  /**
   * String representing class names to be passed to drawer content container.
   * If rendering the drawer as a modal, it will still be passed to the drawer
   * panel content element.
   */
  className: PropTypes.string
};

ADrawerSubtitle.displayName = "ADrawerSubtitle";

export default ADrawerSubtitle;
