import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/home" },
    { name: "Blogs", path: "/blogs" },
    { name: "About", path: "/about" },
  ];

  return (
    <motion.nav
      className="w-full sticky top-0 z-50 bg-white shadow-md"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="w-full px-4 md:px-10">

        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link
              to="/home"
              className="text-3xl font-bold text-orange-500"
            >
              Personal Portfolio
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-3">

            {navLinks.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 rounded-lg transition-all duration-300 ${location.pathname === item.path
                  ? "bg-orange-500 text-white"
                  : "text-gray-700 hover:bg-orange-100 hover:text-orange-500"
                  }`}
              >
                {item.name}
              </Link>
            ))}

            <button
              onClick={() => navigate("/login")}
              className="ml-2 px-5 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition"
            >
              Login
            </button>

          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-3xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>

        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden flex flex-col border-t bg-white">

            {navLinks.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className="px-4 py-3 hover:bg-orange-100"
              >
                {item.name}
              </Link>
            ))}

            <button
              onClick={() => {
                navigate("/login");
                setMenuOpen(false);
              }}
              className="m-4 bg-orange-500 text-white py-2 rounded-lg"
            >
              Login
            </button>

          </div>
        )}

      </div>
    </motion.nav>
  );
}

export default Navbar;