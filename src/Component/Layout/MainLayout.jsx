import Navbar from "./Navbar";
import { Outlet } from "react-router";
import Footer from "./Footer";
//bg-slate-500
//bg-[#030712]
const MainLayout = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-800  to-[#030712] ">
      <Navbar />
      <div className="h-20"></div>
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
