import { Outlet } from "react-router-dom";
import TopNavbar from "../../components/navbar/TopNavbar";
import Footer from "../../components/footer/Footer";

const MainLayout = () => {
  return (
    <div className="bg-slate-950 bg-cover w-screen h-screen overflow-auto">
      <TopNavbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
