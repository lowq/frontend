import { Outlet } from "react-router-dom";
import TopNavbar from "../../components/navbar/TopNavbar";
import Footer from "../../components/footer/Footer";

const HomeLayout = () => {
  return (
    <div className="bg-jump bg-auto bg-repeat-y md:bg-no-repeat md:bg-cover w-screen md:h-screen overflow-visible md:overflow-hidden">
      <TopNavbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default HomeLayout