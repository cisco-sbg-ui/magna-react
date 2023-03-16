import PropTypes from "prop-types";
import React, {forwardRef, useState, useCallback} from "react";

import {useIsomorphicLayoutEffect} from "../../utils/hooks";
import AThemeContext from "./AThemeContext";

const DEFAULT_THEME = "default";
const DUSK_THEME = "dusk";
const SUPPORTED_THEMES = [DEFAULT_THEME, DUSK_THEME];

const DEFAULT_INITIAL_THEME = DEFAULT_THEME;

function isSupportedTheme(theme) {
  return SUPPORTED_THEMES.includes(theme);
}

class ThemeStorage {
  static LS_KEY = "persist-magna-react-theme";

  static isSupported() {
    return typeof localStorage !== "undefined";
  }

  static loadTheme() {
    return localStorage.getItem(ThemeStorage.LS_KEY);
  }

  static saveTheme(theme) {
    localStorage.setItem(ThemeStorage.LS_KEY, theme);
  }
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
    if (persist && theme) {
      console.warn(
        'Do not use "theme" and "persist" props at the same time in "ATheme". Providing a "theme" prop indicates that the theme is managed from outside and it will not be persisted.'
      );
    }

    const [currentTheme, setCurrentTheme] = useState(); // undefined indicates not initialized

    const shouldUseThemeStorage =
      ThemeStorage.isSupported() &&
      persist && // persist is enabled
      !theme; // theme not managed from outside via theme prop

    // eagerly returns the highest priority setting
    const getInitialClientTheme = useCallback(() => {
      // when persistence should be used
      if (shouldUseThemeStorage) {
        const persistedTheme = ThemeStorage.loadTheme();
        if (isSupportedTheme(persistedTheme)) {
          return persistedTheme;
        }
      }
      // supported theme in 'theme'
      if (isSupportedTheme(theme)) {
        return theme;
      }
      // supported theme in 'defaultTheme'
      if (isSupportedTheme(defaultTheme)) {
        return defaultTheme;
      }
      // fallback
      return DEFAULT_INITIAL_THEME;
    }, [shouldUseThemeStorage, theme, defaultTheme]);

    // set initial theme based on client settings
    useIsomorphicLayoutEffect(() => {
      setCurrentTheme(getInitialClientTheme());
      // run just once
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    // reflect theme prop changes to currentTheme
    useIsomorphicLayoutEffect(() => {
      setCurrentTheme((previousTheme) => {
        // change the current theme only if it has been initialized already
        // to avoid a race condition with the theme initialization effect
        const themeInitialized = typeof previousTheme !== "undefined";
        return themeInitialized && isSupportedTheme(theme)
          ? theme
          : previousTheme;
      });
    }, [theme]);

    // persist currentTheme on change
    useIsomorphicLayoutEffect(() => {
      if (shouldUseThemeStorage) {
        ThemeStorage.saveTheme(currentTheme);
      }
    }, [currentTheme]);

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
   * Sets the current theme. Changes to this prop are reflected as a current theme. Takes precedence over defaultTheme. Do not use "theme" and "persist" props at the same time. Providing a "theme" prop indicates that the theme is managed from outside and it will not be persisted.
   */
  theme: PropTypes.oneOf(SUPPORTED_THEMES)
};

ATheme.displayName = "ATheme";

export default ATheme;
