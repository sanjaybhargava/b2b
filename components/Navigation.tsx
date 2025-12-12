"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white ${
        isScrolled ? "shadow-md" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="/"
            className="text-xl font-bold text-gray-900 hover:text-emerald-600 transition-colors"
          >
            Bharosa Technoserve
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10">
            <Link
              href="/about"
              className="text-base font-medium text-gray-600 hover:text-emerald-600 transition-colors"
            >
              About
            </Link>
            <Link
              href="/case-study"
              className="text-base font-medium text-gray-600 hover:text-emerald-600 transition-colors"
            >
              Case Study
            </Link>
            <Link
              href="/faq"
              className="text-base font-medium text-gray-600 hover:text-emerald-600 transition-colors"
            >
              FAQ
            </Link>
            <Link
              href="/demo"
              className="px-6 py-2.5 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-700 transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Book a Demo
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2 focus:outline-none"
            aria-label="Toggle menu"
          >
            <span
              className={`w-6 h-0.5 bg-gray-900 transition-all duration-300 ${
                isMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-gray-900 transition-all duration-300 ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-gray-900 transition-all duration-300 ${
                isMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 md:hidden"
            onClick={() => setIsMenuOpen(false)}
          />
          <div className="fixed right-0 top-20 bottom-0 w-72 bg-white z-50 shadow-2xl md:hidden transform transition-transform duration-300">
            <div className="flex flex-col p-8 gap-8">
              <Link
                href="/about"
                className="text-lg font-medium text-gray-700 hover:text-emerald-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/case-study"
                className="text-lg font-medium text-gray-700 hover:text-emerald-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Case Study
              </Link>
              <Link
                href="/faq"
                className="text-lg font-medium text-gray-700 hover:text-emerald-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </Link>
              <Link
                href="/demo"
                className="px-6 py-3 bg-emerald-600 text-white rounded-lg font-semibold text-center shadow-lg hover:bg-emerald-700 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Book a Demo
              </Link>
            </div>
          </div>
        </>
      )}
    </nav>
  );
}
