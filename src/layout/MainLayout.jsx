import { Outlet } from "react-router-dom";
import Footer from "../components/shared/Footer";

// Shared Components
import Navbar from "../components/shared/Navbar/Header";

// assets
import bgImg from '../assets/background.jpg';

const MainLayout = () => {

  return (
    <div className="overflow-hidden max-lg:!bg-[#222831] max-lg:!bg-opacity-20 max-lg:!backdrop-blur-lg">
      <Navbar />
      <div className="lg:pt-24 duration-300 overflow-hidden" id="mainLayout">
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
