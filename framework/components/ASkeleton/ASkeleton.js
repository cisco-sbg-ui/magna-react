import PropTypes from "prop-types";
import React, {forwardRef} from "react";
import {APanel} from "../APanel";
import ASkeletonHeader from "./ASkeletonHeader";

import "./ASkeleton.scss";

const baseClass = "a-skeleton";

const ASkeleton = forwardRef(
  (
    {
      children,
      className: propsClassName,
      nested,
      header,
      horizontal,
      animated,
      hidePanelBackdrop = false,
      ...rest
    },
    ref
  ) => {
    const ContainerComponent = hidePanelBackdrop ? "span" : APanel;

    let className = baseClass;

    if (propsClassName) {
      className += ` ${propsClassName}`;
    }

    if (nested) {
      className += ` ${baseClass}--nested`;
    }

    if (horizontal) {
      className += ` ${baseClass}--horizontal`;
    }

    if (animated) {
      className += ` ${baseClass}--animated`;
    }

    const content = horizontal ? (
      <div className={`${baseClass}__wrap`}>{children}</div>
    ) : (
      children
    );

    return (
      <ContainerComponent ref={ref} className={className} {...rest}>
        {header && <ASkeletonHeader />}
        {content}
      </ContainerComponent>
    );
  }
);

ASkeleton.propTypes = {
  /**
   * String representing class names to be passed to component container
   */
  className: PropTypes.string,
  /**
   * Automatically add a header component
   */
  header: PropTypes.bool,
  /**
   * Set if nesting inside another ASkeleton
   * */
  nested: PropTypes.bool,
  /**
   * Use with `nested` to display sub panels horizontally
   */
  horizontal: PropTypes.bool,
  /**
   * Show a shine keyframe animation to indicate loading
   */
  animated: PropTypes.bool,
  /**
   * Use a <span> wrapper instead of `APanel`
   */
  hidePanelBackdrop: PropTypes.bool
};

ASkeleton.displayName = "ASkeleton";

export default ASkeleton;
