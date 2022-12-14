import PropTypes from "prop-types";
import React, {forwardRef} from "react";
import AIcon from "../AIcon";

import "./ABreadcrumb.scss";

const ABreadcrumb = forwardRef(
  (
    {className: propsClassName, item, items = [], magnetic = false, ...rest},
    ref
  ) => {
    let className = `a-breadcrumb`,
      itemClassname = `${className}__item`,
      chevronClassname = `${itemClassname}__chevron`,
      arrowClassname = `${itemClassname}__arrow`;

    if (magnetic) {
      className += ` ${className}--magnetic`;
    }

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
            <li key={index} className={itemClassname}>
              {index === 0 && items.length === 1 && (
                <AIcon iconSet="magna" className={arrowClassname}>
                  arrowLeft
                </AIcon>
              )}
              {index > 0 && (
                <AIcon className={chevronClassname}>chevron-right</AIcon>
              )}
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
  ),
  /**
   * Adjust for magnetic sizing
   */
  magnetic: PropTypes.bool
};

ABreadcrumb.displayName = "ABreadcrumb";

export default ABreadcrumb;
