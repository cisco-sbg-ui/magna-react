import React, {
  forwardRef,
  useContext,
  useEffect,
  useRef,
  useState
} from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

import AAppContext from "../AApp/AAppContext";
import {useCombinedRefs} from "../../utils/hooks";
import {getRoundedBoundedClientRect} from "../../utils/helpers";
import "./AMenuBase.scss";

const calculateMenuPosition = (
  combinedRef,
  appRef,
  wrapRef,
  anchorRef,
  placement,
  setMenuLeft,
  setMenuTop,
  setInvisible
) => {
  if (!combinedRef.current) return;

  const appCoords = getRoundedBoundedClientRect(appRef.current);
  const wrapCoords = getRoundedBoundedClientRect(wrapRef.current);
  const anchorCoords = getRoundedBoundedClientRect(anchorRef.current);
  const menuCoords = getRoundedBoundedClientRect(combinedRef.current);

  let baseLeft = 0,
    baseTop = 0;
  switch (placement) {
    case "top": {
      baseLeft =
        (anchorCoords.left + anchorCoords.right) / 2 -
        menuCoords.width / 2 -
        wrapCoords.left;
      baseTop = anchorCoords.top - menuCoords.height - wrapCoords.top;
      break;
    }
    case "top-right": {
      baseLeft = anchorCoords.right - menuCoords.width - wrapCoords.left;
      baseTop = anchorCoords.top - menuCoords.height - wrapCoords.top;
      break;
    }
    case "right-top": {
      baseLeft = anchorCoords.right - wrapCoords.left;
      baseTop = anchorCoords.top - wrapCoords.top;
      break;
    }
    case "right": {
      baseLeft = anchorCoords.right - wrapCoords.left;
      baseTop =
        (anchorCoords.top + anchorCoords.bottom) / 2 -
        menuCoords.height / 2 -
        wrapCoords.top;
      break;
    }
    case "right-bottom": {
      baseLeft = anchorCoords.right - wrapCoords.left;
      baseTop = anchorCoords.bottom - menuCoords.height - wrapCoords.top;
      break;
    }
    case "bottom-right": {
      baseLeft = anchorCoords.right - menuCoords.width - wrapCoords.left;
      baseTop = anchorCoords.bottom - wrapCoords.top;
      break;
    }
    case "bottom": {
      baseLeft =
        (anchorCoords.left + anchorCoords.right) / 2 -
        menuCoords.width / 2 -
        wrapCoords.left;
      baseTop = anchorCoords.bottom - wrapCoords.top;
      break;
    }
    case "bottom-left": {
      baseLeft = anchorCoords.left - wrapCoords.left;
      baseTop = anchorCoords.bottom - wrapCoords.top;
      break;
    }
    case "left-bottom": {
      baseLeft = anchorCoords.left - menuCoords.width - wrapCoords.left;
      baseTop = anchorCoords.bottom - menuCoords.height - wrapCoords.top;
      break;
    }
    case "left": {
      baseLeft = anchorCoords.left - menuCoords.width - wrapCoords.left;
      baseTop =
        (anchorCoords.top + anchorCoords.bottom) / 2 -
        menuCoords.height / 2 -
        wrapCoords.top;
      break;
    }
    case "left-top": {
      baseLeft = anchorCoords.left - menuCoords.width - wrapCoords.left;
      baseTop = anchorCoords.top - wrapCoords.top;
      break;
    }
    case "top-left": {
      baseLeft = anchorCoords.left - wrapCoords.left;
      baseTop = anchorCoords.top - menuCoords.height - wrapCoords.top;
      break;
    }
  }

  const marginLeft = parseInt(
    window.getComputedStyle(combinedRef.current).marginLeft
  );
  const marginTop = parseInt(
    window.getComputedStyle(combinedRef.current).marginTop
  );

  const xOffset = appRef.current.offsetParent?.isSameNode(document.body)
    ? window.pageXOffset
    : wrapCoords.left - appCoords.scrollLeft;
  const yOffset = appRef.current.offsetParent?.isSameNode(document.body)
    ? window.pageYOffset
    : wrapCoords.top - appCoords.scrollTop;

  const pageWidth =
    document.documentElement.clientWidth + xOffset - wrapRef.current.offsetLeft;
  const pageHeight =
    document.documentElement.clientHeight + yOffset - wrapRef.current.offsetTop;

  // Edge detection: max x
  if (baseLeft + menuCoords.width + marginLeft > pageWidth) {
    baseLeft = pageWidth - menuCoords.width - marginLeft;
  }

  // Edge detection: min x
  if (baseLeft + marginLeft < xOffset) {
    baseLeft = xOffset - marginLeft;
  }

  // Edge detection: max y
  if (baseTop + menuCoords.height + marginTop > pageHeight) {
    baseTop = pageHeight - menuCoords.height - marginTop;
  }

  // Edge detection: min y
  else if (baseTop < yOffset) {
    baseTop = yOffset - marginTop;
  }

  setMenuLeft(Math.round(baseLeft));
  setMenuTop(Math.round(baseTop));
  setInvisible(false);
};

