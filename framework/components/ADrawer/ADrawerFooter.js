import React, {forwardRef} from "react";
import PropTypes from "prop-types";

import ADivider from "../ADivider/ADivider";
import ADrawerContent from "./ADrawerContent";
import "./ADrawerFooter.scss";

/**
 * The area displayed at the bottom of the drawer.
 */
const ADrawerFooter = forwardRef(
  (
    {
      children,
      className: propsClassName,
      variant = "shadow",
      withPadding = true,
      ...rest
    },
    ref
  ) => {
    let className = "a-drawer__footer";
    let divider;

    if (propsClassName) {
      className += ` ${propsClassName}`;
    }

    switch (variant) {
      case "shadow":
        break;
      case "divider":
        className += ` a-drawer__footer--hasDivider`;

        divider = <ADivider />;
        break;
    }

    return (
      <div {...rest} ref={ref} className={className}>
        {divider}
        {withPadding ? <ADrawerContent>{children}</ADrawerContent> : children}
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
  variant: PropTypes.oneOf(["shadow", "divider"]),
  /**
   * Wrap the component children in an ADrawerContent element
   */
  withPadding: PropTypes.bool
};

ADrawerFooter.displayName = "ADrawerFooter";

export default ADrawerFooter;
