"use client";
import React from "react";
import Link from "next/link";
import { Instagram, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#3b2f2f] text-[#f5f3ee] pt-16">
      <div className="container mx-auto grid md:grid-cols-4 gap-10 px-6 md:px-12">

        {/* Brand */}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-wide">
            TORTO<span className="text-[#c19a6b]">CRAFT</span>
          </h1>
          <p className="text-sm max-w-xs">
            Premium custom clothing designed for style and comfort. Your fashion, your way.
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-3">
          <h2 className="text-lg font-semibold mb-2">Quick Links</h2>
          <ul className="space-y-1">
            {["Home", "Shop", "About", "Contact"].map((link) => (
              <li key={link}>
                <Link href={`/${link.toLowerCase()}`} className="hover:text-[#c19a6b] transition-colors">
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Policies / Info */}
        <div className="space-y-3">
          <h2 className="text-lg font-semibold mb-2">Info</h2>
          <ul className="space-y-1">
            {["privacypolicy", "Terms of Service", "FAQ"].map((link) => (
              <li key={link}>
                <Link
                  href={`/${link.toLowerCase().replace(/\s+/g, "")}`}
                  className="hover:text-[#c19a6b] transition-colors"
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold mb-2">Follow Us</h2>
          <div className="flex space-x-4">
            <Link href="https://www.instagram.com/tortocraft143/" target="_blank">
              <Instagram size={24} className="hover:text-[#c19a6b] transition-colors" />
            </Link>
           <Link href="mailto:tortocraft415@gmail.com" className="flex items-center gap-2 hover:text-[#c19a6b] transition-colors">
  <Mail size={24} />
  tortocraft415@gmail.com
</Link>
        <Link href="" className="flex items-center gap-2 hover:text-[#c19a6b] transition-colors">
  
         
</Link>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="mt-16 border-t border-[#c19a6b] p-4 text-center text-sm">
        &copy; {new Date().getFullYear()} TORTOCRAFT. All rights reserved.
      </div>
    </footer>
  );
}
