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
    if (persist && theme) {
      console.warn(
        'Do not use "theme" and "persist" props at the same time in "ATheme". Providing a "theme" prop indicates that the theme is managed from outside and it will not be persisted.'
      );
    }

    const [currentTheme, setCurrentTheme] = useState(DEFAULT_INITIAL_THEME);

    // eagerly returns the highest priority setting
    const getInitialClientTheme = useCallback(() => {
      // supported theme in 'theme' prop overrides 'defaultTheme' and ignores 'persist' flag
      // (this being the first case also works around a race condition between the useEffect initializing the currentTheme
      // and the useEffect syncing the currentTheme with theme prop by both having the same outcome)
      if (isSupportedTheme(theme)) {
        return theme;
      }
      // when persist is enabled and localStorage available
      if (persist && typeof localStorage !== "undefined") {
        // supported persisted theme overrides 'defaultTheme' prop
        const persistedTheme = localStorage.getItem(LS_KEY);
        if (isSupportedTheme(persistedTheme)) {
          return persistedTheme;
        }
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

    // persist currentTheme on change
    useIsomorphicLayoutEffect(() => {
      // when "persist" is enabled, localStorage is supported, and "theme" is not managed from outside
      if (persist && typeof localStorage !== "undefined" && !theme) {
        localStorage?.setItem(LS_KEY, currentTheme);
      }
    }, [currentTheme, persist, theme]);

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
