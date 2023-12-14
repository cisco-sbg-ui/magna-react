/**
 * Used inside ADataTable to enable proper styling
 * for infinite scrolling
 */
const ADataTableWrapper = ({
  shouldWrap,
  maxHeight,
  style,
  children,
  ...rest
}) => {
  if (!shouldWrap) {
    return children;
  }

  return (
    <div
      data-testid="table-wrapper"
      style={{
        ...style,
        overflowY: "scroll",
        maxHeight
      }}
      {...rest}
    >
      {children}
    </div>
  );
};
ADataTableWrapper.displayName = "ADataTableWrapper";

export default ADataTableWrapper;
