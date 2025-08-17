import Image from 'next/image';

export default function Modal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" onClick={onClose}>
      <div className="bg-gray-800 rounded-lg p-8 max-w-3xl w-full mx-4" onClick={(e) => e.stopPropagation()}>
        <div className="flex justify-end">
          <button onClick={onClose} className="text-white text-2xl">&times;</button>
        </div>
        <h2 className="text-3xl font-bold mb-4">{project.title}</h2>
        <div className="relative w-full h-96 mb-4">
          <Image src={project.screenshot} alt={`${project.title} screenshot`} layout="fill" objectFit="contain" />
        </div>
        <p className="text-gray-400 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span key={index} className="bg-gray-700 text-white px-2 py-1 rounded-md text-sm">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
