import {useState} from "react";
import {
  AButton,
  ADrawer,
  ADrawerContent,
  useATheme,
  useEscapeKeydown
} from "../framework";
import Props from "./Props";

const PropsHelper = ({shouldShowBtn, currentDoc}) => {
  const {components} = currentDoc;
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
          console.log(document.getElementById("component-page"));
          document.getElementById("component-page").scrollTo(0, 0);
          document.getElementById("component-page").scrollTop = 0;
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
        style={{
          zIndex: "2",
          boxShadow: "0 1px 12px 0 #6f7680",
          overflowY: "auto"
        }}
        onClose={() => setIsDrawerOpen(false)}
        asModal={false}
        isOpen={isDrawerOpen}
        slideIn="bottom"
      >
        <ADrawerContent>
          {components.split(", ").map((c) => (
            <span key={c}>
              <h3 className="props-helper-header">{c} Props</h3>
              <Props of={c} />
            </span>
          ))}
        </ADrawerContent>
      </ADrawer>
    </>
  );
};

export default PropsHelper;
