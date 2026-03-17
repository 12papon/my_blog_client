import Navbar from "./Navbar";
import { Outlet, useLocation } from "react-router";
import Footer from "./Footer";
import { motion, AnimatePresence } from "framer-motion";
//bg-slate-500
//bg-[#030712]
const MainLayout = () => {
  const location = useLocation();
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-800  to-[#030712] ">
      <Navbar />
      {/* <div className="h-20"></div> */}
      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            onAnimationStart={() => window.scrollTo(0, 0)}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
