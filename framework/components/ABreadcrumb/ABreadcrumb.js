import PropTypes from "prop-types";
import React, {forwardRef} from "react";

import "./ABreadcrumb.scss";

const ABreadcrumb = forwardRef(
  ({className: propsClassName, item, items = [], ...rest}, ref) => {
    let className = `a-breadcrumb`;

    if (propsClassName) {
      className += ` ${propsClassName}`;
    }

    const template =
      item ||
      ((x) => {
        const {component = "a", content, contentProps} = x;
        const TagName = component;
        return <TagName {...contentProps}>{content}</TagName>;
      });

    return (
      <ul {...rest} ref={ref} className={className}>
        {items.map((x, index) => {
          return (
            <li key={index} className="a-breadcrumb__item">
              {template(x)}
            </li>
          );
        })}
      </ul>
    );
  }
);

ABreadcrumb.propTypes = {
  /**
   * Sets a custom breadcrumb template.
   */
  item: PropTypes.func,
  /**
   * Sets the array of breadcrumb data objects.
   */
  items: PropTypes.arrayOf(
    PropTypes.shape({
      component: PropTypes.elementType,
      content: PropTypes.node,
      contentProps: PropTypes.object
    })
  )
};

ABreadcrumb.displayName = "ABreadcrumb";

export default ABreadcrumb;
