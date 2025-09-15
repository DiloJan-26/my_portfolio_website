import Image from "next/image";

export default function ProjectModel({ project, onClose, onNext, onPrev }) {
    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
            <div className="bg-gray-900/90 rounded-lg max-w-4xl w-11/12 max-h-[90vh] overflow-y-auto p-8 h-full">
              <h2>{project.title}</h2>
              <button onClick={onClose}></button>
            </div>
        </div>
    );
}