import {AButton, AIcon, ARow, useATheme} from "../framework";
import ThemeSwitcher from "./ThemeSwitcher";

const Header = (props) => {
  const {isDark} = useATheme();
  return (
    <ARow
      className={`px-6 py-2 ${
        isDark ? "mds-neutral--neutral-16" : "mds-neutral--neutral-1"
      }`}
      noGutters
      style={{
        borderBottom: isDark
          ? "0.0625rem solid rgb(20, 21, 23)"
          : "0.0625rem solid #e9ecef",
        width: "100%",
        position: "sticky",
        top: "0",
        zIndex: "4"
      }}
    >
      <div
        className="d-flex justify-space-between align-center"
        style={{
          height: "50px",
          width: "100%",
          zIndex: "9"
        }}
      >
        <h1 className="ma-0" style={{fontSize: "2rem"}}>
          <AButton className="pa-0 mr-1" tertiaryAlt icon href="/">
            <AIcon size={24} className="mds-blue--blue-10--text">
              circle
            </AIcon>
          </AButton>{" "}
          Magna-React
        </h1>
        <div>
          <AButton
            href="https://github.com/cisco-sbg-ui/magna-react"
            icon
            tertiary
          >
            <AIcon
              className={
                isDark
                  ? "mds-neutral--neutral-5--text"
                  : "mds-neutral--neutral-14--text"
              }
              size={24}
            >
              code
            </AIcon>
          </AButton>
          <ThemeSwitcher style={{alignSelf: "flex-end"}} />
        </div>
      </div>
    </ARow>
  );
};

export default Header;
