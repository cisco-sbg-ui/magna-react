import React from "react";

const AAutoThemeContext = React.createContext({
  enabled: false,
  enable: () => {},
  disable: () => {},
  toggle: () => {},
});

export default AAutoThemeContext;
