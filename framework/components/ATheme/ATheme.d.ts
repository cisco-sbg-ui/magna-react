import {type AThemeProps} from "./types";

import ATheme from "./ATheme";

import {
  DEFAULT_THEME,
  DUSK_THEME,
  CLASSIC_LIGHT_THEME,
  CLASSIC_DARK_THEME,
  SUPPORTED_THEMES,
  LIGHT_THEMES,
  DARK_THEMES
} from "./constants";

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
