"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { TIMELINE } from "@/content/timeline";

const TimelineItem = ({ item, index }: { item: { title: string; description: string; year: string}; index: number }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true, // Apenas uma vez por item
    threshold: 0.2, // Porcentagem visível para ativar
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, x: index % 2 === 0 ? -100 : 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  return (
    <motion.li
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className="-mb-2"
    >
      <div className="timeline-middle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-5 w-5"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <div
        className={`${index % 2 === 0 ? "timeline-start md:text-end" : "timeline-end"
          } pb-8`}
      >
        <time className="font-mono italic">{item.year}</time>
        <div className="text-lg font-black">{item.title}</div>
        <p className="text-gray-400">{item.description}</p>
      </div>
      {index < TIMELINE.length - 1 && <hr />}
    </motion.li>
  );
};

const Timeline = () => {
  return (
    <div className="max-w-4xl mx-auto px-6">
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
        {TIMELINE.map((item, index) => (
          <TimelineItem key={index} item={item} index={index} />
        ))}
      </ul>
    </div>
  );
};

export default Timeline;