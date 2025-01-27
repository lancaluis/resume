"use client"

import { useState } from "react"
import { motion } from "framer-motion"

import { Client } from "@/types"
import ClientCard from "@/components/ClientCarousel/ClientCard"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface ClientCarouselProps {
  clients: Client[]
}

const ClientCarousel: React.FC<ClientCarouselProps> = ({ clients }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(clients.length / 3))
  }

  const prevProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + Math.ceil(clients.length / 3)) % Math.ceil(clients.length / 3))
  }

  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="pb-6"
    >
      <h2 className="text-3xl font-bold mb-8 text-center">
        Clients
      </h2>
      <div className="relative w-full max-w-7xl mx-auto px-12">
        <div className="overflow-hidden">
          <motion.div
            className="flex transition-all duration-500 ease-in-out"
            initial={false}
            animate={{ x: `-${currentIndex * 100}%` }}
          >
            {clients.map((client) => (
              <div key={client.id} className="w-full sm:w-1/3 flex-shrink-0 p-2">
                <ClientCard client={client} />
              </div>
            ))}
          </motion.div>
        </div>
        <button
          onClick={prevProject}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-transparent rounded-full p-2 border border-base-300"
          aria-label="Projeto anterior"
        >
          <ChevronLeft className="w-6 h-6 text-base-300" />
        </button>
        <button
          onClick={nextProject}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-transparent rounded-full p-2 border  border-base-300"
          aria-label="Próximo projeto"
        >
          <ChevronRight className="w-6 h-6 text-base-300" />
        </button>
        <div className="flex justify-center mt-4">
          {Array.from({ length: Math.ceil(clients.length / 3) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`mx-1 ${index === currentIndex ? "text-gray-300" : "text-gray-400" 
                }`}
              aria-label={`Ir para o grupo de projetos ${index + 1}`}
            >
              {index === currentIndex ? "◆" : "◇"}
            </button>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default ClientCarousel

