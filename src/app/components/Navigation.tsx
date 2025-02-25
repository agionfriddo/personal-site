"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "../providers";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const Navigation = () => {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const links = [
    { href: "/", label: "Home" },
    { href: "/experience", label: "Experience" },
    { href: "/projects", label: "Projects" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  // Animation variants
  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.2 } },
  };

  const menuVariants = {
    hidden: { x: "100%" },
    visible: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
    exit: {
      x: "100%",
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  };

  const linkVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * i,
        duration: 0.3,
      },
    }),
  };

  return (
    <>
      <nav className="sticky top-0 z-50 backdrop-blur-sm bg-primary-light/80 dark:bg-primary-dark/80 border-b border-neutral-light dark:border-neutral-dark">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link
              href="/"
              className="text-lg font-mono font-bold hover:text-accent-dark dark:hover:text-accent-light transition-colors"
            >
              AG
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {links.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className={`relative ${
                    pathname === href
                      ? "text-accent-dark dark:text-accent-light"
                      : "hover:text-accent-dark dark:hover:text-accent-light"
                  } transition-colors`}
                >
                  {pathname === href && (
                    <motion.span
                      layoutId="underline"
                      className="absolute left-0 top-full block h-[2px] w-full bg-accent-dark dark:bg-accent-light"
                    />
                  )}
                  {label}
                </Link>
              ))}
            </div>

            <div className="flex items-center">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-neutral-light dark:hover:bg-neutral-dark transition-colors"
                aria-label={`Switch to ${
                  theme === "light" ? "dark" : "light"
                } mode`}
              >
                {theme === "light" ? "🌙" : "☀️"}
              </button>

              {/* Hamburger Menu Button (Mobile Only) */}
              <button
                onClick={toggleMenu}
                className="ml-2 p-2 md:hidden rounded-full hover:bg-neutral-light dark:hover:bg-neutral-dark transition-colors"
                aria-label="Toggle menu"
                aria-expanded={isMenuOpen}
              >
                <div className="w-6 flex flex-col items-end justify-center gap-1.5">
                  <span className="block h-0.5 bg-primary-dark dark:bg-primary-light w-6"></span>
                  <span className="block h-0.5 bg-primary-dark dark:bg-primary-light w-4"></span>
                  <span className="block h-0.5 bg-primary-dark dark:bg-primary-light w-5"></span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu with Animations - Outside the nav to ensure full-screen coverage */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-[100] bg-primary-dark/50 dark:bg-primary-light/20 md:hidden"
              aria-hidden="true"
              onClick={() => setIsMenuOpen(false)}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={backdropVariants}
            />

            {/* Menu */}
            <motion.div
              ref={menuRef}
              className="fixed inset-y-0 right-0 w-64 z-[101] bg-primary-light dark:bg-primary-dark shadow-lg md:hidden overflow-y-auto"
              aria-hidden={!isMenuOpen}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={menuVariants}
            >
              {/* Close button inside the menu */}
              <div className="absolute top-4 right-4">
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 rounded-full hover:bg-neutral-light dark:hover:bg-neutral-dark transition-colors"
                  aria-label="Close menu"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary-dark dark:text-primary-light"
                  >
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </div>

              <div className="px-4 py-8 flex flex-col space-y-6 mt-12">
                {links.map(({ href, label }, i) => (
                  <motion.div
                    key={href}
                    custom={i}
                    variants={linkVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <Link
                      href={href}
                      className={`text-xl font-medium ${
                        pathname === href
                          ? "text-accent-dark dark:text-accent-light"
                          : "hover:text-accent-dark dark:hover:text-accent-light"
                      } transition-colors`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
