const APageTitleContentLeft = ({
  className: propsClassName,
  children,
  ...rest
}) => {
  let className = "a-page-title-content__left";

  if (propsClassName) {
    className += ` ${propsClassName}`;
  }

  return (
    <div className={className} {...rest}>
      {children}
    </div>
  );
};

APageTitleContentLeft.displayName = "APageTitleContentLeft";

export default APageTitleContentLeft;
