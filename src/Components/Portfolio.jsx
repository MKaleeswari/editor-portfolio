"use client";
import { motion } from "framer-motion";
import Image from "next/image";

// Sample thumbnails (replace with actual thumbnails or video previews)
import project1 from "../assets/images/Video1.png";
import project2 from "../assets/images/Video2.png";
import project3 from "../assets/images/Video3.png";

const projects = [
  {
    id: 1,
    title: "Cinematic Travel Reel",
    description: "A journey across Iceland with crisp transitions and ambient sound design.",
    image: project1,
  },
  {
    id: 2,
    title: "Fashion Ad – Bold & Vibrant",
    description: "High-energy cuts for a premium streetwear brand campaign.",
    image: project2,
  },
  {
    id: 3,
    title: "YouTube Vlog Edit",
    description: "Fast-paced edits that keep viewers hooked from start to finish.",
    image: project3,
  },
];

export default function Portfolio() {
  return (
    <section  id="portfolio" className="bg-[#0b0b0b] text-white px-6 md:px-20 py-20">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl md:text-5xl font-bold text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          🎞️ Latest Cuts from the Timeline
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group relative rounded-2xl overflow-hidden shadow-lg border border-gray-800 hover:shadow-purple-500/30 transition duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <Image
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-300"
              />
              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                <p className="text-sm text-gray-300">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-14">
          <motion.a
            href="/portfolio"
            className="inline-block border border-purple-500 text-purple-500 px-6 py-3 rounded-full hover:bg-purple-500 hover:text-black transition duration-300"
            whileHover={{ scale: 1.05 }}
          >
            View Full Portfolio
          </motion.a>
        </div>
      </div>
    </section>
  );
}
