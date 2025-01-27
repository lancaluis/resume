"use client";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { DownloadCV, Timeline } from "@/components";

const FadeInWhenVisible = ({ children }: { children: React.ReactNode }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
      }}
    >
      {children}
    </motion.div>
  );
};

const About = () => {
  return (
    <section id="about" className="max-w-4xl mx-auto px-6">
      <FadeInWhenVisible>
        <h2 className="text-3xl font-bold mb-8 text-center">About me</h2>
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <p className="text-gray-400 text-justify md:text-center mb-10 md:mb-10 px-6">
          I’m a passionate Software Engineer with{" "}
          <span className="font-bold text-gray-300">over 7 years of experience</span>, specializing
          in front-end development and creating user-centric, high-performing digital experiences.
          I thrive on clean, maintainable code and have a{" "}
          <span className="font-bold text-gray-300">
            strong focus on usability, performance, and scalable solutions
          </span>
          . My approach goes beyond just building products; I’m deeply invested in their evolution,
          analyzing post-launch performance, improving SEO, and ensuring continuous enhancements to
          meet user needs.
        </p>
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <DownloadCV />
      </FadeInWhenVisible>
      <Timeline />
    </section>
  );
};

export default About;