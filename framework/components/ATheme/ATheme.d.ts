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
import useATheme from "./useATheme";

declare const ATheme: (props: AThemeProps) => JSX.Element;

export {
  DEFAULT_THEME,
  DUSK_THEME,
  CLASSIC_LIGHT_THEME,
  CLASSIC_DARK_THEME,
  SUPPORTED_THEMES,
  LIGHT_THEMES,
  DARK_THEMES,
  useATheme,
  AThemeContext
};

export default ATheme;
