import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection'; // Import the new component
import Chatbot from '@/components/Chatbot';

export default function Home() {
  return (
    <main className="flex flex-col items-center bg-gray-900 text-white px-4">
      <Navbar />
      <Hero />
      
      <AnimatedSection>
        <About />
      </AnimatedSection>
      
      <AnimatedSection>
        <Projects />
      </AnimatedSection>
      
      <AnimatedSection>
        <Contact />
      </AnimatedSection>

    
        <Chatbot />
      
      <Footer />
    </main>
  );
}
