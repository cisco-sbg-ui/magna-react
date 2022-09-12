import React from "react";

const AThemeContext = React.createContext({
  currentTheme: "default",
  isDark: false,
  isLight: true,
  setCurrentTheme: () => {}
});

export default AThemeContext;
