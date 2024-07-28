declare const useToggle: (
  openDelay?: number,
  closeDelay?: number,
  canOpen?: boolean
) => {
  isOpen: boolean;
  open: () => void;
  close: () => void;
  toggle: () => void;
};

export default useToggle;
