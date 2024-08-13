import {AAnchorRef, APlacement, ARef, Override} from "../../types";

export type AMenuBaseProps = Override<
  React.ComponentPropsWithRef<"div">,
  {
    /**
     * The reference to the menu anchor. Can either be a React ref or a DOMRect object.
     */
    anchorRef: AAnchorRef;
    /**
     * Handles the request to close the menu.
     */
    onClose?: (e: React.MouseEvent<HTMLElement>) => void;
    /**
     * Toggles the `open` state.
     */
    open?: boolean;
    /**
     * The placement of the menu.
     */
    placement?: APlacement;
    /**
     * Toggles the menu pointer.
     */
    pointer?: boolean;
    /**
     * Option to remove the space between the anchor and the menu for bottom placement
     *
     * @defaultValue `false`
     */
    removeSpacer?: boolean;
    /**
     * Flip vertically or horizontally is the menu would otherwise render out of bounds
     */
    useFlipLogic?: boolean;
    style?: React.CSSProperties;
    role?: React.AriaRole;
  }
>;

export type calculateMenuPositionType = {
  combinedRef: ARef;
  appRef: ARef;
  wrapRef: ARef;
  anchorRef: AAnchorRef; // Can be either a React Ref or DOMRect
  placement: APlacement;
  setMenuLeft: React.Dispatch<React.SetStateAction<number>>;
  setMenuTop: React.Dispatch<React.SetStateAction<number>>;
  setInvisible: React.Dispatch<React.SetStateAction<boolean>>;
  removeSpacer: boolean;
  withNewWrappingContext: boolean;
};

export type calculatePointerPositionType = {
  combinedRef: ARef;
  anchorRef: AAnchorRef; // Can be either a React Ref or DOMRect
  pointer?: boolean;
  placement: APlacement;
  setPointerLeft: React.Dispatch<React.SetStateAction<number | null>>;
  setPointerTop: React.Dispatch<React.SetStateAction<number | null>>;
};

export type AMenuFlip = {
  menuPlacement: APlacement;
  checkMenuSpacing: () => void;
};
