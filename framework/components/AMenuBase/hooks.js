import {useCallback, useState} from "react";

/**
 * Determines if a menu should flip its placement to above an
 * element if there is not enough vertical space below to
 * render the entire menu.
 *
 * To be used with ASelect and other components that use AMenu
 * in a dropdown sort of way.
 */

const useMenuSpacing = (surfaceRef, menuRef, maxHeight) => {
  const [menuPlacement, setMenuPlacement] = useState("bottom");

  const checkMenuSpacing = useCallback(() => {
    const inputBottom = surfaceRef?.current?.getBoundingClientRect().bottom,
      verticalSpace = inputBottom ? window.innerHeight - inputBottom - 10 : 0;

    const menuHeight = menuRef?.current?.clientHeight || 0;

    const placement =
      menuHeight < verticalSpace ||
      (maxHeight && verticalSpace > parseInt(maxHeight))
        ? "bottom"
        : "top";

    setMenuPlacement(placement);
  }, [surfaceRef, menuRef, maxHeight]);

  return {checkMenuSpacing, menuPlacement};
};

export default useMenuSpacing;

/**
 * If enabled, automatically flip vertically or horizontally if the menu would
 * otherwise be rendered out of bounds of either the AMount wrap or the window.
 * @param {*} enabled
 * @param {*} anchorRef
 * @param {*} menuRef
 * @param {*} wrapRef
 * @param {*} pointer
 * @param {*} placement
 * @returns
 */

export const useMenuFlip = (
  enabled,
  anchorRef,
  menuRef,
  wrapRef,
  pointer = false,
  placement = "top"
) => {
  const [menuPlacement, setMenuPlacement] = useState(placement);
  const pointerAdjust = pointer && 14;

  const checkMenuSpacing = useCallback(() => {
    const {
      top: anchorTop,
      right: anchorRight,
      bottom: anchorBottom,
      left: anchorLeft
    } = anchorRef?.current?.getBoundingClientRect() || {};
    const {
      top: wrapTop,
      right: wrapRight,
      bottom: wrapBottom,
      left: wrapLeft
    } = wrapRef?.current?.getBoundingClientRect() || {};

    const upperBound = Math.max(0, wrapTop);
    const rightBound = Math.max(window.innerWidth, wrapRight);
    const lowerBound = Math.min(window.innerHeight, wrapBottom);
    const leftBound = Math.min(0, wrapLeft);

    const verticalSpaceAbove = anchorTop ? anchorTop - upperBound : 0;
    const verticalSpaceBelow = anchorBottom ? lowerBound - anchorBottom : 0;

    const horizontalSpaceBefore = anchorLeft ? anchorLeft - leftBound : 0;
    const horizontalSpaceAfter = anchorRight ? rightBound - anchorRight : 0;

    const menuHeight = menuRef?.current?.clientHeight + pointerAdjust || 0;
    const menuWidth = menuRef?.current?.clientWidth || 0;

    let computedPlacement;

    switch (placement) {
      case "top":
        computedPlacement = menuHeight < verticalSpaceAbove ? "top" : "bottom";
        break;

      case "top-right":
        computedPlacement = menuHeight < verticalSpaceAbove ? "top" : "bottom";
        computedPlacement += `-right`;
        break;

      case "right-top":
        computedPlacement = menuWidth < horizontalSpaceAfter ? "right" : "left";
        computedPlacement += "-top";
        break;

      case "right":
        computedPlacement = menuWidth < horizontalSpaceAfter ? "right" : "left";
        break;

      case "right-bottom":
        computedPlacement = menuWidth < horizontalSpaceAfter ? "right" : "left";
        computedPlacement += "-bottom";
        break;

      case "bottom-right":
        computedPlacement = menuHeight < verticalSpaceBelow ? "bottom" : "top";
        computedPlacement += "-right";
        break;

      case "bottom":
        computedPlacement = menuHeight < verticalSpaceBelow ? "bottom" : "top";
        break;

      case "bottom-left":
        computedPlacement = menuHeight < verticalSpaceBelow ? "bottom" : "top";
        computedPlacement += "-left";
        break;

      case "left-bottom":
        computedPlacement =
          menuWidth < horizontalSpaceBefore ? "left" : "right";
        computedPlacement += "-bottom";
        break;

      case "left":
        computedPlacement =
          menuWidth < horizontalSpaceBefore ? "left" : "right";
        break;

      case "left-top":
        computedPlacement =
          menuWidth < horizontalSpaceBefore ? "left" : "right";
        computedPlacement += "-top";
        break;

      case "top-left":
        computedPlacement = menuHeight < verticalSpaceAbove ? "top" : "bottom";
        computedPlacement += "-left";
        break;
    }

    setMenuPlacement(computedPlacement);
  }, [anchorRef, menuRef, wrapRef, pointerAdjust, placement]);

  if (!enabled) {
    return {checkMenuSpacing: () => {}, placement};
  }

  return {checkMenuSpacing, menuPlacement};
};
