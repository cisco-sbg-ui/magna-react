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
      theme,
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
        theme={theme}
        defaultTheme={defaultTheme}
      >
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
   * Toggles styled scrollbars.
   */
  scrollbars: PropTypes.bool,
  /**
   * Toggles whether the theme is loaded from local storage on mount, and persisted to local storage on theme change.
   */
  persistTheme: PropTypes.bool,
  /**
   * Sets the default theme on mount. Changes to this prop are not reflected as a current theme.
   */
  defaultTheme: PropTypes.oneOf(["default", "dusk"]),
  /**
   * Sets the current theme. Changes to this prop are reflected as a current theme. Takes precedence over defaultTheme. Do not use "theme" and "persist" props at the same time. Providing a "theme" prop indicates that the theme is managed from outside and it will not be persisted.
   */
  theme: PropTypes.oneOf(["default", "dusk"])
};

AApp.displayName = "AApp";

export default AApp;
