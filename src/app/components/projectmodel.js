import Image from "next/image";
import { X } from 'lucide-react';

export default function ProjectModel({ project, onClose, onNext, onPrev }) {
    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
            <div className="bg-gray-900/90 rounded-lg max-w-4xl w-11/12 max-h-[90vh] overflow-y-auto p-8 h-full">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-purple-50">{project.title}</h2>
                <button onClick={onClose} className="text-purple-50 hover:text-purple-400 rounded-full p-2 bg-gray-800/50 hover:bg-gray-800/70 transition-colors">
                    <X size={24}/>
                </button>
              </div>
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/2 space-y-4">
                  <p className="text-gray-300">{project.description}</p>
                  <p className="text-gray-300">{project.fulldescription}</p>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-300 mb-2">Tech Stacks:</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.techstacks.map((tech, index) => (
                        <span 
                          key={index} 
                          className="px-3 py-1 text-sm rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
                          {tech}
                        </span>
                      ))}
                    <h3 className="text-lg font-semibold text-gray-300">Github Link:</h3>
                    <a href={project.links.github} className="text-purple-300 hover:underline">
                      {project.links.github}
                    </a>
                    </div>
                  </div>
                </div>
                <div className="relative w-full h-64 md:w-1/2">
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </div>
            </div>
        </div>
    );
}