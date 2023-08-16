import React, {forwardRef} from "react";
import PropTypes from "prop-types";

import ADivider from "../ADivider/ADivider";
import ADrawerContent from "./ADrawerContent";
import "./ADrawerFooter.scss";

/**
 * The area displayed at the bottom of the drawer.
 */
const ADrawerFooter = forwardRef(
  ({children, className: propsClassName, divider, ...rest}, ref) => {
    let className = "a-drawer__footer";

    if (propsClassName) {
      className += ` ${propsClassName}`;
    }

    if (divider) {
      className += ` a-drawer__footer--hasDivider`;
    }

    return (
      <div {...rest} ref={ref} className={className}>
        {divider && <ADivider />}
        <ADrawerContent>{children}</ADrawerContent>
      </div>
    );
  }
);

ADrawerFooter.propTypes = {
  /**
   * String representing class names to be passed to drawer content container.
   * If rendering the drawer as a modal, it will still be passed to the drawer
   * panel content element.
   */
  className: PropTypes.string,
  /**
   * Replace the default box shadow with an ADivider above the footer
   */
  divider: PropTypes.bool
};

ADrawerFooter.displayName = "ADrawerFooter";

export default ADrawerFooter;
