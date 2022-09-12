import PropTypes from "prop-types";
import React, {forwardRef} from "react";

import "./APanel.scss";

const APanel = forwardRef(
  ({children, className: propsClassName, component, type, ...rest}, ref) => {
    let className = "a-panel";

    if (propsClassName) {
      className += ` ${propsClassName}`;
    }

    if (type === "grey") {
      className += " a-panel--color-gray";
    } else if (type === "white") {
      className += " a-panel--color-white";
    } else if (type === "dialog") {
      className += " a-panel--type-dialog";
    }

    const TagName = component || "div";

    return (
      <TagName {...rest} ref={ref} className={className}>
        {children}
      </TagName>
    );
  }
);

APanel.propTypes = {
  /**
   * Sets the base component.
   */
  component: PropTypes.elementType,
  /**
   * Display a style variant.
   */
  type: PropTypes.oneOf(["default", "grey", "white", "dialog"])
};

APanel.displayName = "APanel";

export default APanel;
