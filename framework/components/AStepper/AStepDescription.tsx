import React, {forwardRef} from "react";

import "./AStepper.scss";

interface AStepDescriptionProps extends React.ComponentPropsWithRef<"div"> {}

const AStepDescription = forwardRef<HTMLDivElement, AStepDescriptionProps>(
  ({className: propsClassName = "", children, ...rest}, ref) => {
    const containerClassName = " a-step__hint";
    const className = propsClassName + containerClassName;

    return (
      <div {...rest} ref={ref} className={className}>
        {children}
      </div>
    );
  }
);

AStepDescription.displayName = "AStepDescription";

export default AStepDescription;
