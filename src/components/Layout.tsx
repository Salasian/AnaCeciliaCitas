import { Outlet } from "react-router-dom";
import Nabvar from "./Nabvar";

const Layout = () => {
  return (
    <>
      <Nabvar />
      <Outlet />
    </>
  );
};

export default Layout;
