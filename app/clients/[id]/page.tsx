"use client"

import { useState, useEffect } from "react"

import Link from "next/link"
import Image from "next/image"
import { useParams } from "next/navigation"

import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

const project =
{
  id: 1,
  client: "Ingresse",
  short_description: "Ingresse is a leading technology company in Latin America, specializing in event and entertainment solutions.",
  project_type: "Web Applications",
  images: [
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ],
  problem_description: "Ingresse was facing a critical moment in its history. The company had nearly shut down due to the impact of the COVID-19 pandemic, and it was in the process of restructuring its technology department. At the time, the front-end team was small and lacking resources, and there was a need to rebuild and modernize the company's entire technology stack. The main challenges included working with legacy code written in AngularJS, which had become difficult to maintain, while also developing new projects and features in modern technologies like ReactJS. Additionally, the company was undergoing a major transformation, with plans to expand internationally into Europe and Latin America, which required a significant update to the company's website. The existing site needed a complete overhaul to improve performance, SEO, and to support multiple languages and currencies for a global audience. Moreover, integrating the old AngularJS framework with new technologies like ReactJS and Next.js was a major challenge, as there were several micro front-ends being developed in AngularJS, which needed to communicate seamlessly with new solutions.",
  solution: "As soon as I joined Ingresse, my primary responsibility was to help restructure and expand the front-end team. The company was in dire need of skilled developers, and we quickly began to grow the team. When I joined, the front-end team consisted of just two developers, but by the time I left, we had built a strong chapter of 15 front-end engineers. My involvement in hiring and mentoring new team members was crucial in helping Ingresse regain stability and improve its development process. Another key challenge I was brought in to address was the legacy AngularJS codebase. The company's product offerings were largely built on this older technology, and it was causing numerous issues in maintaining and scaling the platform. I worked closely with the team to refactor and improve the legacy code while introducing ReactJS as the new standard for building scalable and maintainable components. This transition allowed us to modernize the user interface and ensure better performance and flexibility moving forward.One of the most significant projects I worked on during my time at Ingresse was the complete redevelopment of the company’s website.The goal was not only to improve performance and SEO but also to support the company’s internationalization efforts.The website needed to be capable of handling multiple currencies(USD, EUR, BRL) and offer content in three languages: English, Portuguese, and Spanish.This was a complex task that required us to integrate the language selection and currency functionality throughout the entire platform, including event pages, ticket purchase flows, and the admin backend.To achieve this, we chose Next.js due to its performance optimization features, and focused heavily on SEO best practices to ensure the site would rank well across international markets.As part of the project, we used custom- designed, reusable components built with ReactJS to ensure consistency across the website, with a strong emphasis on usability and user experience.The team also implemented animations and interactive features to enhance the user journey.We integrated MicroFrontEnds using iframes, which were part of the previous system architecture, to allow different parts of the website to be developed and deployed independently.This approach ensured that we could continue using legacy components while developing new features with ReactJS.Another major feature I developed was the discount coupon system, which allowed users to apply discount codes for tickets across multiple platforms and projects within the company.This feature was integrated into the website, back - office, and the financial dashboard, enabling event producers to create and manage discount coupons.Event producers could define the type of discount, the value, the specific events and tickets it would apply to, and the duration of the offer.This system provided a seamless experience for both consumers and event organizers and contributed to increasing ticket sales.The internationalization process extended beyond the website and included all of Ingresse’s platforms.We added the ability for event producers to select the currency for each event(USD, EUR, or BRL), and we ensured the system could support all three languages across the platform.One of the biggest technical challenges we faced was integrating AngularJS with React and Next.js, as there were many MicroFrontEnds in AngularJS that needed to communicate with the new React - based system.To solve this, we used cookies to allow seamless communication between iframes in the browser.We also implemented a feature that saved the user’s language preference, so when they returned to the site, their chosen language was automatically selected.Overall, the solution we implemented not only helped Ingresse recover and grow during a challenging period, but also set the stage for its international expansion.We successfully restructured the front - end team, modernized the technology stack, and delivered a high - performing, SEO - optimized website that could scale to meet the needs of global audiences.",
  client_website: "https://www.ingresse.com",
}

export default function ProjectPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % project!.images.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [project])

  if (!project) {
    return <div>Projeto não encontrado</div>
  }

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % project.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + project.images.length) % project.images.length)
  }

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Link href="/" className="mb-4 inline-block">
            &larr; Home
          </Link>
          <h1 className="text-4xl font-bold mb-6">{project.client}</h1>

          <div className="relative w-full max-w-3xl mx-auto mb-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentImageIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src={project.images[currentImageIndex]}
                  alt={`${project.client} - Image ${currentImageIndex + 1}`}
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover rounded-lg"
                />
              </motion.div>
            </AnimatePresence>
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white opacity-50 hover:opacity-100 transition-opacity"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white opacity-50 hover:opacity-100 transition-opacity"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Sobre o Projeto</h2>
            <p className="">{project.short_description}</p>
            <p className="">
              <span className="font-semibold">Tipo:</span> {project.project_type === "app" ? "Aplicativo" : "Web"}
            </p>
            <p className="mb-4">
              <span className="font-semibold">Cliente:</span> {project.client}
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">O Problema</h2>
            <p className="">{project.problem_description}</p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">A Solução</h2>
            <p className="">{project.solution}</p>
          </div>

          <a
            href={project.client_website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-2"
          >
            Visitar site do cliente
          </a>
        </motion.div>
      </div>
    </div>
  )
}