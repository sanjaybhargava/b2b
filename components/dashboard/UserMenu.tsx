"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function UserMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  // Close dropdown on Escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Avatar Circle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-10 h-10 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-full flex items-center justify-center cursor-pointer transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-label="User menu"
      >
        U
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          className="absolute right-0 top-full mt-2 w-56 bg-white rounded-xl shadow-lg py-2 z-50"
          role="menu"
        >
          <Link
            href="/dashboard/change-password"
            className="block px-4 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 transition-colors"
            role="menuitem"
            onClick={() => setIsOpen(false)}
          >
            Change Password
          </Link>
          <Link
            href="/dashboard/support"
            className="block px-4 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 transition-colors"
            role="menuitem"
            onClick={() => setIsOpen(false)}
          >
            Help and Support
          </Link>
          <div className="border-t border-gray-200 my-2" />
          <Link
            href="/"
            className="block px-4 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 transition-colors"
            role="menuitem"
            onClick={() => setIsOpen(false)}
          >
            Logout
          </Link>
        </div>
      )}
    </div>
  );
}
