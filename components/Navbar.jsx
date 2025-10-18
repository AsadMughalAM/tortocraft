"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-[#3b2f2f] text-[#f5f3ee] shadow-md fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-12">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold tracking-wide">
          TORTO<span className="text-[#c19a6b]">CRAFT</span>
        </Link>

        {/* Desktop Links */}
     <ul className="hidden md:flex space-x-8 text-[16px] font-medium">
  {["Home", "Shop", "About", "Contact"].map((link) => {
    const href = link === "Home" ? "/" : `/${link.toLowerCase()}`;
    return (
      <li key={link}>
        <Link
          href={href}
          className="hover:text-[#c19a6b] transition-colors"
        >
          {link}
        </Link>
      </li>
    );
  })}
</ul>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 rounded-md bg-[#c19a6b] text-[#3b2f2f] hover:bg-[#f5f3ee] hover:text-[#3b2f2f] transition-colors"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

 {/* Mobile Slide-down Menu */}
<div
  className={`md:hidden bg-[#3b2f2f] text-[#f5f3ee] overflow-hidden transition-max-height duration-500 ${
    isOpen ? "max-h-96" : "max-h-0"
  }`}
>
  <ul className="flex flex-col items-center space-y-4 py-4 text-lg font-medium px-4">
    {["Home", "Shop", "About", "Contact"].map((link) => {
      const href = link === "Home" ? "/" : `/${link.toLowerCase()}`;
      return (
        <li key={link} className="w-full border border-[#c19a6b] rounded-lg">
          <Link
            href={href}
            onClick={toggleMenu}
            className="block w-full text-center py-3 hover:bg-[#c19a6b] hover:text-[#3b2f2f] transition-colors rounded-lg"
          >
            {link}
          </Link>
        </li>
      );
    })}
  </ul>
</div>
    </nav>
  );
}
