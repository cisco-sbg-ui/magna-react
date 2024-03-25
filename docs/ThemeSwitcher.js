import React from "react";

import {
  AButton,
  AButtonGroup,
  ASwitch,
  AIcon,
  ATriggerTooltip,
  useATheme,
  useAAutoTheme
} from "../framework";

const groupStyle = {display: "flex", alignItems: "center"};

const labelStyle = {
  width: "70px",
  marginRight: "8px"
};

const ThemeSwitcher = () => {
  const {currentTheme, setCurrentTheme} = useATheme();
  const autoTheme = useAAutoTheme();

  return (
    <div>
      <div style={groupStyle}>
        <p style={labelStyle}>Theme:</p>
        <AButtonGroup
          selectedValues={[currentTheme]}
          onChange={(value) => {
            if (autoTheme.enabled) {
              autoTheme.disable();
            }
            setCurrentTheme(value);
          }}
        >
          <AButton secondary data-testid="enable-default-theme" value="default">
            Light
          </AButton>
          <AButton secondary data-testid="enable-dusk-theme" value="dusk">
            Dusk
          </AButton>
        </AButtonGroup>
      </div>
      <div style={groupStyle}>
        <p style={labelStyle}>Classic Theme:</p>
        <AButtonGroup
          selectedValues={[currentTheme]}
          onChange={(value) => {
            if (autoTheme.enabled) {
              autoTheme.disable();
            }
            console.log("value", value);
            setCurrentTheme(value);
          }}
        >
          <AButton
            secondary
            data-testid="enable-classic-light-theme"
            value="classic-light"
          >
            Light
          </AButton>
          <AButton
            secondary
            data-testid="enable-classic-dark-theme"
            value="classic-dark"
          >
            Dark
          </AButton>
        </AButtonGroup>
      </div>
      <ASwitch checked={autoTheme.enabled} onClick={autoTheme.toggle}>
        <span>
          Match System Theme{" "}
          <ATriggerTooltip content="Auto theme uses the 'light' and 'dark' ('default' and 'dusk' in magna-react) themes from MDS">
            <AIcon style={{width: "14px", verticalAlign: "middle"}}>
              information
            </AIcon>
          </ATriggerTooltip>
        </span>
      </ASwitch>
    </div>
  );
};

ThemeSwitcher.displayName = "ThemeSwitcher";

export default ThemeSwitcher;
