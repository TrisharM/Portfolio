import React from 'react';
import Image from 'next/image';

// --- PROJECT DATA ---
// Replace this with your actual project information
const projectsData = [
  {
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce site built with the MERN stack, including payment gateway integration.',
    image: '/project-1.png', // Place your image in the 'public' folder
    tags: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe'],
    liveUrl: '#', // Your live demo URL
    codeUrl: '#', // Your GitHub repo URL
  },
  {
    title: 'Task Management App',
    description: 'A responsive task management application that helps users organize their daily tasks efficiently.',
    image: '/project-2.png',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'MongoDB'],
    liveUrl: '#',
    codeUrl: '#',
  },
  // Add more projects here...
];

const Projects = () => {
  return (
    <section id="projects" className="w-full max-w-5xl py-20">
      <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projectsData.map((project, index) => (
          <div key={index} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-cyan-500/50 transition-shadow duration-300">
            <Image 
              src={project.image} 
              alt={project.title} 
              width={500} 
              height={300} 
              className="w-full object-cover" 
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="text-slate-300 mb-4">{project.description}</p>
              
              {/* Tech Stack Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map(tag => (
                  <span key={tag} className="bg-gray-700 text-cyan-400 text-sm font-semibold px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex items-center space-x-4 mt-6">
                <a 
                  href={project.liveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="px-5 py-2 bg-cyan-600 rounded-full hover:bg-cyan-700 transition-colors"
                >
                  Live Demo
                </a>
                <a 
                  href={project.codeUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400"
                >
                  Source Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;