import React from 'react';
import ProjectCard from './ProjectCard'; // Import the new client component

// --- FINAL PROJECT DATA ---
const projectsData = [
  {
    title: 'Study Verse - Student Dashboard',
    description: 'A student-centric web platform to enhance productivity with tools for managing attendance, tasks, and study planning on a single dashboard.',
    image: '/study-verse.png',
    tags: ['JavaScript', 'HTML5', 'CSS3', 'Vercel'],
    liveUrl: 'https://study-verse-five.vercel.app/login.html', // Replace with your live Vercel URL
    codeUrl: 'https://github.com/TrisharM/Study-Verse.git', // Replace with your GitHub repo URL
  },
  {
    title: 'Restaurant Management System',
    description: 'A full-stack web app to streamline restaurant operations, manage reservations, and handle user authentication with email notifications.',
    image: '/rms.png',
    tags: ['PHP', 'MySQL', 'JavaScript', 'HTML/CSS', 'PHPMailer'],
    videoUrl: 'https://youtu.be/k5R0GLUuPis', 
    codeUrl: 'https://github.com/TrisharM/RMS.git', 
  },
];

const Projects = () => {
  return (
    <section id="projects" className="w-full max-w-5xl py-20">
      <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
