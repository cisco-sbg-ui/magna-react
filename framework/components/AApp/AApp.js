import PropTypes from "prop-types";
import React, {forwardRef} from "react";

import AMount from "../AMount";
import {ATheme} from "../ATheme";
import "./AApp.scss";

const AApp = forwardRef(
  (
    {
      animations = true,
      children,
      className: propsClassName,
      defaultTheme,
      persistTheme = false,
      scrollbars = true,
      ...rest
    },
    ref
  ) => {
    let className = "a-app";

    if (animations) {
      className += " a-app--animated";
    }

    if (scrollbars) {
      className += " a-app--scrollbars";
    }

    if (propsClassName) {
      className += ` ${propsClassName}`;
    }

    return (
      <AMount
        {...rest}
        ref={ref}
        className={className}
        component={ATheme}
        wrapClassName="a-app--wrap"
        persist={persistTheme}
        defaultTheme={defaultTheme}>
        {children}
      </AMount>
    );
  }
);

AApp.propTypes = {
  /**
   * Toggles animations.
   */
  animations: PropTypes.bool,
  /**
   * Sets the default theme.
   */
  defaultTheme: PropTypes.oneOf(["default", "dusk"]),
  /**
   * Toggles whether the theme is persisted in local storage.
   */
  persistTheme: PropTypes.bool,
  /**
   * Toggles styled scrollbars.
   */
  scrollbars: PropTypes.bool
};

AApp.displayName = "AApp";

export default AApp;
