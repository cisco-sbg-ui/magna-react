import React, {
  forwardRef,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState
} from "react";
import ReactDOM from "react-dom";

import AAppContext from "../AApp/AAppContext";
import {useCombinedRefs} from "../../utils/hooks";
import {getRoundedBoundedClientRect} from "../../utils/helpers";

import {useMenuFlip} from "./hooks";
import "./AMenuBase.scss";
import {
  AMenuFlip,
  AMenuBaseProps,
  calculateMenuPositionType,
  calculatePointerPositionType
} from "./types";
import {ARef} from "../../types";

const calculateMenuPosition = ({
  combinedRef,
  appRef,
  wrapRef,
  anchorRef, // Can be either a React Ref or DOMRect
  placement,
  setMenuLeft,
  setMenuTop,
  setInvisible,
  removeSpacer = false,
  withNewWrappingContext
}: calculateMenuPositionType) => {
  if (!combinedRef.current) {
    return;
  }

  const appCoords = getRoundedBoundedClientRect(appRef.current);
  const wrapCoords = getRoundedBoundedClientRect(wrapRef.current);
  const anchorCoords =
    anchorRef instanceof DOMRect
      ? anchorRef
      : getRoundedBoundedClientRect((anchorRef as ARef).current);
  const menuCoords = getRoundedBoundedClientRect(combinedRef.current);
  const magneticSpacer = removeSpacer ? 0 : 4;

  if (!anchorCoords || !menuCoords || !wrapCoords || !appCoords) {
    return;
  }
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
      baseTop = anchorCoords.bottom - wrapCoords.top + magneticSpacer;
      break;
    }
    case "bottom": {
      baseLeft =
        (anchorCoords.left + anchorCoords.right) / 2 -
        menuCoords.width / 2 -
        wrapCoords.left;
      baseTop = anchorCoords.bottom - wrapCoords.top + magneticSpacer;

      break;
    }
    case "bottom-left": {
      baseLeft = anchorCoords.left - wrapCoords.left;
      baseTop = anchorCoords.bottom - wrapCoords.top + magneticSpacer;
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
    window.getComputedStyle(combinedRef.current as HTMLElement).marginLeft
  );
  const marginTop = parseInt(
    window.getComputedStyle(combinedRef.current as HTMLElement).marginTop
  );

  let xOffset, yOffset, pageWidth, pageHeight;
  const wrapRefEl = wrapRef.current as HTMLElement;
  const appRefEl = appRef.current as HTMLElement;
  if (withNewWrappingContext) {
    // Calculate positioning relative to `AMenuBase`
    xOffset = wrapRefEl.offsetLeft - appRefEl.scrollLeft;
    yOffset = wrapRefEl.offsetTop - appRefEl.scrollTop;

    pageWidth = wrapCoords.width;
    pageHeight = wrapCoords.height;
  } else {
    // Calculate positioning relative to window or app/wrap elements
    xOffset = appRefEl.offsetParent?.isSameNode(document.body)
      ? window.pageXOffset
      : //@ts-expect-error //THIS is a NAN value and does not work! However, when fixed it breaks all the things.  Further attempts to refactor, broke more things.  This code is here to stabilize while we discuss new solutions.
        wrapCoords.left - appCoords.scrollLeft;

    yOffset = appRefEl.offsetParent?.isSameNode(document.body)
      ? window.pageYOffset
      : //@ts-expect-error //THIS is a NAN value and does not work! However, when fixed it breaks all the things.  Further attempts to refactor, broke more things.  This code is here to stabilize while we discuss new solutions.
        wrapCoords.top - appCoords.scrollTop;

    pageWidth =
      document.documentElement.clientWidth + xOffset - wrapRefEl.offsetLeft;

    pageHeight =
      document.documentElement.clientHeight + yOffset - wrapRefEl.offsetTop;
  }

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

