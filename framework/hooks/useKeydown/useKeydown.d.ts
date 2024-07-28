interface KeyDownProps {
  targetKeys: string[];
  onKeydown: () => void;
  isEnabled: boolean;
}

declare const useOutsideClick: (props: KeyDownProps) => unknown;

export default useKeydown;
