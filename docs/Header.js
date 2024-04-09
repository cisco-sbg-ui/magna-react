import {
  AAlert,
  AButton,
  AIcon,
  ARow,
  useATheme,
  useMediaQuery
} from "../framework";
import ThemeSwitcher from "./ThemeSwitcher";

const Header = ({className, onHamburgerClick}) => {
  const {matches: isMobile} = useMediaQuery("(max-width: 1000px)");
  const {isDark} = useATheme();
  return (
    <>
      <div id="header">
        <AAlert dismissable={false}>
          This documentation is a work in progress for magna-react@2.0. Click{" "}
          <a href="https://magna-react-git-release110-beta17.securex-preview.app/">
            here
          </a>{" "}
          for v1 docs.
        </AAlert>
        <ARow
          className={`${className} py-2 ${
            isDark ? "mds-neutral--neutral-16" : "mds-neutral--neutral-1"
          }`}
          noGutters
          style={{
            borderBottom: isDark
              ? "0.0625rem solid rgb(20, 21, 23)"
              : "0.0625rem solid #e9ecef",
            width: "100%"
          }}
        >
          <div
            className="d-flex justify-space-between align-center row"
            style={{
              height: "50px",
              width: "100%",
              padding: "0 20px"
            }}
          >
            <div className="d-flex align-center">
              {isMobile && (
                <AButton
                  className="pl-0"
                  onClick={onHamburgerClick}
                  icon
                  tertiaryAlt
                >
                  <AIcon size={24}>list</AIcon>
                </AButton>
              )}
              <h1
                className="ma-0"
                style={{fontSize: isMobile ? "1.75rem" : "2rem"}}
              >
                <AButton className="pa-0" tertiaryAlt icon href="/">
                  {/* {!isMobile && (
                <AIcon size={24} className="mds-blue--blue-10--text">
                  circle
                </AIcon>
              )} */}
                </AButton>{" "}
                Magna-React
              </h1>
            </div>
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
            </div>
            <ThemeSwitcher style={{alignSelf: "flex-end", flex: "1 0 auto"}} />
          </div>
        </ARow>
      </div>
    </>
  );
};

export default Header;
