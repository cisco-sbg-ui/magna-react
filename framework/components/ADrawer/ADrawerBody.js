import React, {forwardRef} from "react";
import PropTypes from "prop-types";

import ADrawerContent from "./ADrawerContent";
import "./ADrawerBody.scss";

/**
 * The area for the drawer's main content.
 */
const ADrawerBody = forwardRef(
  ({children, className: propsClassName, withPadding = true, ...rest}, ref) => {
    let className = "a-drawer__body";

    if (propsClassName) {
      className += ` ${propsClassName}`;
    }

    return (
      <div ref={ref} className={className} {...rest}>
        {withPadding ? <ADrawerContent>{children}</ADrawerContent> : children}
      </div>
    );
  }
);

ADrawerBody.propTypes = {
  /**
   * String representing class names to be passed to drawer content container.
   * If rendering the drawer as a modal, it will still be passed to the drawer
   * panel content element.
   */
  className: PropTypes.string,
  /**
   * Wrap the component children in an ADrawerContent element
   */
  withPadding: PropTypes.bool
};

ADrawerBody.displayName = "ADrawerBody";

export default ADrawerBody;
