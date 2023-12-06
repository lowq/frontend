import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import MainLayout from "./pages/layout/MainLayout";
import HomeLayout from "./pages/layout/HomeLayout";
import Foto from "./pages/Foto";
import Events from "./pages/Events";
import Contact from "./pages/Contact";
import { ToastContainer } from "react-toastify";
import Admin from "./pages/Admin";
import AdminLayout from "./pages/layout/AdminLayout";
import AddFoto from "./components/admin/AddFoto";
import AddNovinka from "./components/admin/AddNovinka";
import AddPodujatie from "./components/admin/AddPodujatie";

import "react-toastify/dist/ReactToastify.css";

const router = createBrowserRouter([
  {
    element: <HomeLayout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
    ],
  },
  {
    element: <MainLayout />,
    children: [
      {
        path: "/foto",
        element: <Foto />,
      },
      {
        path: "/events",
        element: <Events />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
  {
    path: "admin",
    element: (
      <AdminLayout>
        <Admin />
      </AdminLayout>
    ),
    children: [
      {
        path: "addFoto",
        element: <AddFoto />,
      },
      {
        path: "addNew",
        element: <AddNovinka />,
      },
      {
        path: "addEvent",
        element: <AddPodujatie />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
