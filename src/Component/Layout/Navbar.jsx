import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, NavLink } from "react-router";
import { useAuth } from "../../Context/AuthorContext/AuthorContext";
import {
  Home,
  BookOpen,
  Info,
  Mail,
  LogIn,
  User,
  Menu,
  X,
  ChevronDown,
  LayoutGrid,
  Sparkles,
} from "lucide-react";

const Navbar = () => {
  const { user, Logout } = useAuth();
  const isLoggedIn = !!user;
  console.log(user);
  console.log(isLoggedIn);

  const [activeDropdown, setActiveDropdown] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  // ক্যাটাগরি ডাটা (এটি আপনি চাইলে এপিআই থেকেও আনতে পারেন)
  const categories = [
    { name: "Technology", href: "/category/tech" },
    { name: "Programming", href: "/category/programming" },
    { name: "Lifestyle", href: "/category/lifestyle" },
    { name: "Travel", href: "/category/travel" },
  ];
  const menuItems = [
    { name: "Home", icon: <Home size={18} />, href: "/" },
    { name: "Blog", icon: <BookOpen size={18} />, href: "/blog" },
    { name: "About", icon: <Info size={18} />, href: "/about" },
    { name: "Contact", icon: <Mail size={18} />, href: "/contact" },
    {
      name: "Categories",
      icon: <LayoutGrid size={18} />,
      isDropdown: true,
      subItems: [
        { name: "Technology", desc: "Latest gadgets & news", href: "/tech" },
        { name: "Technology", desc: "Latest gadgets & news", href: "/tech" },
        { name: "Programming", desc: "Code, Tips & Tricks", href: "/code" },
        { name: "Programming", desc: "Code, Tips & Tricks", href: "/code" },
        { name: "Lifestyle", desc: "Daily life & health", href: "/life" },
        { name: "Lifestyle", desc: "Daily life & health", href: "/life" },
        { name: "Travel", desc: "Explore the world", href: "/travel" },
        { name: "Travel", desc: "Explore the world", href: "/travel" },
      ],
      href: "#",
    },
  ];

  return (
    <nav className="fixed top-4 left-0 right-0 z-50 px-4">
      {/* Main Container - Glassmorphism Effect */}
      <div className="max-w-7xl mx-auto bg-white/10 backdrop-blur-lg bg-white/15 border border-white/20 rounded-2xl shadow-2xl ">
        <div className="flex items-center justify-between px-6 py-4">
          {/* Logo Section */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent cursor-pointer"
          >
            MyBlog
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <div
                key={item.name}
                onMouseEnter={() =>
                  item.isDropdown && setActiveDropdown(item.name)
                }
                onMouseLeave={() => setActiveDropdown(null)}
                className="relative py-2"
              >
                {/* মেনু আইটেম লজিক: Link বনাম div */}
                {!item.isDropdown ? (
                  <motion.div whileHover={{ y: -2, scale: 1.05 }}>
                    <NavLink
                      to={item.href}
                      className={({ isActive }) =>
                        `flex items-center space-x-2  font-medium  transition-colors ${
                          isActive
                            ? "text-blue-400 border-b-2 border-blue-500 pb-1" // অ্যাক্টিভ হলে এই স্টাইল
                            : "text-gray-200 hover:text-blue-400" // সাধারণ অবস্থায় এই স্টাইল
                        }`
                      }
                    >
                      {item.icon}
                      <span>{item.name}</span>
                    </NavLink>
                  </motion.div>
                ) : (
                  <motion.div
                    whileHover={{ y: -2, scale: 1.05 }}
                    className="flex items-center space-x-2 text-gray-200 font-medium hover:text-blue-400 transition-colors cursor-pointer"
                  >
                    {item.icon}
                    <span>{item.name}</span>
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-300 ${
                        activeDropdown === item.name ? "rotate-180" : ""
                      }`}
                    />
                  </motion.div>
                )}

                {/* গরজিয়াস ড্রপডাউন বক্স */}
                <AnimatePresence>
                  {item.isDropdown && activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 20, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 15, scale: 0.95 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[450px] bg-slate-900/95 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] shadow-2xl p-6 z-50"
                    >
                      <div className="grid grid-cols-2 gap-4">
                        {item.subItems.map((sub, index) => (
                          <Link
                            key={index}
                            to={sub.href}
                            className="p-4 rounded-3xl border border-transparent hover:border-white/10 hover:bg-white/5 transition-all group/item block"
                          >
                            <div className="text-blue-400 font-bold mb-1 flex items-center space-x-2">
                              <span>{sub.name}</span>
                              <Sparkles
                                size={12}
                                className="opacity-0 group-hover/item:opacity-100 transition-opacity"
                              />
                            </div>
                            <p className="text-[11px] text-gray-400 leading-tight">
                              {sub.desc}
                            </p>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Auth Section (Login or Profile) */}
          <div className="hidden md:flex items-center">
            {isLoggedIn ? (
              <div className="relative">
                {" "}
                {/* এই 'relative' ক্লাসটি খুবই জরুরি */}
                {/* প্রোফাইল বাটন */}
                <motion.div
                  onClick={() => setShowDropdown(!showDropdown)} // ক্লিক করলে টগল হবে
                  className="flex items-center space-x-2 bg-white/20 p-1 pr-3 rounded-full cursor-pointer hover:bg-white/30 transition-all border border-white/10"
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-purple-600 flex items-center justify-center">
                    <User size={18} className="text-white" />
                  </div>
                  <span className="text-white text-sm font-medium">
                    Profile
                  </span>
                  <ChevronDown
                    size={14}
                    className={`text-gray-400 transition-transform ${showDropdown ? "rotate-180" : ""}`}
                  />
                </motion.div>
                {/* এনিমেটেড ড্রপডাউন মেনু */}
                <AnimatePresence>
                  {showDropdown && (
                    <>
                      <div
                        className="fixed w-screen h-screen inset-0 z-40 cursor-default"
                        onClick={() => setShowDropdown(false)}
                      ></div>
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        className="absolute right-0 mt-3 w-48 bg-slate-800/90 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl p-2 z-50"
                      >
                        <ul className="space-y-1">
                          <li className="flex items-center space-x-2 p-2 hover:bg-white/10 rounded-xl cursor-pointer text-gray-200 transition-colors">
                            <User size={16} /> <span>My Profile</span>
                          </li>
                          <li className="flex items-center space-x-2 p-2 hover:bg-white/10 rounded-xl cursor-pointer text-gray-200 transition-colors">
                            <BookOpen size={16} /> <span>My Blogs</span>
                          </li>
                          <hr className="border-white/10 my-1" />
                          <li className="flex items-center hover:bg-red-500/20 rounded-xl cursor-pointer text-red-400 transition-colors">
                            <button
                              onClick={() => {
                                Logout();
                                setShowDropdown(false);
                              }}
                              className="bg-none border-none p-2 flex items-center justify-center space-x-2"
                            >
                              <LogIn size={16} className="rotate-180" />
                              <span>Logout</span>
                            </button>
                          </li>
                        </ul>
                      </motion.div>
                    </>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <NavLink to="/login">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-500 text-white px-5 py-2 rounded-xl font-medium shadow-lg transition-all"
                >
                  <LogIn size={18} />
                  <span>Login</span>
                </motion.button>
              </NavLink>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-1"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden bg-black/40 backdrop-blur-xl border-t border-white/10"
            >
              <div className="flex flex-col p-6 space-y-4">
                {menuItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center space-x-3 text-gray-200 text-lg hover:text-blue-400 transition-colors"
                  >
                    {item.icon}
                    <span>{item.name}</span>
                  </a>
                ))}
                <hr className="border-white/10" />
                {isLoggedIn ? (
                  <Link className="flex items-center space-x-3 text-purple-400 font-bold py-2">
                    <User size={20} />
                    <span>My Profile</span>
                  </Link>
                ) : (
                  <Link
                    to="/login"
                    className="flex items-center space-x-3 text-blue-400 font-bold py-2"
                  >
                    <LogIn size={20} />
                    <span>Login</span>
                  </Link>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
