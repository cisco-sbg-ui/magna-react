import PropTypes from "prop-types";
import React, {forwardRef} from "react";

import "./ASimpleTable.scss";

const ASimpleTable = forwardRef(
  (
    {
      altLinks,
      children,
      className: propsClassName,
      striped,
      tight,
      spacious,
      comfy,
      compact,
      ...rest
    },
    ref
  ) => {
    let className = "a-simple-table";

    if (altLinks) {
      className += ` a-simple-table--alt-links`;
    }

    if (striped) {
      className += ` a-simple-table--striped`;
    }

    if (tight) {
      className += ` a-simple-table--tight`;
    } else if (compact) {
      className += ` a-simple-table--compact`;
    } else if (comfy) {
      className += ` a-simple-table--comfy`;
    } else if (spacious) {
      className += ` a-simple-table--spacious`;
    } else {
      className += ` a-simple-table--compact`;
    }

    if (propsClassName) {
      className += ` ${propsClassName}`;
    }

    return (
      <table {...rest} ref={ref} className={className}>
        {children}
      </table>
    );
  }
);

ASimpleTable.propTypes = {
  /**
   * Toggles the `altLinks` display variant. If the table has many links, use this to display them in the base text color.
   */
  altLinks: PropTypes.bool,
  /**
   * Toggles the `striped` display variant. Darkened backgrounds for alternate rows.
   */
  striped: PropTypes.bool,
  /**
   * Toggles the `tight` display variant. Smaller row heights.
   */
  tight: PropTypes.bool,
  /**
   * Toggles the `compact` display variant. Medium row heights.
   */
  compact: PropTypes.bool,
  /**
   * Toggles the `comfy` display variant. Large row heights.
   */
  comfy: PropTypes.bool,
  /**
   * Toggles the `spacious` display variant. Largest row heights.
   */
  spacious: PropTypes.bool
};

ASimpleTable.displayName = "ASimpleTable";

export default ASimpleTable;
