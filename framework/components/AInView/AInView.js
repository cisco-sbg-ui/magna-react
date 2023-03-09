import PropTypes from "prop-types";
import React from "react";
import {handleMultipleRefs} from "../../utils/helpers";
import useInView from "../../hooks/useInView/useInView";

/**
 * Keeps track of a child component's visibility
 * in the screen. The child component _must_ accept
 * a forward ref.
 */
const AInView = (props) => {
  const {onChange, triggerOnce, children, ...observerConfig} = props;
  const ref = useInView(onChange, {
    triggerOnce,
    ...observerConfig
  });
  return React.cloneElement(children, {
    ref: handleMultipleRefs(ref, children.ref)
  });
};

function withinValidThreshold(props, propName) {
  const propValue = props[propName];
  if (propValue < 0 || propValue > 1) {
    throw new Error("Invalid prop threshold.");
  }
}

AInView.defaultProps = {
  onChange: null,
  triggerOnce: false,
  children: <></>
};

AInView.propTypes = {
  /**
   * The function to be called when the component
   * toggles entering and exiting the view. An object
   * with an `inView` property is passed.
   */
  onChange: PropTypes.func,
  /**
   * Determines if the `onChange` handler should
   * only be called on the first initial instance
   * of the component being in the view
   */
  triggerOnce: PropTypes.bool,
  /**
   * The container of the child component rendered
   * inside of `AInView`. If not passed, it defaults
   * to the browser viewport (specified as `null`).
   * The root should almost always be a scrollable
   * container.
   */
  root: PropTypes.object,
  /**
   * A bound you can set on the child component passed
   * to `AInView` as to how many margin pixels the
   * trigger should be induced.
   */
  rootMargin: PropTypes.string,
  /**
   * A value between 0 and 1 which indicates what percentage
   * of the child component should be in the view before
   * the trigger is induced. A value of `0` will trigger
   * when the first pixel enters the view, whereas a value
   * of `1` requires the entire component to be in the view
   * (assuming no `rootMargin` props are passed as well)
   */
  threshold: withinValidThreshold
};

export default AInView;
