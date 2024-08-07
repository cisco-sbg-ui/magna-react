import {Override} from "../../types";

export type AThemeDefaultTheme = "default";

export type AThemeExpandedType =
  | "default"
  | "dusk"
  | "classic-light"
  | "classic-dark"
  | "theme--default"
  | "theme--dusk";

export type AThemeType = "default" | "dusk";

export type AThemeProps = Override<
  React.ComponentPropsWithRef<"div">,
  {
    /**
     * Toggles whether the theme is loaded from local storage on mount, and persisted to local storage on theme change.
     */
    persist?: boolean;
    /**
     * Sets the default theme on mount. Changes to this prop are not reflected as a current theme.
     */
    defaultTheme?: AThemeDefaultTheme;
    /**
     * Sets the current theme. Changes to this prop are reflected as a current theme. Takes precedence over defaultTheme. Do not use "theme" and "persist" props at the same time. Providing a "theme" prop indicates that the theme is managed from outside and it will not be persisted.
     */
    theme?: AThemeType;
  }
>;

export interface UseAThemeResult {
  currentTheme?: AThemeType;
  isDark: boolean;
  isLight: boolean;
  setCurrentTheme: (theme: AThemeType) => void;
}
