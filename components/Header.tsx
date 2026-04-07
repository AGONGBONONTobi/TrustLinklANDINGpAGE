import React, { useState } from 'react';

interface HeaderProps {
  isScrolled: boolean;
  lang: 'fr' | 'en';
  setLang: (l: 'fr' | 'en') => void;
}

const Header: React.FC<HeaderProps> = ({ isScrolled, lang, setLang }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const t = {
    fr: { how: "Comment ça marche", features: "Avantages", join: "Rejoindre" },
    en: { how: "How it works", features: "Benefits", join: "Join Now" }
  }[lang];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isMenuOpen ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center text-white shadow-lg">
            <i className="fas fa-link text-xl"></i>
          </div>
          <span className={`text-2xl font-extrabold tracking-tight ${isScrolled || isMenuOpen ? 'text-emerald-900' : 'text-emerald-900 md:text-white'}`}>
            TrustLink
          </span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#how-it-works" className="text-slate-600 hover:text-emerald-600 font-medium transition-colors">{t.how}</a>
          <a href="#features" className="text-slate-600 hover:text-emerald-600 font-medium transition-colors">{t.features}</a>
          
          {/* Toggle Langue */}
          <button 
            onClick={() => setLang(lang === 'fr' ? 'en' : 'fr')}
            className="flex items-center gap-2 px-3 py-1 rounded-full border border-slate-200 text-xs font-bold hover:bg-slate-50 transition-all"
          >
            <i className="fas fa-globe text-emerald-600"></i>
            {lang === 'fr' ? 'EN' : 'FR'}
          </button>

          <a href="#waitlist" className="bg-emerald-600 text-white px-6 py-2 rounded-full font-bold hover:bg-emerald-700 transition-all shadow-md">
            {t.join}
          </a>
        </nav>

        <button className="md:hidden text-emerald-900" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t p-4 space-y-4 shadow-xl">
          <a href="#how-it-works" onClick={() => setIsMenuOpen(false)} className="block text-slate-600 font-medium">{t.how}</a>
          <a href="#features" onClick={() => setIsMenuOpen(false)} className="block text-slate-600 font-medium">{t.features}</a>
          <button onClick={() => {setLang(lang === 'fr' ? 'en' : 'fr'); setIsMenuOpen(false);}} className="block text-emerald-600 font-bold uppercase">
            {lang === 'fr' ? 'Switch to English' : 'Passer en Français'}
          </button>
          <a href="#waitlist" onClick={() => setIsMenuOpen(false)} className="block bg-emerald-600 text-white px-6 py-3 rounded-xl font-bold text-center">{t.join}</a>
        </div>
      )}
    </header>
  );
};

export default Header;