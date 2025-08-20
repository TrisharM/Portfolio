import React from 'react';

const About = () => {
  return (
    <section id="about" className="w-full max-w-5xl py-20">
      <h2 className="text-4xl font-bold text-center mb-12">
        About Me
      </h2>
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Left Column: Your Bio */}
        <div className="space-y-4 text-slate-300">
          <p>
            Hello! I'm Trishar, a developer based in Bengaluru with a passion for building beautiful and functional websites. My journey into web development started with a simple curiosity for how things work on the internet, which has now grown into a full-fledged passion.
          </p>
          <p>
            I enjoy the process of turning a complex problem into a clean, user-friendly design. I'm currently honing my skills and am actively looking for an opportunity to work on meaningful projects with a talented team.
          </p>
        </div>
        
        {/* Right Column: Your Skills */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">My Tech Stack</h3>
          <ul className="grid grid-cols-2 gap-4">
            <li className="text-cyan-400">▸ TypeScript</li>
            <li className="text-cyan-400">▸ React</li>
            <li className="text-cyan-400">▸ Next.js</li>
            <li className="text-cyan-400">▸ Node.js</li>
            <li className="text-cyan-400">▸ Express.js</li>
            <li className="text-cyan-400">▸ MongoDB</li>
            <li className="text-cyan-400">▸ Tailwind CSS</li>
            <li className="text-cyan-400">▸ Git & GitHub</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;