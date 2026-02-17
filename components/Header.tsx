
import React, { useState } from 'react';

interface HeaderProps {
  isScrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ isScrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMenuOpen ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center text-white shadow-lg">
            <i className="fas fa-link text-xl"></i>
          </div>
          <span className={`text-2xl font-extrabold tracking-tight ${isScrolled || isMenuOpen ? 'text-emerald-900' : 'text-emerald-900 md:text-white'}`}>
            TrustLink
          </span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#how-it-works" className="text-slate-600 hover:text-emerald-600 font-medium transition-colors">Comment ça marche</a>
          <a href="#features" className="text-slate-600 hover:text-emerald-600 font-medium transition-colors">Avantages</a>
          <a href="#waitlist" className="bg-emerald-600 text-white px-6 py-2 rounded-full font-bold hover:bg-emerald-700 transition-all transform hover:scale-105 shadow-md">
            Rejoindre
          </a>
        </nav>

        <button 
          className="md:hidden text-emerald-900 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 p-4 space-y-4 animate-fade-in">
          <a href="#how-it-works" onClick={() => setIsMenuOpen(false)} className="block text-slate-600 font-medium">Comment ça marche</a>
          <a href="#features" onClick={() => setIsMenuOpen(false)} className="block text-slate-600 font-medium">Avantages</a>
          <a href="#waitlist" onClick={() => setIsMenuOpen(false)} className="block bg-emerald-600 text-white px-6 py-3 rounded-xl font-bold text-center">Rejoindre la liste</a>
        </div>
      )}
    </header>
  );
};

export default Header;
