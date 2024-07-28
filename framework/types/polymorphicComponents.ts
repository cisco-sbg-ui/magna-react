// solution for polymorphic component
// based on https://blog.logrocket.com/build-strongly-typed-polymorphic-components-react-typescript/

type ComponentProp<
  ComponentType extends React.ElementType,
  ComponentPropName extends string
> = {
  [key in ComponentPropName]?: ComponentType;
};

type PropsToOmit<
  ComponentType extends React.ElementType,
  ComponentPropName extends string,
  PropsToOmitObj extends Record<string, unknown>
> = keyof (ComponentProp<ComponentType, ComponentPropName> & PropsToOmitObj);

export type PolymorphicComponentProp<
  ComponentType extends React.ElementType,
  ComponentPropName extends string,
  PropsToOmitObj extends Record<string, unknown>
> = React.PropsWithChildren<
  PropsToOmitObj & ComponentProp<ComponentType, ComponentPropName>
> &
  Omit<
    React.ComponentPropsWithoutRef<ComponentType>,
    PropsToOmit<ComponentType, ComponentPropName, PropsToOmitObj>
  >;

type PolymorphicRef<ComponentType extends React.ElementType> =
  React.ComponentPropsWithRef<ComponentType>["ref"];

export type PolymorphicComponentPropWithRef<
  ComponentType extends React.ElementType,
  ComponentPropName extends string,
  PropsToOmitObj extends Record<string, unknown>
> = PolymorphicComponentProp<
  ComponentType,
  ComponentPropName,
  PropsToOmitObj
> & {
  ref?: PolymorphicRef<ComponentType>;
};
