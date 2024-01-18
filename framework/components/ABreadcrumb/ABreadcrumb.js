import PropTypes from "prop-types";
import React, {forwardRef} from "react";
import AIcon from "../AIcon";

const ABreadcrumb = forwardRef(
  ({className: propsClassName, item, items = [], ...rest}, ref) => {
    let className = `a-breadcrumb`,
      itemClassname = `${className}__item`,
      chevronClassname = `${itemClassname}__chevron`,
      arrowClassname = `${itemClassname}__arrow`;

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

    let singleLevelContent;

    if (items.length === 1) {
      const {href, onClick} = items[0].contentProps || {};
      const onArrowClick = () => {
        if (href) {
          window.location = href;
        }

        onClick && onClick();
      };
      singleLevelContent = (
        <AIcon
          className={arrowClassname}
          style={{cursor: "pointer"}}
          onClick={onArrowClick}
        >
          arrow-left
        </AIcon>
      );
    }

    return (
      <ul {...rest} ref={ref} className={className}>
        {items.map((x, index) => {
          return (
            <li key={index} className={itemClassname}>
              {singleLevelContent}
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
  )
};

ABreadcrumb.displayName = "ABreadcrumb";

export default ABreadcrumb;
