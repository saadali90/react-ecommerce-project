import { Outlet } from "react-router-dom";
import MainFooter from "./footer/MainFooter";
import HeaderTop from "./header/HeaderTop";
import MainNavigation from "./header/MainNavigation";

const Layout = (props) => {
  return (
    <>
      <HeaderTop />
      <MainNavigation />
      <Outlet />
      <MainFooter />
    </>
  );
};

export default Layout;
