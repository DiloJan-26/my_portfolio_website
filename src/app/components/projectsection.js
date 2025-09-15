"use client";
import ProjectModel from "./ProjectModel";
import { use, useState } from "react";
const ProjectSection = () => {
    const projects = [
        {
            id: 1,
            title: "AI-Powered Chatbot",
            tags: ["AI", "NLP", "Python"],
        },
        {
            id: 2,
            title: "E-commerce Website",
            tags: ["React", "Node.js", "MongoDB"],
        },
        {
            id: 3,
            title: "Mobile Fitness App",
            tags: ["Flutter", "Dart", "Firebase"],
        },
        {
            id: 4,
            title: "Data Visualization Dashboard",
            tags: ["D3.js", "JavaScript", "HTML/CSS"],
        },
        {
            id: 5,
            title: "ML Model for Prediction",
            tags: ["Machine Learning", "Python", "Scikit-learn"],
        },
        {
            id: 6,
            title: "E-Learning Site",
            tags: ["Machine Learning", "Python", "Scikit-learn"],
        },

    ];

    const [selectedProject, setSelectedProject] = useState(null);

    const handleProjectClick = (id) => {
        setSelectedProject(id);
    };

    const handleClose = () => {
        setSelectedProject(null);
    };

    const handleNext = () => {
        const currentIndex = projects.findIndex((p) => p.id === selectedProject);
        if (currentIndex === -1) {
            return null;
        }

        const nextIndex = (currentIndex + 1) % projects.length;
        setSelectedProject(projects[nextIndex].id);
    };

    const handlePrev = () => {
        const currentIndex = projects.findIndex(p => p.id === selectedProject.id);
        if (currentIndex === -1) {
            return null;
        }

        const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
        setSelectedProject(projects[prevIndex].id);
    };

    return (
        <section id="projects" className="px-4 py-32 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Featured Project</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                {projects.map((project, index) => (
                    <button
                        onClick={() => handleProjectClick(project.id)} 
                        key={index} className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-6 border border-gray-700/50 hover:border-purple-500 transition-colors hover:shadow-sm text-left">

                        <div className="flex flex-col h-full">
                            <h3 className="text-lg font-semibold text-shadow-white mb-2">{project.title}
                            </h3>
                            <div className="mt-auto flex flex-wrap gap-1">
                                {
                                    project.tags.map((tag, index) => (
                                        <span 
                                            key={index} 
                                            className="px-2 py-0.5 text-xs rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30 ">
                                            {tag}
                                        </span>
                                    ))
                                }
                            </div>
                        </div>

                    </button>
                ))}
            </div>
            {
                selectedProject && (
                    <ProjectModel 
                        project={projects.find(p => p.id === selectedProject)}
                        onClose={handleClose}
                        onNext={handleNext}
                        onPrev={handlePrev}
                    />
                )
            }      
        </section>
    );
};

export default ProjectSection;
