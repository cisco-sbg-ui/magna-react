import PropTypes from "prop-types";
import React, {forwardRef} from "react";

const AListItemGroup = forwardRef(
  ({children, title, className: propsClassName, ...rest}, ref) => {
    let className = "a-list-item__group";
    let titleClassName = "a-list-item__group-title";

    if (propsClassName) {
      className += ` ${propsClassName}`;
    }

    return (
      <div {...rest} ref={ref} className={className}>
        <div className={titleClassName}>{title}</div>
        {children}
      </div>
    );
  }
);

AListItemGroup.displayName = "AListItemGroup";

AListItemGroup.propTypes = {
  /**
   * Sets the title for the group, string or other component
   */
  title: PropTypes.node
};

export default AListItemGroup;
