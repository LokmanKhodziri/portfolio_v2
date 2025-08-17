'use client';

import { useState } from 'react';
import Image from 'next/image';
import Modal from './modal'; // Assuming this component exists

const projects = [
  {
    title: "Project One",
    description: "A brief description of the first project. It showcases my skills in React and Tailwind CSS.",
    link: "#",
    screenshot: "https://via.placeholder.com/800x600.png?text=Project+One+Screenshot",
    technologies: ["React", "Tailwind CSS", "Next.js"],
  },
  {
    title: "Project Two",
    description: "A brief description of the second project. This one was built with Next.js and used a headless CMS.",
    link: "#",
    screenshot: "https://via.placeholder.com/800x600.png?text=Project+Two+Screenshot",
    technologies: ["Next.js", "Headless CMS", "GraphQL"],
  },
  {
    title: "Project Three",
    description: "A brief description of the third project. A full-stack application with a Node.js backend.",
    link: "#",
    screenshot: "https://via.placeholder.com/800x600.png?text=Project+Three+Screenshot",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <>
      <section id="projects" className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-center">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-6 cursor-pointer" onClick={() => openModal(project)}>
                <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <a href={project.link} className="text-white font-bold hover:underline" onClick={(e) => e.stopPropagation()}>
                  View Project
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedProject && (
        <Modal project={selectedProject} onClose={closeModal} />
      )}
    </>
  );
}