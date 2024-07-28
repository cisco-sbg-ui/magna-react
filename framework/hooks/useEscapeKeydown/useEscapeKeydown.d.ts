function useEscapeKeydown(parameters: {
  /**
   * If the hook should listen for escape keypresses
   */
  isEnabled: boolean;
  /**
   * Function to be called when the user presses their escape key
   */
  onKeydown: () => void;
}): void;

export default useEscapeKeydown;
