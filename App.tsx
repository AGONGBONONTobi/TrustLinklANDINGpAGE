import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TransactionSimulator from './components/TransactionSimulator';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import LeadSection from './components/LeadSection';
import Footer from './components/Footer';
import Assistant from './components/Assistant';
import AdminLeads from './components/AdminLeads';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [lang, setLang] = useState<'fr' | 'en'>('fr'); // État de la langue unique pour tout le site

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* 1. Header avec bouton de langue */}
      <Header isScrolled={isScrolled} lang={lang} setLang={setLang} />
      
      <main className="flex-grow">
        {/* 2. Hero Section (Approvisionnez-vous...) */}
        <Hero lang={lang} />

        {/* 4. Comment ça marche (Étapes) */}
        <HowItWorks lang={lang} />

        {/* 5. Avantages (Nigeria vs Chine) */}
        <Features lang={lang} />

        {/* 6. Formulaire de liste d'attente */}
        <LeadSection lang={lang} />
      </main>

      {/* 7. Pied de page */}
      <Footer onAdminClick={() => setIsAdminOpen(true)} lang={lang} />
      
      {/* Assistant IA */}
      <Assistant lang={lang} />
      
      {/* Dashboard Admin (Secret) */}
      {isAdminOpen && <AdminLeads onClose={() => setIsAdminOpen(false)} />}
    </div>
  );
};

export default App;