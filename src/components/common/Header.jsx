"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { IconMenu3, IconX } from "@tabler/icons-react";

const Header = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#exhibitions", label: "Exhibitions" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <>
      <header className="w-full   bg-white/80 backdrop-blur-md shadow-sm fixed top-0 z-50 border-b border-grey-10">
        <div className="max-w-[1400px] mx-auto py-4 px-gutter-mobile md:px-gutter-tablet lg:px-gutter-desktop flex justify-between items-center">
          <Link href="/" className="flex items-center  ">
            <Image
              src="/logo-dark.svg"
              alt="Tetiana Koldunenko"
              width={180}
              height={40}
              className="h-12 w-auto " // keep aspect ratio
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-text text-sm text-grey-80 hover:text-primary-80 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#contact"
              className="bg-primary-80 text-white text-sm px-5 py-2.5 rounded-full font-text font-medium hover:bg-primary-60 active:bg-primary-100 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Get in Touch
            </Link>
          </nav>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden z-50 p-2 hover:bg-grey-10 rounded-lg transition-colors"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileOpen ? (
              <IconX size={28} stroke={2} className="text-grey-100" />
            ) : (
              <IconMenu3 size={28} stroke={2} className="text-grey-100" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <div className="fixed top-0 left-0 w-full h-screen bg-white/95 backdrop-blur-lg z-40 px-6 pt-24 pb-8 flex flex-col items-center space-y-8 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileOpen(false)}
              className="font-text text-lg text-grey-80 hover:text-primary-80 transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#contact"
            onClick={() => setIsMobileOpen(false)}
            className="bg-primary-80 text-white text-base px-8 py-3 rounded-full font-text font-medium hover:bg-primary-60 transition-all duration-300 shadow-lg"
          >
            Get in Touch
          </Link>
        </div>
      )}
    </>
  );
};

export default Header;
