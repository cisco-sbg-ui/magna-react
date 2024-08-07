export type AToastPlateProps = React.ComponentPropsWithRef<"div">;

export type UseAToasterType = {
  addToast: (props: any, customTimeout?: any) => void;
  removeToast: (id: any) => void;
};
