import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

// Navigation data structure
const navItems = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About Us",
    dropdown: [
      { label: "About Akoben", link: "/about" },
      // { label: "Story of Akoben", link: "/about/story" },
      { label: "Mission, Vision & Values", link: "/about/mission-vision" },
    ],
  },
  {
    title: "Services",
    dropdown: [
      {
        label: "Acquisition Strategy & Capture Management",
        link: "/services/acquisition-strategy-capture",
      },
      { label: "Proposal and Bidding", link: "/services/proposal-bidding" },
      {
        label: "Compliance & Regulatory Guidance",
        link: "/services/compliance-regulatory",
      },
      { label: "Great Content", link: "/services/great-content" },
      {
        label: "Negotiations & Contract Advisory",
        link: "/services/negotiations-advisory",
      },
      {
        label: "Contract Administration & Lifecycle Support",
        link: "/services/contract-admin-lifecycle",
      },
    ],
  },
  // {
  //   title: "Case Studies",
  //   link: "/case-studies",
  // },
  {
    title: "Resources",
    link: "/resources/blog",
  },
  {
    title: "Contact",
    link: "/contact",
  },
];

// Gold text style
const goldTextStyle = {
  color: "#D4AF37",
  fontWeight: "bold",
  textShadow: "0 0 3px rgba(0, 0, 0, 0.5)",
  WebkitTextStroke: "0.5px #8B7500",
  letterSpacing: "1px",
};

const NavBar = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  // Close mobile menu when screen size changes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleMouseEnter = (title: string) => {
    setActiveDropdown(title);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleMobileDropdown = (title: string) => {
    setMobileDropdown(mobileDropdown === title ? null : title);
  };

  return (
    <motion.header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-secondary shadow-lg py-2"
          : "bg-black/40 backdrop-blur-sm py-4"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="presidential-container flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="flex flex-col items-center"
          >
            <img
              src={scrolled ? "/logo/logo2.jpeg" : "/logo/logo1.jpg"}
              alt="Akoben Consulting Logo"
              className="h-10 md:h-14 object-contain"
            />
            <h1 className="font-playfair font-bold text-xs md:text-sm hidden sm:block mt-1">
              <span style={goldTextStyle}>AKOBEN</span>{" "}
              <span className="text-white">CONSULTING</span>
            </h1>
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6 items-center">
            {navItems.map((item) => (
              <li
                key={item.title}
                onMouseEnter={() => handleMouseEnter(item.title)}
                onMouseLeave={handleMouseLeave}
                className="relative"
              >
                {item.dropdown ? (
                  <>
                    <button className="nav-link flex items-center text-white hover:text-primary font-medium">
                      {item.title}
                      <ChevronDown size={16} className="ml-1" />
                    </button>
                    <AnimatePresence>
                      {activeDropdown === item.title && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute left-0 mt-2 w-64 bg-secondary rounded-md shadow-lg overflow-hidden z-50"
                        >
                          <div className="py-2">
                            {item.dropdown.map((dropdownItem, idx) => (
                              <motion.div
                                key={dropdownItem.label}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{
                                  duration: 0.2,
                                  delay: idx * 0.05,
                                }}
                              >
                                <Link
                                  to={dropdownItem.link}
                                  className="dropdown-link text-secondary-foreground"
                                >
                                  {dropdownItem.label}
                                </Link>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <Link
                    to={item.link || "/"}
                    className="nav-link text-white hover:text-primary font-medium"
                  >
                    {item.title}
                  </Link>
                )}
              </li>
            ))}
            <li>
              <Link
                to="/admin/login"
                className="presidential-button rounded"
                style={{ backgroundColor: "#D4AF37", color: "#000" }}
              >
                Admin Portal
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2 focus:outline-none"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-secondary shadow-lg"
          >
            <nav className="presidential-container py-4">
              <ul className="space-y-4">
                {navItems.map((item) => (
                  <li key={item.title} className="relative">
                    {item.dropdown ? (
                      <div>
                        <button
                          className="w-full text-left flex items-center justify-between text-white hover:text-primary font-medium py-2"
                          onClick={() => toggleMobileDropdown(item.title)}
                        >
                          {item.title}
                          <ChevronDown
                            size={16}
                            className={`transition-transform duration-200 ${
                              mobileDropdown === item.title ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        <AnimatePresence>
                          {mobileDropdown === item.title && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                              className="pl-4 space-y-2 mt-2"
                            >
                              {item.dropdown.map((dropdownItem) => (
                                <Link
                                  key={dropdownItem.label}
                                  to={dropdownItem.link}
                                  className="block py-2 text-secondary-foreground hover:text-primary"
                                  onClick={() => setMobileMenuOpen(false)}
                                >
                                  {dropdownItem.label}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        to={item.link || "/"}
                        className="block py-2 text-white hover:text-primary font-medium"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.title}
                      </Link>
                    )}
                  </li>
                ))}
                <li className="pt-2">
                  <Link
                    to="/admin/login"
                    className="block w-full text-center py-2 presidential-button rounded"
                    style={{ backgroundColor: "#D4AF37", color: "#000" }}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Admin Portal
                  </Link>
                </li>
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default NavBar;
