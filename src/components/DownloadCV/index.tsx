"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";

const DownloadCV = () => {

  const handleDownload = () => {
    window.open('/luislanca.pdf', "_blank");
  };

  return (
    <motion.section
      id="cv"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="mb-10"
    >
      <div className="flex justify-center items-center flex-col md:flex-row">
        <button
          onClick={handleDownload}
          className="flex items-center gap-2 btn btn-outline w-[90%] md:w-auto text-gray-200"
        >
          Download CV
          <Download className="h-6 w-6" />
        </button>
      </div>
    </motion.section>
  );
}

export default DownloadCV