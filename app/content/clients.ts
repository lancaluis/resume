import { Client } from "@/types";

const CLIENTS: Client[] = [
  {
    id: 1,
    client: "Ingresse",
    short_description: "Ingresse is a leading technology company in Latin America, specializing in event and entertainment solutions",
    project_type: "Web Applications",
    images: [
      "/ingresse.png"],
    problem_description: "Ingresse was facing a critical moment in its history. The company had nearly shut down due to the impact of the COVID-19 pandemic, and it was in the process of restructuring its technology department. At the time, the front-end team was small and lacking resources, and there was a need to rebuild and modernize the company's entire technology stack. The main challenges included working with legacy code written in AngularJS, which had become difficult to maintain, while also developing new projects and features in modern technologies like ReactJS. Additionally, the company was undergoing a major transformation, with plans to expand internationally into Europe and Latin America, which required a significant update to the company's website. The existing site needed a complete overhaul to improve performance, SEO, and to support multiple languages and currencies for a global audience. Moreover, integrating the old AngularJS framework with new technologies like ReactJS and Next.js was a major challenge, as there were several micro front-ends being developed in AngularJS, which needed to communicate seamlessly with new solutions.",
    solution: "As soon as I joined Ingresse, my primary responsibility was to help restructure and expand the front-end team. The company was in dire need of skilled developers, and we quickly began to grow the team. When I joined, the front-end team consisted of just two developers, but by the time I left, we had built a strong chapter of 15 front-end engineers. My involvement in hiring and mentoring new team members was crucial in helping Ingresse regain stability and improve its development process. Another key challenge I was brought in to address was the legacy AngularJS codebase. The company's product offerings were largely built on this older technology, and it was causing numerous issues in maintaining and scaling the platform. I worked closely with the team to refactor and improve the legacy code while introducing ReactJS as the new standard for building scalable and maintainable components. This transition allowed us to modernize the user interface and ensure better performance and flexibility moving forward.One of the most significant projects I worked on during my time at Ingresse was the complete redevelopment of the company’s website.The goal was not only to improve performance and SEO but also to support the company’s internationalization efforts.The website needed to be capable of handling multiple currencies(USD, EUR, BRL) and offer content in three languages: English, Portuguese, and Spanish.This was a complex task that required us to integrate the language selection and currency functionality throughout the entire platform, including event pages, ticket purchase flows, and the admin backend.To achieve this, we chose Next.js due to its performance optimization features, and focused heavily on SEO best practices to ensure the site would rank well across international markets.As part of the project, we used custom- designed, reusable components built with ReactJS to ensure consistency across the website, with a strong emphasis on usability and user experience.The team also implemented animations and interactive features to enhance the user journey.We integrated MicroFrontEnds using iframes, which were part of the previous system architecture, to allow different parts of the website to be developed and deployed independently.This approach ensured that we could continue using legacy components while developing new features with ReactJS.Another major feature I developed was the discount coupon system, which allowed users to apply discount codes for tickets across multiple platforms and projects within the company.This feature was integrated into the website, back - office, and the financial dashboard, enabling event producers to create and manage discount coupons.Event producers could define the type of discount, the value, the specific events and tickets it would apply to, and the duration of the offer.This system provided a seamless experience for both consumers and event organizers and contributed to increasing ticket sales.The internationalization process extended beyond the website and included all of Ingresse’s platforms.We added the ability for event producers to select the currency for each event(USD, EUR, or BRL), and we ensured the system could support all three languages across the platform.One of the biggest technical challenges we faced was integrating AngularJS with React and Next.js, as there were many MicroFrontEnds in AngularJS that needed to communicate with the new React - based system.To solve this, we used cookies to allow seamless communication between iframes in the browser.We also implemented a feature that saved the user’s language preference, so when they returned to the site, their chosen language was automatically selected.Overall, the solution we implemented not only helped Ingresse recover and grow during a challenging period, but also set the stage for its international expansion.We successfully restructured the front - end team, modernized the technology stack, and delivered a high - performing, SEO - optimized website that could scale to meet the needs of global audiences.",
    client_website: "https://www.ingresse.com",
  },
  {
    id: 2,
    client: "Vokabs",
    short_description: "Loved by digital nomads, language enthusiasts, and travelers. Vokabs is a language learning app that helps you speak like a local",
    project_type: "Mobile App",
    images: [
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    problem_description: "",
    solution: "",
    client_website: "https://www.ingresse.com",
  },
  {
    id: 3,
    client: "EDP Portugal",
    short_description: "EDP Portugal is a leading multinational energy company focused on sustainable and innovative solutions",
    project_type: "Mobile App",
    images: [
      "/edp.png",
    ],
    problem_description: "",
    solution: "",
    client_website: "https://www.ingresse.com",
  },
  {
    id: 4,
    client: "Hi Platform",
    short_description: "Hi Platform is a comprehensive conversational platform that helps businesses simplify customer interactions with chatbots and AI",
    project_type: "Mobile App",
    images: [
      "/hiplatform.png",
    ],
    problem_description: "",
    solution: "",
    client_website: "https://www.ingresse.com",
  },
  {
    id: 5,
    client: "Viceri",
    short_description: "Viceri-SEIDOR is a Brazilian Software House company specializing in digital transformation services",
    project_type: "Mobile App",
    images: [
      "/viceri.webp",
    ],
    problem_description: "",
    solution: "",
    client_website: "https://www.ingresse.com",
  },
  {
    id: 6,
    client: "Devagari",
    short_description: "Devagari is a platform that focuses on the digital nomad lifestyle, providing services to help individuals work remotely while traveling the world",
    project_type: "Mobile App",
    images: [
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    problem_description: "",
    solution: "",
    client_website: "https://www.ingresse.com",
  },
  {
    id: 7,
    client: "Haras Pro",
    short_description: "HarasPro is a platform designed to streamline the reproductive management of horses. It helps track every stage of the breeding cycle",
    project_type: "Mobile App",
    images: [
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    problem_description: "",
    solution: "",
    client_website: "https://www.ingresse.com",
  },
]

export default CLIENTS