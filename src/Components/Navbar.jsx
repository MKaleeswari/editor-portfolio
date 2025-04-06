"use client";

import { Menu, X, Instagram, Youtube, Send } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { icon: <Instagram size={18} />, href: "https://instagram.com" },
    { icon: <Send size={18} />, href: "https://t.me/yourusername" },
    { icon: <Youtube size={18} />, href: "https://youtube.com" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-20 py-4 text-white">
        {/* Logo */}
        <h1 className="text-xl font-bold tracking-wide">JIMMY TURNER</h1>

        {/* Desktop Nav Centered */}
        <nav className="hidden md:flex flex-1 justify-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium hover:text-purple-400 transition"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Social Icons */}
        <div className="hidden md:flex space-x-4 items-center">
          {socialLinks.map(({ icon, href }, idx) => (
            <a key={idx} href={href} target="_blank" rel="noopener noreferrer" className="hover:text-purple-400">
              {icon}
            </a>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Nav */}
      {isOpen && (
        <div className="md:hidden bg-black px-6 pb-6 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="block text-sm font-medium hover:text-purple-400 transition"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="flex space-x-4 pt-4 border-t border-white/10">
            {socialLinks.map(({ icon, href }, idx) => (
              <a key={idx} href={href} target="_blank" rel="noopener noreferrer">
                {icon}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
