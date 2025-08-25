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
            Hello! I&apos;m Trishar, a B.Tech Computer Science student at Presidency University, specializing in Cyber Security. My true passion lies at the intersection of design and development, where I focus on creating visually appealing and intuitive user interfaces.
          </p>
          <p>
            I love the challenge of transforming an idea into a seamless digital experience that people enjoy using. When I&apos;m not coding, you can find me exploring my interests in photography, cars, badminton, or swimming.
          </p>
        </div>
        
        {/* Right Column: Your Skills */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">My Tech Stack</h3>
          <ul className="grid grid-cols-2 gap-4">
            <li className="text-cyan-400">▸ React</li>
            <li className="text-cyan-400">▸ Next.js</li>
            <li className="text-cyan-400">▸ TypeScript</li>
            <li className="text-cyan-400">▸ JavaScript (ES6+)</li>
            <li className="text-cyan-400">▸ Tailwind CSS</li>
            <li className="text-cyan-400">▸ Framer Motion</li>
            <li className="text-cyan-400">▸ Three.js / R3F</li>
            <li className="text-cyan-400">▸ Gemini API</li>
            <li className="text-cyan-400">▸ PHP</li>
            <li className="text-cyan-400">▸ MySQL</li>
            <li className="text-cyan-400">▸ Java (for Android)</li>
            <li className="text-cyan-400">▸ Git & GitHub</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
