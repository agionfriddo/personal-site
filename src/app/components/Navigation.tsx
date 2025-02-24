"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "../providers";
import { motion } from "framer-motion";

const Navigation = () => {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();

  const links = [
    { href: "/", label: "Home" },
    { href: "/experience", label: "Experience" },
    { href: "/projects", label: "Projects" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-sm bg-primary-light/80 dark:bg-primary-dark/80 border-b border-neutral-light dark:border-neutral-dark">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="text-lg font-mono font-bold hover:text-accent-dark dark:hover:text-accent-light transition-colors"
          >
            AG
          </Link>

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

          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-neutral-light dark:hover:bg-neutral-dark transition-colors"
            aria-label={`Switch to ${
              theme === "light" ? "dark" : "light"
            } mode`}
          >
            {theme === "light" ? "🌙" : "☀️"}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
