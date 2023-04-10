import Highlight, {defaultProps} from "prism-react-renderer";
import theme from "prism-react-renderer/themes/oceanicNext";

const CodeBlock = ({code, children, ...rest}) => {
  return (
    <Highlight
      {...defaultProps}
      code={code?.trim() || children}
      language="jsx"
      theme={theme}
      {...rest}
    >
      {({className, style, tokens, getLineProps, getTokenProps}) => (
        <pre
          className={className}
          style={{
            ...style,
            borderRadius: "6px",
            padding: "20px",
            fontFamily: "SFMono-Regular,Menlo,Monaco,Consolas,monospace"
          }}
        >
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({line, key: i})}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({token, key})} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};

export default CodeBlock;
