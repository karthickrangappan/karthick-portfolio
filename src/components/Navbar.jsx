import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

function cn(...inputs) {
  return inputs.filter(Boolean).join(" ");
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Highlight the section currently visible
      const sections = navLinks
        .map((link) => document.getElementById(link.href.slice(1)))
        .filter(Boolean);

      let currentSection = "home";

      for (const section of sections) {
        const rect = section.getBoundingClientRect();

        if (rect.top <= 150 && rect.bottom > 150) {
          currentSection = section.id;
          break;
        }
      }

      // Handle the bottom of the page
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 5
      ) {
        currentSection = "contact";
      }

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (section) => {
    setActiveSection(section);
    setIsOpen(false);
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled ? "mx-4 mt-3 rounded-2xl" : "bg-transparent py-2"
      )}
      style={
        scrolled
          ? {
              background: "rgba(255, 255, 255, 0.92)",
              backdropFilter: "blur(24px)",
              border: "1px solid rgba(124, 92, 252, 0.18)",
              boxShadow:
                "0 4px 32px rgba(0,0,0,0.12), 0 0 0 1px rgba(124,92,252,0.08)",
            }
          : {}
      }
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-24 xl:px-32 flex justify-between items-center py-3 lg:py-4">
        {/* Logo */}
        <motion.a
          href="#home"
          onClick={() => handleNavClick("home")}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2 sm:gap-3 font-bold text-base sm:text-lg lg:text-xl"
          style={{ fontFamily: "Syne, sans-serif" }}
        >
          <div
            className="w-7 h-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9 rounded-lg sm:rounded-xl flex items-center justify-center font-black text-white text-sm sm:text-base lg:text-lg"
            style={{
              background: "linear-gradient(135deg, #7c5cfc, #00e5ff)",
              boxShadow: "0 0 20px rgba(124,92,252,0.5)",
            }}
          >
            K
          </div>

          <span className="text-gradient">Karthick R</span>
        </motion.a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-5 lg:gap-8">
          {navLinks.map((link, i) => {
            const section = link.href.slice(1);
            const isActive = activeSection === section;

            return (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => handleNavClick(section)}
                aria-current={isActive ? "location" : undefined}
                className={cn(
                  "text-xs lg:text-sm font-medium relative group py-1 transition-colors duration-300",
                  isActive
                    ? "text-violet-600"
                    : "text-slate-600 hover:text-slate-900"
                )}
                style={{ fontFamily: "DM Sans, sans-serif" }}
              >
                {link.name}

                {/* Active underline */}
                <motion.span
                  className="absolute -bottom-1 left-0 h-0.5 rounded-full"
                  initial={false}
                  animate={{
                    width: isActive ? "100%" : "0%",
                  }}
                  transition={{ duration: 0.3 }}
                  style={{
                    background:
                      "linear-gradient(90deg, #7c5cfc, #00e5ff)",
                  }}
                />
              </motion.a>
            );
          })}

          <a
            href="#contact"
            onClick={() => handleNavClick("contact")}
            className="btn-primary text-white px-4 py-1.5 lg:px-5 lg:py-2 rounded-lg lg:rounded-xl text-xs lg:text-sm font-semibold"
          >
            Hire Me ✦
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          className="md:hidden p-2 rounded-xl transition-colors"
          style={{
            background: "rgba(124,92,252,0.15)",
            border: "1px solid rgba(124,92,252,0.25)",
            color: "#7c5cfc",
          }}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden absolute top-full left-4 right-4 mt-2 rounded-2xl overflow-hidden"
            style={{
              background: "rgba(255,255,255,0.97)",
              border: "1px solid rgba(124,92,252,0.2)",
              boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
            }}
          >
            <div className="p-4 sm:p-6 flex flex-col gap-3 sm:gap-4">
              {navLinks.map((link) => {
                const section = link.href.slice(1);
                const isActive = activeSection === section;

                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => handleNavClick(section)}
                    aria-current={isActive ? "location" : undefined}
                    className={cn(
                      "block w-full py-2 px-3 rounded-lg text-sm sm:text-base font-medium transition-all duration-300",
                      isActive
                        ? "bg-violet-50 text-violet-600 border-l-2 border-violet-500"
                        : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                    )}
                    style={{ fontFamily: "DM Sans, sans-serif" }}
                  >
                    {link.name}
                    {isActive && (
                      <span className="float-right text-violet-500">
                        ●
                      </span>
                    )}
                  </a>
                );
              })}

              <a
                href="#contact"
                onClick={() => handleNavClick("contact")}
                className="btn-primary text-white text-center py-2.5 sm:py-3 rounded-xl font-bold text-sm sm:text-base"
              >
                Hire Me ✦
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
