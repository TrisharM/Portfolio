import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="w-full max-w-5xl py-20 text-center">
      <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
      <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
        I'm currently open to new opportunities and would love to hear from you. Whether you have a question or just want to connect, feel free to reach out!
      </p>
      <a 
        href="mailto:your-email@example.com"
        className="inline-block px-8 py-4 text-lg font-semibold bg-cyan-600 rounded-full hover:bg-cyan-700 transition-colors duration-300"
      >
        Say Hello
      </a>

      {/* Optional: Add links to your social profiles */}
      <div className="mt-12">
        <p className="mb-4">Find me on</p>
        <div className="flex justify-center space-x-6">
          <a href="#" className="hover:text-cyan-400">LinkedIn</a>
          <a href="#" className="hover:text-cyan-400">GitHub</a>
          <a href="#" className="hover:text-cyan-400">Twitter / X</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;