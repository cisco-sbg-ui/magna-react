import React, {forwardRef} from "react";

import "./AStepper.scss";

interface AStepTitleProps extends React.ComponentPropsWithRef<"div"> {}

const AStepTitle = forwardRef<HTMLDivElement, AStepTitleProps>(
  ({className: propsClassName = "", children, ...rest}, ref) => {
    const className = `a-step__label ${propsClassName}`.trim();
    return (
      <div {...rest} ref={ref} className={className}>
        <span className="a-step__title">{children}</span>
      </div>
    );
  }
);

AStepTitle.displayName = "AStepTitle";

export default AStepTitle;
