import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  }, [location]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white ${
        isScrolled ? "shadow-md" : ""
      }`}
    >
      <nav className="max-w-7xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20 w-full">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img
              src="/images/logo.png"
              alt="Edusphere Official Logo"
              className="h-12 w-12 md:h-14 md:w-14 object-contain"
            />
            <div className="flex flex-col">
              <span className="text-xl md:text-2xl font-bold text-[#2E75B6]">
                EDUSPHERE
              </span>
              <span className="text-xs text-gray-600 hidden sm:block">
                Beyond Books Into Reality
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-gray-700 hover:text-[#2E75B6] transition-colors font-medium"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-[#2E75B6] transition-colors font-medium"
            >
              About
            </Link>
            <Link
              to="/advisory-committee"
              className="text-gray-700 hover:text-[#2E75B6] transition-colors font-medium"
            >
              Advisory Committee
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className="flex items-center space-x-1 text-gray-700 hover:text-[#2E75B6] transition-colors font-medium">
                <span>Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg py-2 border border-gray-100"
                  >
                    <Link
                      to="/services/professional"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#2E75B6] transition-colors"
                    >
                      Professional Development
                    </Link>
                    <Link
                      to="/services/academic"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#2E75B6] transition-colors"
                    >
                      Academic Services
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              to="/courses"
              className="text-gray-700 hover:text-[#2E75B6] transition-colors font-medium"
            >
              Courses
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-[#2E75B6] transition-colors font-medium"
            >
              Contact
            </Link>
            <Link
              to="/register"
              className="bg-[#E74C3C] text-white px-6 py-2 rounded hover:bg-[#c0392b] transition-colors font-medium"
            >
              Register Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 md:hidden"
              style={{ top: isScrolled ? "64px" : "64px" }}
              onClick={() => setIsMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-16 right-0 bottom-0 w-64 bg-white shadow-lg md:hidden overflow-y-auto"
            >
              <div className="flex flex-col p-6 space-y-4">
                <Link
                  to="/"
                  className="text-gray-700 hover:text-[#2E75B6] transition-colors font-medium py-2"
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className="text-gray-700 hover:text-[#2E75B6] transition-colors font-medium py-2"
                >
                  About
                </Link>
                <Link
                  to="/advisory-committee"
                  className="text-gray-700 hover:text-[#2E75B6] transition-colors font-medium py-2"
                >
                  Advisory Committee
                </Link>

                <div className="py-2">
                  <button
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    className="flex items-center justify-between w-full text-gray-700 font-medium"
                  >
                    <span>Services</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        isServicesOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {isServicesOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="pl-4 mt-2 space-y-2">
                          <Link
                            to="/services/professional"
                            className="block text-gray-600 hover:text-[#2E75B6] transition-colors py-1"
                          >
                            Professional Development
                          </Link>
                          <Link
                            to="/services/academic"
                            className="block text-gray-600 hover:text-[#2E75B6] transition-colors py-1"
                          >
                            Academic Services
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link
                  to="/courses"
                  className="text-gray-700 hover:text-[#2E75B6] transition-colors font-medium py-2"
                >
                  Courses
                </Link>
                <Link
                  to="/contact"
                  className="text-gray-700 hover:text-[#2E75B6] transition-colors font-medium py-2"
                >
                  Contact
                </Link>
                <Link
                  to="/register"
                  className="bg-[#E74C3C] text-white px-6 py-3 rounded text-center hover:bg-[#c0392b] transition-colors font-medium mt-4"
                >
                  Register Now
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}