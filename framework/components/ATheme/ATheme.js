import PropTypes from "prop-types";
import React, {forwardRef, useState, useCallback} from "react";

import {useIsomorphicLayoutEffect} from "../../utils/hooks";
import AThemeContext from "./AThemeContext";

const LS_KEY = "persist-magna-react-theme";

const DEFAULT_THEME = "default";
const DUSK_THEME = "dusk";
const SUPPORTED_THEMES = [DEFAULT_THEME, DUSK_THEME];

function isSupportedTheme(theme) {
  return SUPPORTED_THEMES.includes(theme);
}

const ATheme = forwardRef(
  (
    {children, className: propsClassName, defaultTheme, persist, ...rest},
    ref
  ) => {
    const [currentTheme, setCurrentTheme] = useState(DEFAULT_THEME);

    const getInitialClientTheme = useCallback(() => {
      // take initial theme from defaultTheme prop or fallback to DEFAULT_THEME
      let initialTheme = isSupportedTheme(defaultTheme)
        ? defaultTheme
        : DEFAULT_THEME;
      // when persist is enabled and available
      if (persist && typeof localStorage !== "undefined") {
        const persistedTheme = localStorage.getItem(LS_KEY);
        // supported persisted theme overrides initialTheme
        if (isSupportedTheme(persistedTheme)) {
          initialTheme = persistedTheme;
        }
      }
      return initialTheme;
    }, [persist, defaultTheme]);

    // set initial theme based on client settings (AAutoTheme can override this further)
    useIsomorphicLayoutEffect(() => {
      setCurrentTheme(getInitialClientTheme());
      // run just once
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    // persist currentTheme on change when persist is enabled
    useIsomorphicLayoutEffect(() => {
      if (persist) {
        localStorage?.setItem(LS_KEY, currentTheme);
      }
    }, [currentTheme, persist]);

    const isDark = currentTheme === DUSK_THEME;
    const isLight = currentTheme !== DUSK_THEME;

    const themeContext = {
      persist,
      currentTheme,
      isDark,
      isLight,
      setCurrentTheme: (theme) => {
        if (isSupportedTheme(theme)) {
          setCurrentTheme(theme);
        }
      }
    };

    let className =
      currentTheme === DUSK_THEME ? "theme--dusk" : "theme--default";

    if (propsClassName) {
      className += ` ${propsClassName}`;
    }

    return (
      <div {...rest} ref={ref} className={className}>
        <AThemeContext.Provider value={themeContext}>
          {children}
        </AThemeContext.Provider>
      </div>
    );
  }
);

ATheme.propTypes = {
  /**
   * Toggles whether the theme is loaded from local storage on mount, and persisted to local storage on theme change.
   */
  persist: PropTypes.bool,
  /**
   * Sets the default theme on mount. Changes to this prop are not reflected as a current theme.
   */
  defaultTheme: PropTypes.oneOf(["default", "dusk"])
};

ATheme.displayName = "ATheme";

export default ATheme;
