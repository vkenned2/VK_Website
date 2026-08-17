"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

interface NavItem {
  name: string;
  href: string;
  id: string;
}

const NAV_ITEMS: NavItem[] = [
  { name: "About", href: "/#about", id: "about" },
  { name: "Experience", href: "/#experience", id: "experience" },
  { name: "Teaching", href: "/#teaching", id: "teaching" },
  { name: "Awards", href: "/#awards", id: "awards" },
  { name: "Works", href: "/#work", id: "work" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState<string>("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // If on a sub-page (e.g. project detail page), always show navigation
    if (pathname !== "/") {
      setIsVisible(true);
      return;
    }

    const handleScroll = () => {
      const aboutElement = document.getElementById("about");
      if (aboutElement) {
        const rect = aboutElement.getBoundingClientRect();
        // Show navbar once the user scrolls to or past the About section
        setIsVisible(rect.top <= 120);
      } else {
        setIsVisible(window.scrollY > window.innerHeight * 3);
      }

      // Track active section among visible sections
      const sections = [
        { id: "about", el: document.getElementById("about") },
        { id: "experience", el: document.getElementById("experience") },
        { id: "teaching", el: document.getElementById("teaching") },
        { id: "awards", el: document.getElementById("awards") },
        { id: "work", el: document.getElementById("work") },
      ];

      const viewportOffset = window.scrollY + 200;
      let current = "";

      for (const section of sections) {
        if (section.el) {
          const top = section.el.offsetTop;
          const height = section.el.offsetHeight;
          if (viewportOffset >= top && viewportOffset < top + height) {
            current = section.id;
            break;
          }
        }
      }

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setIsMobileMenuOpen(false);
    if (pathname === "/" && href.startsWith("/#")) {
      e.preventDefault();
      const targetId = href.replace("/#", "");
      const elem = document.getElementById(targetId);
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.header
          initial={{ opacity: 0, y: -20, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.96 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="fixed top-4 md:top-6 right-4 md:right-8 lg:right-12 z-50 pointer-events-auto"
        >
          {/* Desktop Navigation Pill Bar */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-1 px-3 py-1.5 rounded-full border bg-[#121212]/85 backdrop-blur-xl border-white/15 shadow-[0_12px_36px_rgba(0,0,0,0.6)] transition-all duration-300"
          >
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === "/" && activeSection === item.id;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`relative px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wider transition-colors duration-200 uppercase ${
                    isActive
                      ? "text-white font-semibold"
                      : "text-zinc-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="active-pill"
                      className="absolute inset-0 bg-white/10 border border-white/20 rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.name}</span>
                </Link>
              );
            })}
            <div className="h-3.5 w-px bg-white/10 mx-1" />
            <a
              href="/Vishal_Kennedy_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-full text-xs font-mono font-medium tracking-wider text-emerald-300 hover:text-white hover:bg-emerald-500/20 border border-emerald-500/30 transition-all duration-200 uppercase"
            >
              Resume
            </a>
          </nav>

          {/* Mobile Navigation Trigger Pill */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#121212]/90 backdrop-blur-xl border border-white/15 text-white shadow-xl focus:outline-none"
            >
              {isMobileMenuOpen ? <X className="w-4 h-4 text-emerald-400" /> : <Menu className="w-4 h-4 text-emerald-400" />}
              <span className="text-xs font-medium uppercase tracking-wider text-zinc-300">
                {isMobileMenuOpen ? "Close" : "Menu"}
              </span>
            </button>

            {/* Mobile Dropdown Panel */}
            <AnimatePresence>
              {isMobileMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-12 right-0 w-48 py-2 rounded-2xl bg-[#161618]/95 backdrop-blur-2xl border border-white/15 shadow-2xl flex flex-col gap-1"
                >
                  {NAV_ITEMS.map((item) => {
                    const isActive = pathname === "/" && activeSection === item.id;
                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={(e) => handleNavClick(e, item.href)}
                        className={`px-4 py-2 text-xs font-medium tracking-wider transition-colors uppercase ${
                          isActive
                            ? "text-emerald-400 font-semibold bg-white/5"
                            : "text-zinc-400 hover:text-white hover:bg-white/5"
                        }`}
                      >
                        {item.name}
                      </Link>
                    );
                  })}
                  <div className="h-px w-full bg-white/10 my-1" />
                  <a
                    href="/Vishal_Kennedy_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-xs font-mono font-medium tracking-wider text-emerald-300 hover:bg-emerald-500/20 transition-colors uppercase"
                  >
                    Download Resume
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.header>
      )}
    </AnimatePresence>
  );
}
