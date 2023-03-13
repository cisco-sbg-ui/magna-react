import PropTypes from "prop-types";
import React, {forwardRef, useState, useCallback} from "react";

import {useIsomorphicLayoutEffect} from "../../utils/hooks";
import AThemeContext from "./AThemeContext";

const LS_KEY = "persist-magna-react-theme";

const DEFAULT_THEME = "default";
const DUSK_THEME = "dusk";
const SUPPORTED_THEMES = [DEFAULT_THEME, DUSK_THEME];

const DEFAULT_INITIAL_THEME = DEFAULT_THEME;

function isSupportedTheme(theme) {
  return SUPPORTED_THEMES.includes(theme);
}

const ATheme = forwardRef(
  (
    {
      children,
      className: propsClassName,
      persist,
      theme,
      defaultTheme,
      ...rest
    },
    ref
  ) => {
    const [currentTheme, setCurrentTheme] = useState(DEFAULT_INITIAL_THEME);

    // eagerly returns the highest priority setting
    const getInitialClientTheme = useCallback(() => {
      // persist is enabled and localStorage available
      if (persist && typeof localStorage !== "undefined") {
        // supported persisted theme overrides both 'defaultTheme' and 'theme' props
        const persistedTheme = localStorage.getItem(LS_KEY);
        if (isSupportedTheme(persistedTheme)) {
          return persistedTheme;
        }
      }
      // supported theme in 'theme' prop overrides 'defaultTheme'
      if (isSupportedTheme(theme)) {
        return theme;
      }
      // supported theme in 'defaultTheme'
      if (isSupportedTheme(defaultTheme)) {
        return defaultTheme;
      }
      // fallback
      return DEFAULT_INITIAL_THEME;
    }, [persist, theme, defaultTheme]);

    // set initial theme based on client settings (AAutoTheme can override this further)
    useIsomorphicLayoutEffect(() => {
      setCurrentTheme(getInitialClientTheme());
      // run just once
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    // reflect theme prop changes to currentTheme
    useIsomorphicLayoutEffect(() => {
      if (isSupportedTheme(theme)) {
        setCurrentTheme(theme);
      }
    }, [theme]);

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
  defaultTheme: PropTypes.oneOf(SUPPORTED_THEMES),
  /**
   * Sets the current theme. Changes to this prop are reflected as a current theme. Takes precedence over defaultTheme.
   */
  theme: PropTypes.oneOf(SUPPORTED_THEMES)
};

ATheme.displayName = "ATheme";

export default ATheme;
