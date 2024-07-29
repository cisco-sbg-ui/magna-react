import React from "react";

import {type AContextualNotificationProps} from "./types";

declare const AContextualNotification: <C extends React.ElementType = "div">(
  props: AContextualNotificationProps<C>
) => JSX.Element;

export default AContextualNotification;