const calculatePointerPosition = ({
  combinedRef,
  anchorRef, // Can be either a React Ref or DOMRect
  pointer,
  placement,
  setPointerLeft,
  setPointerTop
}: calculatePointerPositionType) => {
  if (!combinedRef.current) {
    return;
  }

  const anchorCoords =
    anchorRef instanceof DOMRect
      ? anchorRef
      : getRoundedBoundedClientRect((anchorRef as ARef).current);
  const menuCoords = getRoundedBoundedClientRect(combinedRef.current);

  if (!anchorCoords || !menuCoords) {
    return;
  }

  // Pointer
  if (!pointer) {
    return;
  }

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

const AMenuBase = forwardRef<HTMLElement, AMenuBaseProps>(
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
      removeSpacer = false,
      useFlipLogic = false,
      ...rest
    },
    ref
  ) => {
    const {appRef, wrapRef, withNewWrappingContext} = useContext(AAppContext);
    const menuRef = useRef<HTMLDivElement>(null);
    const combinedRef = useCombinedRefs(ref, menuRef);
    const [menuLeft, setMenuLeft] = useState<number>(0);
    const [menuTop, setMenuTop] = useState<number>(0);
    const [invisible, setInvisible] = useState(true);
    const [pointerLeft, setPointerLeft] = useState<number | null>(null);
    const [pointerTop, setPointerTop] = useState<number | null>(null);

    const {checkMenuSpacing, menuPlacement}: AMenuFlip = useMenuFlip(
      useFlipLogic,
      anchorRef,
      combinedRef,
      wrapRef,
      pointer,
      placement
    );

    useEffect(() => {
      if (open && menuRef.current) {
        checkMenuSpacing();
      }
    }, [open, checkMenuSpacing, menuRef, placement]);

    // reposition on scroll, but only if it's open
    // TODO: revisit this - it's causing issues when the page scrolls. Need to
    // scope it to the container the menu is in
    // useHasScrolled(open, calculatePosition);

    useEffect(() => {
      if (open && menuRef.current) {
        checkMenuSpacing();
      }
    }, [open, checkMenuSpacing, menuRef, placement]);

    useEffect(() => {
      const calculateMenuPositionProps = {
        combinedRef,
        appRef,
        wrapRef,
        anchorRef,
        placement: menuPlacement,
        setMenuLeft,
        setMenuTop,
        setInvisible,
        removeSpacer,
        withNewWrappingContext
      };
      calculateMenuPosition(calculateMenuPositionProps);
    }, [
      open,
      anchorRef,
      combinedRef,
      menuPlacement,
      appRef,
      wrapRef,
      removeSpacer,
      withNewWrappingContext
    ]);

    useEffect(() => {
      const pointerPositionProps = {
        combinedRef,
        anchorRef,
        pointer,
        placement: menuPlacement,
        setPointerLeft,
        setPointerTop
      };
      calculatePointerPosition(pointerPositionProps);
    }, [anchorRef, combinedRef, menuPlacement, pointer, menuLeft, menuTop]);

    useEffect(() => {
      const screenChangeHandler = () => {
        const calculateMenuPositionProps = {
          combinedRef,
          appRef,
          wrapRef,
          anchorRef,
          placement,
          setMenuLeft,
          setMenuTop,
          setInvisible,
          removeSpacer,
          withNewWrappingContext
        };
        calculateMenuPosition(calculateMenuPositionProps);
      };

      window.addEventListener("resize", screenChangeHandler);
      window.addEventListener("fullscreenchange", screenChangeHandler);

      return () => {
        window.removeEventListener("resize", screenChangeHandler);
        window.removeEventListener("fullscreenchange", screenChangeHandler);
      };
    }, [
      anchorRef,
      combinedRef,
      placement,
      appRef,
      wrapRef,
      removeSpacer,
      withNewWrappingContext
    ]);

    useEffect(() => {
      calculatePointerPosition({
        combinedRef,
        anchorRef,
        pointer,
        placement: menuPlacement,
        setPointerLeft,
        setPointerTop
      });
    }, [anchorRef, combinedRef, menuPlacement, pointer, menuLeft, menuTop]);

    useEffect(() => {
      const screenChangeHandler = () => {
        const calculateMenuPositionProps = {
          combinedRef,
          appRef,
          wrapRef,
          anchorRef,
          placement,
          setMenuLeft,
          setMenuTop,
          setInvisible,
          removeSpacer,
          withNewWrappingContext
        };
        calculateMenuPosition(calculateMenuPositionProps);
      };

      window.addEventListener("resize", screenChangeHandler);

      return () => {
        window.removeEventListener("resize", screenChangeHandler);
      };
    }, [
      anchorRef,
      combinedRef,
      placement,
      appRef,
      wrapRef,
      removeSpacer,
      withNewWrappingContext
    ]);

    useEffect(() => {
      const clickOutsideHandler = (e: MouseEvent) => {
        if (anchorRef instanceof DOMRect) {
          return;
        }
        if (
          "current" in anchorRef &&
          anchorRef.current &&
          combinedRef.current &&
          open &&
          !(anchorRef.current as any).contains(e.target) &&
          !(combinedRef.current as any).contains(e.target) //TODO Fix once combinedRef is typed
        ) {
          onClose && onClose(e as unknown as React.MouseEvent<HTMLElement>);
        }
      };

      window.addEventListener("mousedown", clickOutsideHandler);

      return () => {
        window.removeEventListener("mousedown", clickOutsideHandler);
      };
    }, [anchorRef, combinedRef, onClose, open]);

    let className = `a-menu-base a-menu-base--${menuPlacement}`;
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

    const pointerStyle: React.CSSProperties = {};
    if (pointerLeft !== null) {
      pointerStyle.left = pointerLeft;
    }

    if (pointerTop !== null) {
      pointerStyle.top = pointerTop;
    }

    const node = (
      <div
        data-ignore-outside-click
        {...rest}
        ref={combinedRef as any}
        className={className}
        style={style}>
        {pointer && (
          <div className="a-menu-base__pointer" style={pointerStyle} />
        )}
        {children}
      </div>
    );

    return (
      (open && appRef.current && ReactDOM.createPortal(node, appRef.current)) ||
      null
    );
  }
);

AMenuBase.displayName = "AMenuBase";

export default AMenuBase;
