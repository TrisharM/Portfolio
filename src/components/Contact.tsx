import React from 'react';

// A reusable component for social media icons to keep the code clean
const SocialIcon = ({ href, children }: { href: string, children: React.ReactNode }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer" 
    className="text-slate-400 hover:text-cyan-400 transition-colors"
  >
    {children}
  </a>
);

const Contact = () => {
  return (
    <section id="contact" className="w-full max-w-5xl py-20 text-center">
      <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
      <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
        I&apos;m currently open to new opportunities and would love to hear from you. Whether you have a question or just want to connect, feel free to reach out!
      </p>
      <a 
        href="mailto:Trisharmahesh@gmail.com"
        className="inline-block px-8 py-4 text-lg font-semibold bg-cyan-600 rounded-full hover:bg-cyan-700 transition-colors duration-300"
      >
        Say Hello
      </a>

      <div className="mt-12">
        <div className="flex justify-center space-x-8">
          {/* LinkedIn Icon */}
          <SocialIcon href="https://www.linkedin.com/in/trishar-m-78b481257/">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect width="4" height="12" x="2" y="9"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </SocialIcon>

          {/* GitHub Icon */}
          <SocialIcon href="https://github.com/TrisharM">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
            </svg>
          </SocialIcon>
        </div>
      </div>
    </section>
  );
};

export default Contact;
