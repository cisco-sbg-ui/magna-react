import React, {useContext} from "react";

import AAppContext from "../AApp/AAppContext";
import "./AToaster.scss";

const AToastPlate = () => {
  const {toasts} = useContext(AAppContext);

  if (!toasts?.length) {
    return null;
  }

  const components = toasts
    .filter(({placement}) =>
      ["bottom-right", "top", "top-right"].includes(placement)
    )
    .reduce(
      (toastsAcc, {placement, component}) => ({
        ...toastsAcc,
        [placement]: [...toastsAcc[placement], component]
      }),
      {
        "bottom-right": [],
        top: [],
        "top-right": []
      }
    );

  return (
    <>
      {Object.entries(components).map(
        ([placement, components], index) =>
          !!components.length && (
            <div
              className={`a-toast-plate a-toast-plate--${placement}`}
              key={index}
            >
              {components}
            </div>
          )
      )}
    </>
  );
};

AToastPlate.displayName = "AToastPlate";

export default AToastPlate;