const calculatePointerPosition = (
  combinedRef,
  anchorRef,
  pointer,
  placement,
  setPointerLeft,
  setPointerTop
) => {
  if (!combinedRef.current) return;

  const anchorCoords = getRoundedBoundedClientRect(anchorRef.current);
  const menuCoords = getRoundedBoundedClientRect(combinedRef.current);

  // Pointer
  if (!pointer) return;

  switch (placement) {
    case "top":
    case "top-left":
    case "top-right":
    case "bottom":
    case "bottom-left":
    case "bottom-right": {
      let left = menuCoords.left + menuCoords.width / 2;
      if (menuCoords.width > anchorCoords.width) {
        left = anchorCoords.left + anchorCoords.width / 2;
      }

      setPointerLeft(left - menuCoords.left - 6);
      setPointerTop(null);
      break;
    }
    case "right":
    case "right-bottom":
    case "right-top":
    case "left":
    case "left-bottom":
    case "left-top": {
      let top = menuCoords.top + menuCoords.height / 2;
      if (menuCoords.height > anchorCoords.height) {
        top = anchorCoords.top + anchorCoords.height / 2;
      }

      setPointerLeft(null);
      setPointerTop(top - menuCoords.top - 6);
      break;
    }
  }
};

const AMenuBase = forwardRef(
  (
    {
      anchorRef,
      children,
      className: propsClassName,
      onClose,
      open,
      placement = "bottom-left",
      pointer,
      style: propsStyle,
      ...rest
    },
    ref
  ) => {
    const {appRef, wrapRef} = useContext(AAppContext);
    const menuRef = useRef(null);
    const combinedRef = useCombinedRefs(ref, menuRef);
    const [menuLeft, setMenuLeft] = useState(0);
    const [menuTop, setMenuTop] = useState(0);
    const [invisible, setInvisible] = useState(true);
    const [pointerLeft, setPointerLeft] = useState(null);
    const [pointerTop, setPointerTop] = useState(null);

    useEffect(() => {
      calculateMenuPosition(
        combinedRef,
        appRef,
        wrapRef,
        anchorRef,
        placement,
        setMenuLeft,
        setMenuTop,
        setInvisible
      );
    }, [open, anchorRef, combinedRef, placement, appRef, wrapRef]);

    useEffect(() => {
      calculatePointerPosition(
        combinedRef,
        anchorRef,
        pointer,
        placement,
        setPointerLeft,
        setPointerTop
      );
    }, [anchorRef, combinedRef, placement, pointer, menuLeft, menuTop]);

    useEffect(() => {
      const screenChangeHandler = () => {
        calculateMenuPosition(
          combinedRef,
          appRef,
          wrapRef,
          anchorRef,
          placement,
          setMenuLeft,
          setMenuTop,
          setInvisible
        );
      };

      window.addEventListener("resize", screenChangeHandler);
      window.addEventListener("fullscreenchange", screenChangeHandler);

      return () => {
        window.removeEventListener("resize", screenChangeHandler);
        window.removeEventListener("fullscreenchange", screenChangeHandler);
      };
    }, [anchorRef, combinedRef, placement, appRef, wrapRef]);

    useEffect(() => {
      const screenChangeHandler = () => {
        calculateMenuPosition(
          combinedRef,
          appRef,
          wrapRef,
          anchorRef,
          placement,
          setMenuLeft,
          setMenuTop,
          setInvisible
        );
      };

      window.addEventListener("resize", screenChangeHandler);

      return () => {
        window.removeEventListener("resize", screenChangeHandler);
      };
    }, [anchorRef, combinedRef, placement, appRef, wrapRef]);

    useEffect(() => {
      const clickOutsideHandler = (e) => {
        if (
          anchorRef.current &&
          combinedRef.current &&
          open &&
          !anchorRef.current.contains(e.target) &&
          !combinedRef.current.contains(e.target)
        ) {
          onClose && onClose(e);
        }
      };

      document.addEventListener("click", clickOutsideHandler);

      return () => {
        window.removeEventListener("click", clickOutsideHandler);
      };
    }, [anchorRef, combinedRef, onClose, open]);

    let className = `a-menu-base a-menu-base--${placement}`;
    if (!invisible && open) {
      className += " a-menu-base--active";
    }

    if (propsClassName) {
      className += ` ${propsClassName}`;
    }

    let style = {
      left: menuLeft,
      top: menuTop
    };
    if (propsStyle) {
      style = {
        ...propsStyle,
        ...style
      };
    }

    const pointerStyle = {};
    if (pointerLeft !== null) {
      pointerStyle.left = pointerLeft;
    }

    if (pointerTop !== null) {
      pointerStyle.top = pointerTop;
    }

    return (
      (open &&
        appRef.current &&
        ReactDOM.createPortal(
          <div {...rest} ref={combinedRef} className={className} style={style}>
            {pointer && (
              <div className="a-menu-base__pointer" style={pointerStyle} />
            )}
            {children}
          </div>,
          appRef.current
        )) ||
      null
    );
  }
);

AMenuBase.propTypes = {
  /**
   * The reference to the menu anchor.
   */
  anchorRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({current: PropTypes.any})
  ]).isRequired,
  /**
   * Handles the request to close the menu.
   */
  onClose: PropTypes.func,
  /**
   * Toggles the `open` state.
   */
  open: PropTypes.bool,
  /**
   * The placement of the menu.
   */
  placement: PropTypes.oneOf([
    "top",
    "top-right",
    "right-top",
    "right",
    "right-bottom",
    "bottom-right",
    "bottom",
    "bottom-left",
    "left-bottom",
    "left",
    "left-top",
    "top-left"
  ]),
  /**
   * Toggles the menu pointer.
   */
  pointer: PropTypes.bool
};

AMenuBase.displayName = "AMenuBase";

export default AMenuBase;
