interface KeyDownProps {
  targetKeys: string[];
  onKeydown: () => void;
  isEnabled: boolean;
}

declare const useKeydown: (props: KeyDownProps) => unknown;

export default useKeydown;
