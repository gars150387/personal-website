import { motion, useScroll, useTransform } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const navbarHeight = 64; // Adjust this value if you change the navbar height
      const sectionTop = section.offsetTop - navbarHeight;
      window.scrollTo({
        top: sectionTop,
        behavior: "smooth",
      });
    }
    setIsOpen(false);
  };
  const { scrollY } = useScroll();
  const opacity = useTransform(
    scrollY,
    [0, 600, 650, 660, 670, 680, 690, 750, 799, 800],
    [0, 0, 0, 0, 0, 0.6, 0.7, 0.8, 0.9, 1]
  );
  return (
    <motion.nav
      style={{
        opacity,
        backgroundColor: "transparent",
        backdropFilter: "blur(10px)",
        backgroundImage: "linear-gradient(1deg, white, transparent)",
        S: "30px",
      }}
      className="bg-white shadow-lg fixed w-full z-10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-0 lg:px-0">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <button
              type="button"
              className="m-0 p-0 outline-none border-none text-xl font-[Beba Neue] text-black"
              onClick={() => scrollToSection("home")}
            >
              GARS | Software Developer
            </button>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-[Montserrat]"
              >
                Contact
              </button>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              {isOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-600 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-[Montserrat] w-full text-left"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
