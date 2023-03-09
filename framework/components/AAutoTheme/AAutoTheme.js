import React, {useCallback, useMemo, useState} from "react";
import useMediaQuery from "../../hooks/useMediaQuery/useMediaQuery";
import {useIsomorphicLayoutEffect} from "../../utils/hooks";
import {useATheme} from "../ATheme";
import AAutoThemeContext from "./AAutoThemeContext";

const persistKey = "magna-react-auto-theme";

const AAutoTheme = (props) => {
  const {children} = props;
  const {persist, setCurrentTheme} = useATheme();
  const [isEnabled, setIsEnabled] = useState(false);
  const {matches} = useMediaQuery("(prefers-color-scheme: dark)", {
    onChange: (e) => {
      if (isEnabled) {
        setCurrentTheme(e?.target?.matches ? "dusk" : "default");
      }
    }
  });

  const enable = useCallback(() => {
    setIsEnabled(true);
    setCurrentTheme(matches ? "dusk" : "default");
    if (persist) {
      localStorage.setItem(persistKey, "enabled");
    }
  }, [matches, persist, setCurrentTheme, setIsEnabled]);

  const disable = useCallback(() => {
    setIsEnabled(false);
    if (persist) {
      localStorage.setItem(persistKey, "disabled");
    }
  }, [setIsEnabled, persist]);

  useIsomorphicLayoutEffect(() => {
    if (persist && localStorage.getItem(persistKey) === "enabled") {
      enable();
      return;
    }
    if (persist && localStorage.getItem(persistKey) === "disabled") {
      disable();
      return;
    }
  }, []);

  const ctx = useMemo(
    () => ({
      enabled: isEnabled,
      enable,
      disable,
      toggle: () => {
        isEnabled ? disable() : enable();
      }
    }),
    [isEnabled, enable, disable]
  );

  return (
    <AAutoThemeContext.Provider value={ctx}>
      {children}
    </AAutoThemeContext.Provider>
  );
};

AAutoTheme.displayName = "AAutoTheme";

export default AAutoTheme;
