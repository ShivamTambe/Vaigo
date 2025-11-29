import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { Menu, X, ShoppingCart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/vaigo-center", label: "Vaigo Center" },
    { path: "/products", label: "Products" },
    { path: "/solutions", label: "Solutions" },
    { path: "/technology", label: "Technology" },
    { path: "/markets", label: "Markets" },
    { path: "/contact", label: "Contact" },
  ];

  // Detect scroll for sticky navbar effects
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className={`backdrop-blur-md sticky top-0 z-50 border-b transition-all ${scrolled ? "bg-white/90 shadow-md" : "bg-white/70"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Nav Inner */}
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group cursor-pointer">
            <div className="w-24 h-16 sm:w-28 sm:h-16 p-1 flex items-center justify-center overflow-hidden">
              <img
                src="https://res.cloudinary.com/dverfj5ad/image/upload/v1764227083/vaigo/partnership/vagfmxvhtoh61vd2owm3.png"
                alt="Vaigo Logo"
                className="w-full h-full object-contain group-hover:scale-105 transition duration-300"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">

            {navItems.map((item, index) => (
              <motion.div
                key={item.path}
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Link
                  to={item.path}
                  className={`relative py-1 transition-colors duration-200 ${location.pathname === item.path
                      ? "text-green-600 font-semibold"
                      : "text-gray-700 hover:text-green-600"
                    }`}
                >
                  {item.label}

                  {/* Animated underline */}
                  <span
                    className={`absolute left-0 bottom-0 h-[2px] bg-green-600 transition-all duration-300 ${location.pathname === item.path
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                      }`}
                  ></span>
                </Link>
              </motion.div>
            ))}

            {/* <Link to="/contact">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                <Button className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 font-medium">
                  Request Demo
                </Button>
              </motion.div>
            </Link> */}

            <a
              href="/coming-soon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                <Button className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 font-medium flex items-center gap-2">
                  <ShoppingCart size={20} strokeWidth={2.2} />
                  <span>Shop</span>
                </Button>
              </motion.div>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <motion.button
              whileTap={{ scale: 0.9 }}
              className="p-2"
              onClick={() => setIsMenuOpen((prev) => !prev)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-white/95 backdrop-blur-md border-t border-green-100 shadow-sm rounded-b-lg"
            >
              <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">

                {navItems.map((item) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <Link
                      to={item.path}
                      onClick={() => setIsMenuOpen(false)}
                      className={`block px-3 py-2 rounded-md transition-all ${location.pathname === item.path
                          ? "text-green-600 bg-green-50 font-semibold"
                          : "text-gray-700 hover:text-green-600 hover:bg-green-50"
                        }`}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}

                {/* <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                    <Button className="w-full bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 font-medium mt-2">
                      Request Demo
                    </Button>
                  </Link>
                </motion.div> */}
                <a
              href="/coming-soon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                <Button className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 font-medium flex items-center gap-2">
                  <ShoppingCart size={20} strokeWidth={2.2} />
                  <span>Shop</span>
                </Button>
              </motion.div>
            </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </motion.nav>
  );
}
