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
  const [menuSpace, setMenuSpace] = useState(0);

  const checkMenuSpacing = useCallback(() => {
    const inputBottom = surfaceRef?.current?.getBoundingClientRect().bottom,
      verticalSpace = inputBottom
        ? window.innerHeight - inputBottom - 10
        : null;

    verticalSpace && setMenuSpace(verticalSpace);
  }, [surfaceRef]);

  const menuHeight = menuRef?.current?.clientHeight || 0;

  const menuPlacement =
    menuHeight < menuSpace || (maxHeight && menuSpace > parseInt(maxHeight))
      ? "bottom"
      : "top";

  return {checkMenuSpacing, menuPlacement};
};

export default useMenuSpacing;
