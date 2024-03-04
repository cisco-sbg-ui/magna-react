import React, {forwardRef, useContext} from "react";
import PropTypes from "prop-types";

import { DrawerContext } from "./ADrawer";
import AButton from "../AButton/AButton";
import AIcon from "../AIcon/AIcon";
import "./ADrawerTitle.scss";

/**
 * The area displayed at the top of the drawer containing a title and close button.
 */
const ADrawerTitle = forwardRef(
  (
    {
      children,
      className: propsClassName,
      sticky,
      onCloseButtonClick,
      closeTitle,
      closeBtnProps,
      ...rest
    },
    ref
  ) => {
    const {onClose} = useContext(DrawerContext);
    let className = "a-drawer__title";

    if (propsClassName) {
      className += ` ${propsClassName}`;
    }

    return (
      <div className={className} ref={ref} {...rest}>
        <div className="a-drawer__title-content">{children}</div>
        <div className="a-drawer__title-close">
          {(onClose || onCloseButtonClick) && (
            <AButton
              icon
              tertiaryAlt
              onClick={() => (onClose && onClose()) || (onCloseButtonClick && onCloseButtonClick(false))}
              {...closeBtnProps}
            >
              {closeTitle ? (
                <div className="pa-2">{closeTitle}</div>
              ) : (
                <AIcon>close</AIcon>
              )}
            </AButton>
          )}
        </div>
      </div>
    );
  }
);

ADrawerTitle.propTypes = {
  /**
   * String representing class names to be passed to drawer content container.
   * If rendering the drawer as a modal, it will still be passed to the drawer
   * panel content element.
   */
  className: PropTypes.string,
  /**
   * Pass onClose handler for Drawer to handle onClose icon and action.
   * Default: x Icon
   */
  closeBtnOnClick: PropTypes.func,
  /**
   * Option for close button title instead of default icon
   */
  closeTitle: PropTypes.string,
  /**
   * Any additional props for close button
   */
  closeBtnProps: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.arrayOf(PropTypes.object)
  ])
};

ADrawerTitle.displayName = "ADrawerTitle";

export default ADrawerTitle;
