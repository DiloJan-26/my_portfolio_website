"use client";
import ProjectModel from "./projectmodel";
import { useState } from "react";
const ProjectSection = () => {
    const projects = [
       {
            id: 1,
            title: "Personal Portfolio Website",
            tags: ["Next.js", "Tailwind CSS", "Headless CMS"],
            description: "A sleek and modern portfolio website to showcase my projects and skills, built with Next.js and styled with Tailwind CSS. Integrated with a headless CMS for easy content management.",
            fulldescription: "This project involved creating a personal portfolio website to showcase my projects, skills, and experience. The website was built using Next.js for server-side rendering and optimized performance. Tailwind CSS was used for styling, allowing for rapid development and a responsive design. I integrated a headless CMS (Content Management System) to enable easy content updates without needing to modify the codebase. The website features sections for about me, projects, skills, and contact information, along with smooth animations and transitions to enhance user experience.",
            image: "/images/portfolio1.png",
            techstacks: ["Next.js", "Tailwind CSS", "Headless CMS", "Vercel"],
            links: {
                github: "https://github.com/DiloJan-26/my_portfolio_website.git",
            },
        },
        {
            id: 2,
            title: "E-commerce Website",
            tags: ["React", "Node.js", "MongoDB"],
            description: "A full-featured e-commerce website with product listings, shopping cart, and checkout functionality. Built with React for the frontend and Node.js with Express for the backend, using MongoDB for data storage.",
            fulldescription: "This project involved developing a full-featured e-commerce website that allows users to browse products, add items to their shopping cart, and complete the checkout process. The frontend was built using React, providing a dynamic and responsive user interface. The backend was developed with Node.js and Express, handling API requests, user authentication, and order processing. MongoDB was used as the database to store product information, user data, and order history. The website includes features such as product search, filtering, user reviews, and secure payment integration.",
            image: "/images/ecommerce1.png",
            techstacks: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
            links: {
                github: "https://github.com/yourusername/ecommerce",
            },
        },
        {
            id: 3,
            title: "Data Analytics Dashboard",
            tags: ["React", "FastAPI", "PostgreSQL"],
            description: "A data analytics dashboard for visualizing key metrics and insights. Built with React for the frontend and FastAPI for the backend, using PostgreSQL for data storage.",
            fulldescription: "This project involved creating a data analytics dashboard that allows users to visualize and explore key metrics and insights from their data. The frontend was built using React, providing an interactive and responsive user interface. FastAPI was used for the backend, handling API requests and data processing. PostgreSQL was chosen as the database for its powerful querying capabilities and support for complex data relationships. The dashboard includes features such as data filtering, charting, and real-time updates.",
            image: "/images/dashboard1.png",
            techstacks: ["React", "FastAPI", "PostgreSQL"],
            links: {
                github: "https://github.com/yourusername/dashboard",
            },
        },
        {
            id: 4,
            title: "Smart Knowledge Management System",
            tags: ["Next.js", "Java","Redis", "LLaMA2"],
            description: "A knowledge management system that leverages LLaMA2 for intelligent information retrieval and organization. Built with Next.js for the frontend and Spring Boot for the backend, using Redis for caching.",
            fulldescription: "This project involved developing a smart knowledge management system that utilizes LLaMA2, a large language model, to enhance information retrieval and organization. The frontend was built using Next.js, providing a modern and responsive user interface. The backend was developed with Spring Boot, handling API requests, user authentication, and data management. Redis was used for caching frequently accessed data to improve performance. The system includes features such as intelligent search, content categorization, and personalized recommendations based on user behavior.",
            image: "/images/management1.png",
            techstacks: ["Next.js", "Spring-Boot", "Redis", "LLaMA2"],
            links: {
                github: "https://github.com/yourusername/knowledge-management",
            },  
        },
        {
            id: 5,
            title: "Scalable Real-Time Collaboration Platform",
            tags: ["CRDTs", "Socket.io", "WebRTC"],
            description: "A scalable platform for real-time collaboration on documents and projects. Built with modern web technologies.",
            fulldescription: "This project involved creating a real-time collaboration platform that allows multiple users to work on documents simultaneously. The platform was built using CRDTs (Conflict-free Replicated Data Types) to ensure consistency across different clients. Socket.io was used for real-time communication between clients and the server, while WebRTC enabled peer-to-peer connections for low-latency interactions. The system includes features such as user presence indicators, version history, and collaborative editing.",
            image: "/images/collaboration-platform1.png",
            techstacks: ["CRDTs", "Socket.io", "WebRTC"],
            links: {
                github: "https://github.com/yourusername/collaboration-platform",
            },
        },
    ];

    const [selectedProject, setSelectedProject] = useState(null);

    const handleProjectClick = (id) => {
        setSelectedProject(id);
    }

    const handleClose = () => {
        setSelectedProject(null);
    }

    const handleNext = () => {
        const currentIndex = projects.findIndex((project) => project.id === selectedProject);
        if (currentIndex === -1) {
            return null;
        }

        const nextIndex = (currentIndex + 1) % projects.length;
        setSelectedProject(projects[nextIndex].id);
    }

    const handlePrev = () => {
        const currentIndex = projects.findIndex((project) => project.id === selectedProject);
        if (currentIndex === -1) {
            return null;
        }

        const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
        setSelectedProject(projects[prevIndex].id);
    }

    return (
        
        <section id="projects" className="px-4 py-32 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Featured Project</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                {projects.map((project, index) => (
                    <button
                        onClick={() => handleProjectClick(project.id)}
                        key={index} className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-6 border border-gray-700/50 hover:border-purple-500 transition-colors hover:shadow-sm text-left">

                        <div className="flex flex-col h-full">
                            <h3 className="text-lg font-semibold text-shadow-white mb-2">
                                {project.title}
                            </h3>
                            <div className="flex flex-wrap gap-1 mt-auto">
                                {project.tags.map((tag, index) => (
                                    <span
                                        key={index}
                                        className="px-2 py-0.5 text-xs rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30 ">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                    </button>
                ))}
            </div>
            {selectedProject && (
                <ProjectModel
                    project={projects.find(project => project.id === selectedProject)}
                    onClose={handleClose}
                    onNext={handleNext}
                    onPrev={handlePrev} />
            )}
        </section>   
    );
};

export default ProjectSection;
