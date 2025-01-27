"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronsDown, MapPin } from "lucide-react";

const Hero = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col items-center justify-center min-h-[calc(100vh-14rem)] md:min-h-[calc(100vh-8rem)] text-center relative overflow-hidden"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="mb-8 relative"
      >
        <Image
          src="/profile.jpg"
          alt="Profile picture"
          width={200}
          height={200}
          className="rounded-full border-4 border-primary-content relative z-10"
        />
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5 }}
          className="flex items-center gap-1 absolute z-10 -bottom-0 right-0 bg-black text-primary rounded-full px-2 py-1 border-2 border-primary-content"
        >
          <MapPin className="w-4 h-4 text-gray-300" />
          <span className="text-sm text-gray-300">Brazil</span>
        </motion.div>
      </motion.div>
      <motion.h1
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="text-3xl md:text-4xl font-bold mb-2"
      >
        Hello, I'm Luís Lança
      </motion.h1>
      <motion.p
        initial={{ y: 50 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="text-xl text-gray-400 mx-4 md:mx-0"
      >
        Software Engineer, Digital Nomad and Drone Pilot
      </motion.p>
      <motion.div
        className="absolute bottom-4 md:bottom-20 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <ChevronsDown className="h-8 w-8 text-gray-300" />
      </motion.div>
    </motion.section>
  );
}

export default Hero;