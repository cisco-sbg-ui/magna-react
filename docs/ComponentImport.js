import CodeBlock from "./CodeBlock";

const ComponentImport = ({components}) => {
  const isLarge = Array.isArray(components) && components.length > 3;
  const componentImports = Array.isArray(components)
    ? components.join(isLarge ? ", \n  " : ", ")
    : components;

  const startBracket = isLarge ? "{\n  " : "{ ";
  const endBracket = isLarge ? "\n}" : " }";

  let importStatement = `import ${startBracket}${componentImports}${endBracket} from '@cisco-sbg-ui/magna-react'`;

  return <CodeBlock code={importStatement} />;
};

export default ComponentImport;
