import { createBrowserRouter } from "react-router";
import MainLayout from "../Component/Layout/MainLayout";
import { PublicRoute, PrivateRoute } from "./RouteGurd";
import Home from "../Pages/Home";
import Blog from "../Pages/Blog";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import NotFound from "../Pages/NotFound";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      // ১. সবার জন্য খোলা (লগইন থাকুক বা না থাকুক সবাই দেখবে)
      { index: true, element: <Home /> },
      { path: "blog", element: <Blog /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      // ২. শুধুমাত্র যারা লগইন নেই তাদের জন্য (Public Guard)
      {
        element: <PublicRoute />,
        children: [
          { path: "login", element: <Login /> },
          { path: "signup", element: <Signup /> },
        ],
      },
      // ৩. শুধুমাত্র যারা লগইন আছে তাদের জন্য (Private Guard)
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
