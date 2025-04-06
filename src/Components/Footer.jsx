"use client";
import { motion } from "framer-motion";
import { Instagram, Youtube, Send } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-gray-300 pt-20 pb-10 px-6 md:px-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-start text-center md:text-left relative z-10">
        
        {/* Brand / Logo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-white text-3xl font-extrabold tracking-wider">
            JIMMY TURNER
          </h3>
          <p className="text-sm mt-3 text-gray-500 leading-relaxed max-w-xs">
            Crafting impactful edits, one frame at a time. Let's make your story unforgettable.
          </p>
        </motion.div>

        {/* Navigation */}
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h4 className="text-white text-lg font-semibold">Quick Links</h4>
          <ul className="text-sm space-y-2">
            <li><a href="#portfolio" className="hover:text-purple-400 transition">My Work</a></li>
            <li><a href="#testimonials" className="hover:text-purple-400 transition">Testimonials</a></li>
            <li><a href="#contact" className="hover:text-purple-400 transition">Contact</a></li>
          </ul>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h4 className="text-white text-lg font-semibold">Socials</h4>
          <div className="flex justify-center md:justify-start gap-6">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-pink-500 transition hover:scale-110"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-red-500 transition hover:scale-110"
            >
              <Youtube className="w-5 h-5" />
            </a>
            <a
              href="mailto:hello@jimmyedits.com"
              className="text-white hover:text-blue-400 transition hover:scale-110"
            >
              <Send className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Clean Bottom Line */}
      <div className="mt-16 border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Jimmy Turner — Crafted with precision ✂️
      </div>
    </footer>
  );
}
