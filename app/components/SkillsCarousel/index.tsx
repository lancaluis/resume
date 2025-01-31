"use client";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

import { SkillsCarousel } from "@/components";
import { skills } from "@/constants/skills";

const Skills = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section id="skills">
      <motion.h2
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
        }}
        className="text-3xl font-bold mb-8 text-center text-gray-200"
      >
        Skills
      </motion.h2>

      <div className="w-full">
        <SkillsCarousel skills={skills} />
      </div>
    </section>
  );
};

export default Skills;