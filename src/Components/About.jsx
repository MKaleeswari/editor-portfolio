"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="bg-[#0d0d0d] text-white px-6 md:px-20 py-20">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <motion.h2
          className="text-3xl md:text-5xl font-bold"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        <motion.p
          className="text-gray-400 text-lg leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          I’m Jimmy Turner, a video editor with over <span className="text-white font-semibold">7 years</span> of experience transforming raw footage into stunning visual stories. Whether it’s cinematic wedding films, fast-paced YouTube edits, or sleek brand promos — I bring a clean, modern touch that keeps your audience hooked.
        </motion.p>

        <motion.p
          className="text-gray-400 text-lg leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          I work primarily with <span className="text-white font-medium">Adobe Premiere Pro</span> and <span className="text-white font-medium">After Effects</span>, combining technical precision with storytelling finesse. Beyond tools, I believe in bringing energy, rhythm, and emotion to every frame.
        </motion.p>

        <motion.p
          className="text-gray-400 text-lg leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          Let’s create something unforgettable — together.
        </motion.p>
      </div>
    </section>
  );
}
