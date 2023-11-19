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

const router = createBrowserRouter([
  {
    element: <HomeLayout />,
    children: [
      {
        path: "/",
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
      {
        path: "/admin",
        element: <Admin />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer />
    </>
  );
}

export default App;
