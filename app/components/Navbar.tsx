"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const NAV_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const RESUME_URL = "/resume.pdf";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    // Set the initial state correctly if the page loads while already scrolled.
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-white/90 shadow-md backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo / name */}
        <a href="#top" className="flex items-center gap-2">
          <Image
            src="/profile-placeholder.jpg"
            alt="Your Name"
            width={36}
            height={36}
            className="rounded-full object-cover"
          />
          <span className="text-lg font-semibold">M.Arslan</span>
        </a>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-sm font-medium text-gray-700 transition-colors hover:text-black
                after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full
                after:origin-left after:scale-x-0 after:bg-black after:transition-transform
                after:duration-200 hover:after:scale-x-100"
            >
              {link.label}
            </a>
          ))}

          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-black px-4 py-2 text-sm font-medium
              transition-colors duration-200 hover:bg-black hover:text-white"
          >
            Resume
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="flex h-8 w-8 flex-col items-center justify-center gap-1.5 md:hidden"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-navigation"
        >
          <span
            className={`block h-0.5 w-6 bg-black transition-transform duration-300 ${
              isMobileMenuOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-black transition-opacity duration-300 ${
              isMobileMenuOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-black transition-transform duration-300 ${
              isMobileMenuOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile navigation */}
      <div
        id="mobile-navigation"
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          isMobileMenuOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="flex flex-col gap-4 bg-white/95 px-6 pb-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-base font-medium text-gray-800"
            >
              {link.label}
            </a>
          ))}

          {/* Fixed malformed Resume <a> element */}
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-base font-medium underline"
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
}
