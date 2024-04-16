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
  const styleColor =
    currentTheme === "dusk"
      ? "mds-neutral--neutral-17 mds-blue--blue-3--text"
      : "mds-neutral--neutral-1 mds-blue--blue-12--text";

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
        className={styleColor}
        style={{
          boxShadow: "0 1px 12px 0 #6f7680"
        }}
      >
        Back to Top
      </AButton>
      {components && (
        <AButton
          onClick={() => setIsDrawerOpen(true)}
          className={styleColor}
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
          <ADrawerTitle onCloseButtonClick={() => setIsDrawerOpen(false)} />
          <ADrawerContent>
            {components.split(", ").map((c) => {
              return (
                <>
                  <h3 className="props-helper-header">{c} Props</h3>
                  <Props of={c} inDrawer />
                </>
              );
            })}
          </ADrawerContent>
        </ADrawer>
      )}
    </div>
  );
};

export default PropsHelper;
