import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import MainLayout from "./pages/layout/MainLayout";
import HomeLayout from "./pages/layout/HomeLayout";
import Foto from "./pages/Foto";
import Events from "./pages/Events";
import Contact from "./pages/Contact";

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
        ]
      }
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
