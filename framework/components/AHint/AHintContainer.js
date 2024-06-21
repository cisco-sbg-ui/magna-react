import React from "react";
import PropTypes from "prop-types";

import AHint from "./AHint";

const AHintContainer = ({hints: propsHints = [], error, validationState}) => {
  const hints = [];

  if (typeof propsHints === "string" || propsHints instanceof String) {
    hints.unshift({
      content: propsHints
    });
  } else if (Array.isArray(propsHints)) {
    hints.push(...propsHints);
  }

  if (error) {
    hints.push({
      content: error,
      hintUsesValidationState: true
    });
  }

  return (
    <>
      {Array.isArray(hints) &&
        hints.map((hintObject, index) => {
          // "hints" block should be before "error" hint
          if (hintObject.hideHintOnError && error) {
            return null;
          }

          let content = hintObject.content;

          // Text in the array, or custom hint object
          if (typeof hintObject === "string" || hintObject instanceof String) {
            content = hintObject;
          } else if (!hintObject.content) {
            return hintObject;
          }

          const objectValidationState = hintObject.validationStateOverride
            ? hintObject.validationStateOverride
            : hintObject.hintUsesValidationState
            ? validationState
            : "default";

          return (
            <AHint
              key={index}
              className="a-field-base__hint"
              validationState={objectValidationState}
            >
              {content}
            </AHint>
          );
        })}
    </>
  );
};

AHintContainer.propTypes = {
  /**
   * Sets hint or multiple hints.
   */
  hints: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.shape({
        /**
         * Hint content.
         */
        content: PropTypes.node.isRequired,
        /**
         * Style the hint with the component validation state. Default: false.
         */
        hintUsesValidationState: PropTypes.bool,
        /**
         * Override the validation state of the hint by incorporating the desired state.
         * The component validation state is disregarded when this property is configured.
         */
        validationStateOverride: PropTypes.oneOf([
          "default",
          "warning",
          "danger"
        ]),
        /**
         * Do not show hint when there are validation errors.
         */
        hideHintOnError: PropTypes.bool
      })
    ),
    // Accept a string and use default AHint rendering
    PropTypes.string,
    // Pass a custom renderable object as the hint
    PropTypes.node
  ])
};

export default AHintContainer;
