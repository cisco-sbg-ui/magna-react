import {useState} from "react";
import {
  AButton,
  ADrawer,
  ADrawerContent,
  ADrawerTitle,
  useATheme,
  useEscapeKeydown
} from "../framework";
import Props from "./Props";

const PropsHelper = ({shouldShowBtn, componentName, components}) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  useEscapeKeydown({
    isEnabled: isDrawerOpen,
    onKeydown: () => setIsDrawerOpen(false)
  });
  const {currentTheme} = useATheme();

  return (
    <div
      className="props-helper"
      style={{
        visibility: shouldShowBtn ? "visible" : "hidden",
        opacity: shouldShowBtn ? 1 : 0
      }}
    >
      <AButton
        onClick={() => {
          document.getElementById("component-page").scrollTop = 0;
        }}
        style={{
          boxShadow: "0 1px 12px 0 #6f7680"
        }}
      >
        Back to Top
      </AButton>
      {components && (
        <AButton
          onClick={() => setIsDrawerOpen(true)}
          style={{
            zIndex: "1",
            boxShadow: "0 1px 12px 0 #6f7680"
          }}
        >
          Show Props
        </AButton>
      )}
      {components && (
        <ADrawer
          className="props-helper-drawer"
          onClose={() => setIsDrawerOpen(false)}
          asModal={false}
          isOpen={isDrawerOpen}
          slideIn="bottom"
        >
          <ADrawerTitle />
          <ADrawerContent>
            {components.split(", ").map((c) => {
              return (
                <span key={c}>
                  <h3 className="props-helper-header">{c} Props</h3>
                  <Props of={c} inDrawer />
                </span>
              );
            })}
          </ADrawerContent>
        </ADrawer>
      )}
    </div>
  );
};

export default PropsHelper;
