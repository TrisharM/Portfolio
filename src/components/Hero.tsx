import React from 'react';

const Hero = () => {
  return (
    <section className="min-h-screen w-full max-w-5xl flex flex-col justify-center items-center text-center">
      <div className="space-y-4">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
            Hi, I'm Trishar
          </span>
        </h1>
        <p className="text-lg md:text-2xl text-slate-300">
          I build dynamic and responsive web applications.
        </p>
        <p className="max-w-2xl text-slate-400">
          A passionate developer from Bengaluru, turning ideas into interactive digital experiences. Currently looking for exciting placement opportunities.
        </p>
      </div>
      <div className="mt-8">
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