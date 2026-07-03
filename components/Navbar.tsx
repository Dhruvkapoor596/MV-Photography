"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="w-full relative z-50">
      
      {/* Navbar Content */}
      <div className="grid grid-cols-[1fr_auto_1fr] items-center py-0 px-8 md:px-16 lg:px-32">
        
        {/* Left: Brand Text */}
        <Link href="/" onClick={closeMenu} className="justify-self-start">
          <h1 className="font-serif text-3xl md:text-4xl font-medium tracking-wide text-[#2C2C2C]">
            Captured By Mohit
          </h1>
        </Link>
        
        {/* Center: Tall Vertical Logo */}
        <Link href="/" onClick={closeMenu} className="justify-self-center px-4 -mb-12 mt-2 z-20">
          <Image 
            src="/logo-4.png" 
            alt="Logo"
            width={100}
            height={200}
            className="w-20 md:w-24 h-auto object-contain"
            priority
          />
        </Link>
        
        {/* Right: Desktop Nav */}
        <nav className="hidden md:flex gap-8 text-sm uppercase tracking-widest text-[#71717A] justify-self-end">
          <Link href="/about" className="hover:text-[#2C2C2C]">About</Link>
          <Link href="/portfolio" className="hover:text-[#2C2C2C]">Portfolio</Link>
          <Link href="/projects" className="hover:text-[#2C2C2C]">Projects</Link>
          <Link href="/contact" className="hover:text-[#2C2C2C]">Contact</Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden justify-self-end p-2" onClick={toggleMenu}>
          Menu
        </button>
      </div>

      {/* Mobile Nav Menu */}
      {isMenuOpen && (
        <div className="md:hidden flex flex-col gap-4 py-8 px-8 bg-white border-b border-[#EAE8E1]">
          <Link href="/about" onClick={closeMenu}>About</Link>
          <Link href="/portfolio" onClick={closeMenu}>Portfolio</Link>
          <Link href="/projects" onClick={closeMenu}>Projects</Link>
          <Link href="/contact" onClick={closeMenu}>Contact</Link>
        </div>
      )}

      {/* Raised Separator Line */}
      <div className="flex items-center w-full">
        <div className="flex-1 h-[1px] bg-[#EAE8E1]"></div>
        <div className="w-24 md:w-32"></div> 
        <div className="flex-1 h-[1px] bg-[#EAE8E1]"></div>
      </div>
    </header>
  );
}