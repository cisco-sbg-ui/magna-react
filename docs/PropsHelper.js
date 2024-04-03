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

const PropsHelper = ({shouldShowBtn, componentName}) => {
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
    <>
      <AButton
        onClick={() => {
          window.scrollTo(0, 0);
        }}
        className={styleColor}
        style={{
          zIndex: "1",
          height: "44px",
          //background: currentTheme === "dusk" ? "black" : "white",
          boxShadow: "0 1px 12px 0 #6f7680",
          position: "fixed",
          bottom: shouldShowBtn ? "40px" : "0",
          right: "150px",
          opacity: shouldShowBtn ? "1" : "0",
          visibility: shouldShowBtn ? "visible" : "hidden",
          transition: "all .3s ease"
        }}
      >
        Back to Top
      </AButton>
      <AButton
        onClick={() => setIsDrawerOpen(true)}
        className={styleColor}
        style={{
          zIndex: "1",
          height: "44px",
          //background: currentTheme === "dusk" ? "black" : "white",
          boxShadow: "0 1px 12px 0 #6f7680",
          position: "fixed",
          bottom: shouldShowBtn ? "40px" : "0",
          right: "30px",
          opacity: shouldShowBtn ? "1" : "0",
          visibility: shouldShowBtn ? "visible" : "hidden",
          transition: "all .3s ease"
        }}
      >
        Show Props
      </AButton>
      <ADrawer
        className="props-helper-drawer"
        onClose={() => setIsDrawerOpen(false)}
        asModal={false}
        isOpen={isDrawerOpen}
        slideIn="bottom"
      >
        <ADrawerTitle onCloseButtonClick={() => setIsDrawerOpen(false)} />
        <ADrawerContent>
          <h3 className="props-helper-header">{componentName} Props</h3>
          <Props of={componentName} inDrawer />
        </ADrawerContent>
      </ADrawer>
    </>
  );
};

export default PropsHelper;
