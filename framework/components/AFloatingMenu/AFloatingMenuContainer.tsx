import React, {useContext} from "react";

import {FloatingPortal, FloatingFocusManager} from "@floating-ui/react";

import AAppContext from "../AApp/AAppContext";

import {AFloatingMenuContainerProps} from "./types";

const AFloatingMenuContainer = ({
  children,
  context,
  focusOnOpen,
  initialFocus,
  ...rest
}: AFloatingMenuContainerProps) => {
  const {appRef} = useContext(AAppContext);

  return (
    <FloatingPortal root={appRef.current}>
      <FloatingFocusManager
        disabled={!focusOnOpen}
        context={context}
        initialFocus={initialFocus}
        {...rest}
        order={["content", "reference"]}>
        {children}
      </FloatingFocusManager>
    </FloatingPortal>
  );
};

AFloatingMenuContainer.displayName = "AFloatingMenuContainer";

export default AFloatingMenuContainer;
