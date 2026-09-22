import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Footer from './components/Footer';
import { LanguageProvider } from './LanguageContext';

function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') {
      return 'dark';
    }
    return localStorage.getItem('theme') || 'dark';
  });

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen overflow-x-hidden bg-slate-50 dark:bg-[#1e202a] text-slate-900 dark:text-white font-sans selection:bg-[#F97316] selection:text-white transition-colors duration-300">
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <main className="pt-20 sm:pt-24">
          <Hero />
          <About />
          <Experience />
          <Projects />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
