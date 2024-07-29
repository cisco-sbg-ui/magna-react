import {type AThemeProps} from "./types";

import ATheme, {
  DEFAULT_THEME,
  DUSK_THEME,
  CLASSIC_LIGHT_THEME,
  CLASSIC_DARK_THEME,
  SUPPORTED_THEMES,
  LIGHT_THEMES,
  DARK_THEMES
} from "./ATheme";

import AThemeContext from "./AThemeContext";

declare const ATheme: (props: AThemeProps) => JSX.Element;

export {
  DEFAULT_THEME,
  DUSK_THEME,
  CLASSIC_LIGHT_THEME,
  CLASSIC_DARK_THEME,
  SUPPORTED_THEMES,
  LIGHT_THEMES,
  DARK_THEMES,
  AThemeContext
};

export default ATheme;
