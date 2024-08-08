export type ANetworkValueProps = {
  /**
   * Show a copy button next to the value
   */
  copyButton?: boolean;
  /**
   * Value to copy, if different from `children`
   */
  copyValue?: string;
  /**
   * What is to be displayed
   */
  children: React.ReactNode;
};
