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
            </div>
        </div>
    );
}