import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Story from './components/Story';
import Features from './components/Features';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { initPerformanceOptimizations } from './utils/performance';
import { initAllScrollAnimations } from './utils/scrollAnimations';
import './App.css';

function App() {
  useEffect(() => {
    // Initialize performance optimizations
    initPerformanceOptimizations();

    // Initialize scroll animations
    initAllScrollAnimations();

    // Add loading class removal after initial render
    const timer = setTimeout(() => {
      document.body.classList.add('loaded');
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Story />
      <Features />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
