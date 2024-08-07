export type AInViewProps = React.PropsWithChildren<{
  /**
   * The function to be called when the component
   * toggles entering and exiting the view. An object
   * with an `inView` property is passed.
   */
  onChange?: (...args: any[]) => unknown;
  /**
   * Determines if the `onChange` handler should
   * only be called on the first initial instance
   * of the component being in the view
   */
  triggerOnce?: boolean;
  /**
   * The container of the child component rendered
   * inside of `AInView`. If not passed, it defaults
   * to the browser viewport (specified as `null`).
   * The root should almost always be a scrollable
   * container.
   */
  root?: HTMLElement | null;
  /**
   * A bound you can set on the child component passed
   * to `AInView` as to how munknown margin pixels the
   * trigger should be induced.
   */
  rootMargin?: string;
  /**
   * A value between 0 and 1 which indicates what percentage
   * of the child component should be in the view before
   * the trigger is induced. A value of `0` will trigger
   * when the first pixel enters the view, whereas a value
   * of `1` requires the entire component to be in the view
   * (assuming no `rootMargin` props are passed as well)
   */
  threshold?: number;
}>;
