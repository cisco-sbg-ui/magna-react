import {Override} from "../../types";
import {AMountProps} from "../AMount/types";

export type AAppDefaultTheme = "default" | "dusk";

export type AAppTheme = "default" | "dusk";

export type AAppProps<C extends React.ElementType> = Override<
  AMountProps<C>,
  {
    /**
     * Toggles animations.
     */
    animations?: boolean;
    /**
     * Toggles styled scrollbars.
     */
    scrollbars?: boolean;
    /**
     * Toggles whether the theme is loaded from local storage on mount, and persisted to local storage on theme change.
     */
    persistTheme?: boolean;
    /**
     * Sets the default theme on mount. Changes to this prop are not reflected as a current theme.
     */
    defaultTheme?: AAppDefaultTheme;
    /**
     * Sets the current theme. Changes to this prop are reflected as a current theme. Takes precedence over defaultTheme. Do not use "theme" and "persist" props at the same time. Providing a "theme" prop indicates that the theme is managed from outside and it will not be persisted.
     */
    theme?: AAppTheme;
    children: React.ReactNode;
    style?: React.CSSProperties;
  }
>;
