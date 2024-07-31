interface OutsideClickProps {
  rootRef?: React.RefObject<HTMLElement>;
  onClick: (event: React.MouseEvent) => void;
  isEnabled?: boolean | null;
}

declare const useOutsideClick: (props: OutsideClickProps) => unknown;

export default useOutsideClick;
