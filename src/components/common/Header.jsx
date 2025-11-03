"use client";

import { useState } from "react";
import Link from "next/link";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import { IconMenu3 } from "@tabler/icons-react";
import { IconMinus } from "@tabler/icons-react";

const Header = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <header className="w-full py-4 px-6 flex justify-between items-center bg-white shadow-sm fixed top-0 z-50">
      <Link href="/">
        <span className="text-lg font-display font-bold text-mainBlue">
          UKRROFING
        </span>
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-6">
        <DesktopMenu />
        <Link
          href="#contact"
          className="bg-mainBlue text-white text-sm px-4 py-2 rounded-full font-medium"
        >
          Get a Free Quote
        </Link>
      </div>
      {/* Mobile Hamburger */}
      <button
        className="md:hidden z-50"
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        aria-label="Toggle mobile menu"
      >
        {isMobileOpen ? (
          <IconMinus size={32} stroke={2} className="text-[#020024]" />
        ) : (
          <IconMenu3 size={32} stroke={2} className="text-[#020024]" />
        )}
      </button>
      {/* Mobile Menu */}
      {isMobileOpen && <MobileMenu onClose={() => setIsMobileOpen(false)} />}
    </header>
  );
};

export default Header;
