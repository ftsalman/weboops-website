import React, { useState, useEffect } from "react";
import { IconCross, IconHamburger } from "../../assets/icons/InterfaceIcons";
import { motion, AnimatePresence } from "framer-motion";

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const NavLinks = [
    { name: "Home", path: "#home" },
    { name: "About", path: "#about" },
    { name: "Service", path: "#service" },
    { name: "Portfolio", path: "#portfolio" },
    { name: "FAQ", path: "#faq" },
    { name: "Contact", path: "#contact" },
  ];

  // Smooth scroll function
  const handleSmoothScroll = (hash) => {
    const element = document.querySelector(hash);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  // Close menu on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  // Prevent body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Update active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = NavLinks.map((link) => link.path.substring(1));
      const scrollY = window.pageYOffset + 100;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollY >= offsetTop && scrollY < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      });

      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuVariants = {
    closed: { opacity: 0, y: -50, transition: { duration: 0.3 } },
    open: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  const overlayVariants = {
    closed: { opacity: 0, transition: { duration: 0.2 } },
    open: { opacity: 1, transition: { duration: 0.3 } },
  };

  const handleLinkClick = (path) => {
    setIsOpen(false);
    handleSmoothScroll(path);
  };

  return (
    <nav className="w-full fixed top-6 left-0 z-50" aria-label="Main navigation">
      <div
        className={`max-w-screen-xl mx-auto px-4  md:px-8 h-[64px] flex items-center justify-between rounded-full border backdrop-blur-md transition-colors ${
          scrolled ? "bg-white/20 border-gray-700" : "bg-gray-50/10 border-white/20"
        }`}
      >
        {/* Logo */}
        <div className="flex items-center  justify-center gap-3">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleSmoothScroll("#home");
            }}
            className="text-white font-bold text-lg hover:text-violet-600 transition-colors"
          >
            WEBOOPS
          </a>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-2 text-white font-medium">
          {NavLinks.map((link) => {
            const sectionId = link.path.substring(1);
            const isActive = activeSection === sectionId;

            return (
              <a
                key={link.name}
                href={link.path}
                onClick={(e) => {
                  e.preventDefault();
                  handleSmoothScroll(link.path);
                }}
                className={`py-2 px-4 rounded-full transition-all duration-200 ${
                  isActive
                    ? "text-violet-600 font-semibold bg-white/10"
                    : "hover:text-violet-600"
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle menu"
            className="p-2 rounded-md text-white hover:bg-white/20 transition-colors"
          >
            {isOpen ? <IconCross size="20" /> : <IconHamburger size="20" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              key="overlay"
              variants={overlayVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
              onClick={() => setIsOpen(false)}
              aria-hidden="true"
            />

            {/* Menu Content */}
            <motion.div
              key="menu"
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              id="mobile-menu"
              className="fixed top-[104px] left-4 right-4 bg-[#090014] rounded-2xl border border-violet-600 z-50 md:hidden shadow-lg overflow-hidden"
            >
              <div className="flex flex-col p-2 space-y-1">
                {NavLinks.map((link, index) => {
                  const sectionId = link.path.substring(1);
                  const isActive = activeSection === sectionId;

                  return (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="w-full"
                    >
                      <a
                        href={link.path}
                        onClick={(e) => {
                          e.preventDefault();
                          handleLinkClick(link.path);
                        }}
                        className={`block w-full py-3 px-4 rounded-xl transition-all duration-200 ${
                          isActive
                            ? "text-violet-600 font-semibold bg-blue-50 border border-blue-100"
                            : "text-white hover:text-violet-500 hover:bg-blue-50"
                        }`}
                      >
                        {link.name}
                      </a>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};
