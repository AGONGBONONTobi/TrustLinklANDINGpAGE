
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import LeadSection from './components/LeadSection';
import Footer from './components/Footer';
import Assistant from './components/Assistant';
import AdminLeads from './components/AdminLeads';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAdminOpen, setIsAdminOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Écouter un raccourci clavier secret (Ctrl + Shift + L) pour ouvrir l'admin
  // useEffect(() => {
  //   const handleKeyDown = (e: KeyboardEvent) => {
  //     // if (e.ctrlKey && e.shiftKey && e.key === 'L') {
  //     //   setIsAdminOpen(true);
  //     // }
  //   };
  //   window.addEventListener('keydown', handleKeyDown);
  //   return () => window.removeEventListener('keydown', handleKeyDown);
  // }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header isScrolled={isScrolled} />
      <main className="flex-grow">
        <Hero />
        <HowItWorks />
        <Features />
        <LeadSection />
      </main>
      <Footer onAdminClick={() => setIsAdminOpen(true)} />
      <Assistant />
      
      {isAdminOpen && <AdminLeads onClose={() => setIsAdminOpen(false)} />}
    </div>
  );
};

export default App;
