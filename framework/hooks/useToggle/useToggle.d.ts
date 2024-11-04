declare const useToggle: (
  openDelay?: number,
  closeDelay?: number,
  canOpen?: () => boolean,
  onShow?: () => void,
  onHide?: () => void
) => {
  isOpen: boolean;
  open: () => void;
  close: () => void;
  toggle: () => void;
};

export default useToggle;
