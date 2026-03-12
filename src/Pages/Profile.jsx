import { motion, AnimatePresence } from "framer-motion";
import OutputTabs from "../Component/Common/Tabs/OutputTabs";
import SkillStack from "../Component/Common/Profile/Skills/SkillStack";
import AwardWon from "../Component/Common/Profile/AwardWon/AwardWon";
import ProjectDone from "../Component/Common/Profile/ProjectDone/ProjectDone";
import AboutMe from "../Component/Common/Profile/About/AboutMe";
import Card from "../Component/Common/Profile/Card/Card";
const Profile = () => {
  // এনিমেশন ভ্যারিয়েন্ট
  const containerVars = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  return (
    <div className="min-h-screen bg-[#020617] text-white md:pt-40 pt-25 pb-10 px-4 sm:px-6 lg:px-8 overflow-hidden relative">
      {/* Background Animated Blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/20 rounded-full blur-[120px] animate-pulse" />

      <motion.div
        variants={containerVars}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 relative z-10"
      >
        {/* --- Left Column: Main Profile Card (4 Columns) --- */}
        <Card />
        {/* --- Right Column: Bento Grid (8 Columns) --- */}
        <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Bio Box */}
          <AboutMe />
          {/* Stats Boxes */}
          <ProjectDone />
          <AwardWon />
          {/* Skills / Tech Stack */}
          <SkillStack />
        </div>
        {/* --- Interactive Tabs Section --- */}
        <OutputTabs />
      </motion.div>
    </div>
  );
};

export default Profile;
