import { Outlet } from "react-router-dom";
import TopNavbar from "../../components/navbar/TopNavbar";
import Footer from "../../components/footer/Footer";

const HomeLayout = () => {
  return (
    <>
    <div className="bg-jump bg-cover w-screen h-screen overflow-hidden">
      <TopNavbar />
      <Outlet />
      <Footer />
    </div>
  </>
  )
}

export default HomeLayout