import { Outlet } from "react-router-dom";

import Footer from "../components/Footer";
import Switcher from "../components/Switcher";
// import Navbar from "../components/Navbar";
import NavFixed from "../components/Navbar/NavFixed";

const LayOut = () => {
  return (
    <>
      {/* <Navbar /> */}
      <NavFixed />
      <Outlet />
      <Footer />
      <Switcher />
    </>
  );
};

export default LayOut;
