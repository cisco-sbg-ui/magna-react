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
