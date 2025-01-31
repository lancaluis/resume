"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import { Skill } from "@/types";
import { ICONS } from "@/constants";

interface SkillsCarouselProps {
  skills: Skill[];
}

const SkillsCarousel = ({
  skills
}: SkillsCarouselProps) => {
  const [width, setWidth] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (carouselRef.current) {
      setWidth(
        carouselRef.current.scrollWidth - carouselRef.current.offsetWidth
      );
    }
  }, []);

  const renderSkillCards = (startIndex: number, endIndex: number) =>
    skills.slice(startIndex, endIndex).map((skill, index) => (
      <motion.div
        key={index}
        className="flex-shrink-0 w-[280px] mx-2"
      >
        <div
          className={`overflow-hidden h-full transition-all duration-300 ease-in-out rounded-lg bg-transparent border border-base-100 hover:shadow-sm ${skill.style}`}
        >
          <div className="p-4">
            <div className="flex items-center mb-1">
              {ICONS[skill.icon as keyof typeof ICONS] &&
                React.createElement(ICONS[skill.icon as keyof typeof ICONS], {
                  className: `h-6 w-6 mr-2 ${skill.style}`,
                })}
              <h3 className="text-lg font-bold text-gray-300">{skill.name}</h3>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">{skill.description}</p>
          </div>
        </div>
      </motion.div>
    ));

  return (
    <div className="overflow-hidden py-4">
      <motion.div
        ref={carouselRef}
        className="flex mb-4"
        animate={{
          x: [-width, 0],
          transition: {
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 100,
              ease: "linear",
            },
          },
        }}
      >
        {renderSkillCards(0, skills.length / 2)}
        {renderSkillCards(0, skills.length / 2)}
      </motion.div>
      <motion.div
        className="flex"
        animate={{
          x: [0, -width],
          transition: {
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 100,
              ease: "linear",
            },
          },
        }}
      >
        {renderSkillCards(skills.length / 2, skills.length)}
        {renderSkillCards(skills.length / 2, skills.length)}
      </motion.div>
    </div>
  );
}

export default SkillsCarousel;
