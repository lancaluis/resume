"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { useState } from "react";

const DownloadCV = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<string>("en");

  const handleDownload = () => {
    const cvUrls = {
      en: "/luislanca.pdf",
    };
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
          className="flex items-center gap-2 btn btn-outline w-[90%] md:w-auto"
        >
          Download CV
          <Download className="h-6 w-6" />
        </button>
      </div>
    </motion.section>
  );
}

export default DownloadCV