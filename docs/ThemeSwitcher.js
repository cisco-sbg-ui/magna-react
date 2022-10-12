import React from "react";

import {
  AButton,
  AButtonGroup,
  ASwitch,
  useATheme,
  useAAutoTheme
} from "../framework";

const ThemeSwitcher = () => {
  const {currentTheme, setCurrentTheme} = useATheme();
  const autoTheme = useAAutoTheme();
  const styleColor = currentTheme === "dusk" ? "white--text" : "black--text";
  return (
    <div>
      <div style={{display: "flex"}}>
        <p style={{marginRight: "15px"}}>Theme:</p>
        <AButtonGroup
          selectedValues={[currentTheme]}
          onChange={(value) => {
            if (autoTheme.enabled) {
              autoTheme.disable();
            }
            setCurrentTheme(value);
          }}
        >
          <AButton
            secondary={currentTheme === "dusk"}
            data-testid="enable-default-theme"
            style={{color: `${styleColor}`}}
            disabled={autoTheme.enabled}
            value="default"
          >
            Light
          </AButton>
          <AButton
            secondary={currentTheme !== "dusk"}
            data-testid="enable-dusk-theme"
            style={{color: `${styleColor}`}}
            disabled={autoTheme.enabled}
            value="dusk"
          >
            Dusk
          </AButton>
        </AButtonGroup>
      </div>
      <ASwitch checked={autoTheme.enabled} onClick={autoTheme.toggle}>
        <span className={styleColor}>Match System Theme</span>
      </ASwitch>
    </div>
  );
};

ThemeSwitcher.displayName = "ThemeSwitcher";

export default ThemeSwitcher;
