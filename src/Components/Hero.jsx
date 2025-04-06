"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "./ui/Button";

import Person from "../assets/images/person.png";
import PrIcon from "../assets/images/pr-icon.png";
import AeIcon from "../assets/images/ae-icon.png";
import LeftCurrent from "../assets/images/left-current.png";
import RightCurrent from "../assets/images/right-current.png";

export default function Hero() {
  return (
    <section className="relative bg-black text-white min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-28 overflow-hidden">
      {/* Left Text Section */}
      <div className="z-20 max-w-xl text-center md:text-left space-y-8">
        <motion.h3
          className="text-purple-400 tracking-[0.2em] font-semibold text-sm"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          JIMMY TURNER
        </motion.h3>
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold leading-tight"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          PROFESSIONAL <br /> VIDEO EDITOR
        </motion.h1>
        <motion.p
          className="text-gray-400 text-lg"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          Making your videos look modern, clean, and unforgettable.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <Button className="text-sm px-6 py-3 rounded-full">LET'S TALK</Button>
        </motion.div>
      </div>

      {/* Right Visual Section */}
      <div className="relative w-full md:w-[550px] flex justify-center items-center mt-20 md:mt-0 z-10">
        {/* Lightning Left */}
        <Image
          src={LeftCurrent}
          alt="Right Hand Lightning"
          className="absolute bottom-[5%] left-[65%] w-52 opacity-80 z-0"
        />
        {/* Lightning Right */}
        <Image
          src={RightCurrent}
          alt="Left Hand Lightning"
          className="absolute bottom-[5%] right-[65%] w-52 opacity-80 z-0"
        />

        {/* PR Icon Floating - Near Head Left */}
        <motion.div
          className="absolute top-[18%] left-[5%] z-30"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <Image
            src={PrIcon}
            alt="Premiere Pro"
            width={100}
            height={100}
            className="drop-shadow-[0_0_40px_#ff00ff] rotate-[-10deg]"
          />
        </motion.div>

        {/* AE Icon Floating - Near Head Right */}
        <motion.div
          className="absolute top-[18%] right-[5%] z-30"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <Image
            src={AeIcon}
            alt="After Effects"
            width={100}
            height={100}
            className="drop-shadow-[0_0_40px_#00ffff] rotate-[10deg]"
          />
        </motion.div>

        {/* Person Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1 }}
        >
          <Image
            src={Person}
            alt="Hero Person"
            className="relative z-10 w-full h-auto object-contain brightness-110"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
