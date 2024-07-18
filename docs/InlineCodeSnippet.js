import Highlight, {defaultProps} from "prism-react-renderer";

import theme from "prism-react-renderer/themes/oceanicNext";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const InlineCodeSnippet = ({code, fullWidthPreview, noInline, children}) => {
  return (
    <Highlight
      {...defaultProps}
      code={code || children}
      language="jsx"
      theme={theme}
    >
      {({className, style, tokens, getLineProps, getTokenProps}) => (
        <code
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
        </code>
      )}
    </Highlight>
  );
};

export default InlineCodeSnippet;
