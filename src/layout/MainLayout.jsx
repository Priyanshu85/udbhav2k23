import { Outlet } from "react-router-dom";
import Footer from "../components/shared/Footer";

// Shared Components
import Navbar from "../components/shared/Navbar";

const MainLayout = () => {
  return (
    <div className="">
      {/* <Navbar /> */}
      <Outlet />
      <Footer /> 
    </div>
  );
};

export default MainLayout;
