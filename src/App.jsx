import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import Background3D from './components/Background3D';
import Mascot from './components/Mascot';

function App() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const sections = ['hero', 'about', 'experience', 'skills', 'projects', 'contact'];

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen bg-[#030014] selection:bg-violet-500/30">
      <Background3D />
      <Navbar />
      <Mascot activeSection={activeSection} />
      <main className="relative z-10">
        <section id="hero"><Hero /></section>
        <About />
        <Experience />
        <Skills />
        <Projects />
        <section id="contact"><ContactForm /></section>
      </main>
      <Footer />
    </div>
  );
}

export default App;