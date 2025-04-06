"use client";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="bg-[#0d0d0d] text-white px-6 md:px-20 py-24">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-5xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          📮 Let’s Collaborate
        </motion.h2>
        <motion.p
          className="text-gray-400 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Have a project in mind or just want to say hi? Drop me a message and I’ll get back to you within 24 hours.
        </motion.p>

        <form className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="bg-[#1a1a1a] border border-[#333] rounded-lg px-5 py-3 text-sm w-full focus:outline-none focus:border-purple-500 transition"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="bg-[#1a1a1a] border border-[#333] rounded-lg px-5 py-3 text-sm w-full focus:outline-none focus:border-purple-500 transition"
              required
            />
          </div>
          <input
            type="text"
            placeholder="Subject"
            className="bg-[#1a1a1a] border border-[#333] rounded-lg px-5 py-3 text-sm w-full focus:outline-none focus:border-purple-500 transition"
          />
          <textarea
            rows={6}
            placeholder="Your Message"
            className="bg-[#1a1a1a] border border-[#333] rounded-lg px-5 py-3 text-sm w-full focus:outline-none focus:border-purple-500 transition"
            required
          ></textarea>
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            className="bg-purple-600 hover:bg-purple-500 text-white font-medium px-8 py-3 rounded-full transition"
          >
            Send Message
          </motion.button>
        </form>
      </div>
    </section>
  );
}
