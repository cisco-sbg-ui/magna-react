import React, {forwardRef} from "react";

import {AButton, AIcon, ASwitch, useATheme} from "../framework";

const ThemeSwitcher = (props, ref) => {
  const {currentTheme, setCurrentTheme} = useATheme();
  const styleColor =
    currentTheme === "dusk"
      ? "mds-yellow--yellow-3--text"
      : "mds-neutral--neutral-14--text";
  return (
    <AButton
      ref={ref}
      tertiary
      icon
      onClick={() =>
        setCurrentTheme(currentTheme === "dusk" ? "default" : "dusk")
      }
      {...props}
    >
      <AIcon size={24} className={styleColor}>
        theme
      </AIcon>
    </AButton>
  );
};

ThemeSwitcher.displayName = "ThemeSwitcher";

export default forwardRef(ThemeSwitcher);
