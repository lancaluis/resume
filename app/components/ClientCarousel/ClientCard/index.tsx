"use client"

import { Client } from "@/types"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

interface ClientCardProps {
  client: Client
}

const ProjectCard = ({ client }: ClientCardProps) => {
  return (
    <Link href={`/clients/${client.id}`}>
      <div className="bg-transparent border border-base-200 rounded-xl overflow-hidden cursor-pointer h-full">
        <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
          <Image
            src={client.images[0]}
            alt={client.client}
            width={800}
            height={800}
            className="w-full h-48 object-cover"
          />
        </motion.div>
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-2 text-gray-300">{client.client}</h2>
          <p className="text-sm text-gray-400 mb-4">
            {client.short_description}
          </p>
          {/* <span
            className="px-3 py-1 rounded-full text-sm 
              bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200"
          >
            {client.project_type}
          </span> */}
        </div>
      </div>
    </Link>
  )
}

export default ProjectCard

