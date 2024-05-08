import React, {forwardRef} from "react";
import "./ThemeSwitcher.scss";

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
    <div id="theme-switcher" className="theme-switcher">
      <div style={groupStyle}>
        <p style={labelStyle} className="theme-switcher-label">
          Theme:
        </p>
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
            <AIcon>sun</AIcon>
          </AButton>
          <AButton secondary data-testid="enable-dusk-theme" value="dusk">
            <AIcon>moon</AIcon>
          </AButton>
        </AButtonGroup>
      </div>
      <div style={groupStyle}>
        <p style={labelStyle} className="theme-switcher-label">
          Classic Theme:
        </p>
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
            secondary
            data-testid="enable-classic-light-theme"
            value="classic-light"
          >
            <AIcon>sun-dim</AIcon>
          </AButton>
          <AButton
            secondary
            data-testid="enable-classic-dark-theme"
            value="classic-dark"
          >
            <AIcon>moon-stars</AIcon>
          </AButton>
        </AButtonGroup>
      </div>
      <ASwitch checked={autoTheme.enabled} onClick={autoTheme.toggle}>
        <span>
          System Theme{" "}
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

export default forwardRef(ThemeSwitcher);
