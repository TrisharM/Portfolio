"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion'; // Import motion

// Define a type for the project prop
type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  videoUrl?: string;
  codeUrl?: string;
};

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -10 }} // This is the animation!
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
    >
      {/* Project Image */}
      <Image 
        src={project.image} 
        alt={project.title} 
        width={500} 
        height={300} 
        className="w-full object-cover aspect-video"
        onError={(e) => { e.currentTarget.src = 'https://placehold.co/500x300/020617/38bdf8?text=Project+Image'; }}
      />
      
      <div className="p-6 flex flex-col justify-between min-h-[280px]">
        <div>
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
        </div>

        {/* Links */}
        <div className="flex items-center space-x-4 mt-6">
          <a 
            href={project.liveUrl || project.videoUrl || project.codeUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="px-5 py-2 bg-cyan-600 rounded-full hover:bg-cyan-700 transition-colors"
          >
            {project.liveUrl ? 'Live Demo' : project.videoUrl ? 'Watch Demo' : 'View Code'}
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
    </motion.div>
  );
};

export default ProjectCard;
