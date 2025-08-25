import React from 'react';
import HeroScene from './HeroScene';

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full flex flex-col justify-center items-center text-center">
      
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <HeroScene />
      </div>

      <div className="relative z-10 space-y-4">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
            Hi, I'm Trishar
          </span>
        </h1>
        <p className="text-lg md:text-2xl text-slate-300">
          Crafting Intuitive and Visually Compelling Web Experiences.
        </p>
        <p className="max-w-2xl text-slate-400">
          A dedicated front-end developer based in Bengaluru with a passion for transforming complex problems into elegant, user-centric interfaces. I am currently seeking a challenging development role to contribute to meaningful projects.
        </p>
      </div>
      <div className="relative z-10 mt-8">
        <a 
          href="#projects"
          className="px-6 py-3 font-semibold text-lg bg-cyan-500 rounded-full hover:bg-cyan-600 transition-colors duration-300"
        >
          View My Work
        </a>
      </div>
    </section>
  );
};

export default Hero;
