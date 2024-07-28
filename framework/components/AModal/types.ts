import type {PolymorphicComponentPropWithRef} from "../../types";

export type AModalAutoFocusElementRef = null | React.RefObject<HTMLElement>;

export type AModalProps<C extends React.ElementType> =
  PolymorphicComponentPropWithRef<
    C,
    "as",
    {
      "aria-label"?: string;
      /**
       * Where the modal node should be appended to in the DOM.
       */
      appendTo?: HTMLElement;
      /**
       * When the modal is rendered `withTransitions`, there is technically a
       * delay from when you set `isOpen` to `false` to when the component
       * actually unmounts from the DOM. This is done to preserve the transition.
       * You can adjust that delay with this prop.
       */
      delayUnmount?: number;
      /**
       * Determines if the modal is opened or closed.
       */
      isOpen?: boolean;
      /**
       * Sets the modal width to small.
       */
      small?: boolean;
      /**
       * Sets the modal width to medium.
       */
      medium?: boolean;
      /**
       * Sets the modal width to large.
       */
      large?: boolean;
      /**
       * Sets the modal width to extra large.
       */
      xlarge?: boolean;
      /**
       * Handles the request to close the menu.
       */
      onClose: (e: React.MouseEvent<HTMLElement>) => void;
      /**
       * Determines if the content rendered underneath the modal should
       * automatically be centered vertically and horizontally.
       */
      withCenteredContent?: boolean;
      /**
       * Determines if focus should be trapped when the modal is opened.
       */
      withFocusTrap?: boolean;
      /**
       * Specifies what element to autofocus when the modal is opened. By default, when omitted or undefined, the modal root is focused. When null is passed, the modal does not do unknown autofocus.
       */
      autoFocusElementRef?: AModalAutoFocusElementRef;
      /**
       * Determines if the modal should render with an faded backdrop.
       */
      withOverlay?: boolean;
      /**
       * Determines if focus should be "trapped" inside the modal when
       * it is opened (encouraged and recommended).
       */
      withScrollLock?: boolean;
      /**
       * Determines if the modal should open and close with CSS transitions.
       */
      withTransitions?: boolean;
    }
  >;
