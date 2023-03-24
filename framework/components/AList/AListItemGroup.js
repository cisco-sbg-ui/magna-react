import React, {forwardRef} from "react";

import "./AList.scss";
import PropTypes from "prop-types";

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
   * Sets the title for the group
   */
  title: PropTypes.string
};

export default AListItemGroup;
