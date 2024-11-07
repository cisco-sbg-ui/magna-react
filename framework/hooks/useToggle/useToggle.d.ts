declare const useToggle: (
  openDelay?: number,
  closeDelay?: number,
  canOpen?: () => boolean,
  onOpen?: (() => any) | null,
  onClose?: (() => any) | null
) => {
  isOpen: boolean;
  open: () => void;
  close: () => void;
  toggle: () => void;
};

export default useToggle;
