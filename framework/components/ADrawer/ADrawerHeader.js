import React, {forwardRef} from "react";
import PropTypes from "prop-types";

import ADivider from "../ADivider/ADivider";
import "./ADrawerHeader.scss";

/**
 * The area displayed at the top of the drawer.
 */
const ADrawerHeader = forwardRef(
  ({children, className: propsClassName, divider, ...rest}, ref) => {
    let className = "a-drawer__header";

    if (propsClassName) {
      className += ` ${propsClassName}`;
    }

    return (
      <>
        <div ref={ref} className={className} {...rest}>
          {children}
        </div>
        {divider && <ADivider />}
      </>
    );
  }
);

ADrawerHeader.propTypes = {
  /**
   * String representing class names to be passed to drawer content container.
   * If rendering the drawer as a modal, it will still be passed to the drawer
   * panel content element.
   */
  className: PropTypes.string,
  /**
   * Adds a divider below the header content
   */
  divider: PropTypes.bool
};

ADrawerHeader.displayName = "ADrawerHeader";

export default ADrawerHeader;
