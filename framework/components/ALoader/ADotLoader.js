import React, {forwardRef} from "react";

import "./ADotLoader.scss";

const ADotLoader = forwardRef(({className: propsClassName, ...rest}, ref) => {
  let className = "a-loader";

  if (propsClassName) {
    className += ` ${propsClassName}`;
  }

  return (
    <div
      {...rest}
      role="progressbar"
      aria-valuemin="0"
      aria-valuemax="100"
      ref={ref}
      className={className}>
      <div className="a-loader__dot" /> <div className="a-loader__dot" />{" "}
      <div className="a-loader__dot" />
    </div>
  );
});

ADotLoader.displayName = "ADotLoader";

export default ADotLoader;
