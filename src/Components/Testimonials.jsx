"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import avatar1 from "../assets/images/avatar1.png";
import avatar2 from "../assets/images/avatar1.png";
import avatar3 from "../assets/images/avatar1.png";

const testimonials = [
  {
    id: 1,
    name: "Alex Johnson",
    title: "Creative Director, VisionStudios",
    feedback:
      "Jimmy is a magician with timelines. The transitions, audio sync, and color grading on our brand shoot were spot on. Can’t wait for our next collab!",
    avatar: avatar1,
  },
  {
    id: 2,
    name: "Maya Chen",
    title: "YouTuber & Influencer",
    feedback:
      "He understood my vibe instantly. My vlogs now look cinematic and professional. My audience engagement doubled after the edits!",
    avatar: avatar2,
  },
  {
    id: 3,
    name: "Ravi Verma",
    title: "Marketing Lead, Luxe Apparel",
    feedback:
      "Jimmy brought life to our fashion ad with bold cuts and rhythmically synced visuals. Delivered ahead of time with pixel-perfect polish.",
    avatar: avatar3,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-[#111111] text-white px-6 md:px-20 py-24">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl md:text-5xl font-bold text-center mb-16 text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          💬 What People Are Saying
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-10">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.id}
              className="bg-[#1a1a1a] p-8 rounded-2xl border border-[#2b2b2b] hover:border-purple-500 transition duration-300 shadow-[0_0_20px_#1f1f1f]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="flex items-center mb-4">
                <Image
                  src={item.avatar}
                  alt={item.name}
                  width={50}
                  height={50}
                  className="rounded-full mr-4 border border-gray-600"
                />
                <div>
                  <h4 className="font-semibold text-purple-400">{item.name}</h4>
                  <p className="text-sm text-gray-400">{item.title}</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">“{item.feedback}”</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
