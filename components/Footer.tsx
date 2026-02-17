
import React from 'react';

interface FooterProps {
  onAdminClick: () => void;
}

const Footer: React.FC<FooterProps> = ({ onAdminClick }) => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-emerald-600 rounded flex items-center justify-center text-white">
                <i className="fas fa-link"></i>
              </div>
              <span className="text-xl font-extrabold text-white">TrustLink</span>
            </div>
            <p className="max-w-xs mb-6">
              Bâtir le pont de la confiance entre le Nigeria et le Bénin. Une transaction à la fois.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center hover:text-emerald-500 transition-colors">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center hover:text-emerald-500 transition-colors">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center hover:text-emerald-500 transition-colors">
                <i className="fab fa-facebook-f"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Société</h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-emerald-500 transition-colors">À Propos</a></li>
              <li><a href="#how-it-works" className="hover:text-emerald-500 transition-colors">Processus</a></li>
              <li><a href="#features" className="hover:text-emerald-500 transition-colors">Avantages</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Support</h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-emerald-500 transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-emerald-500 transition-colors">FAQ</a></li>
              <li><button onClick={onAdminClick} className="hover:text-emerald-500 transition-colors text-left opacity-10 hover:opacity-100">Dashboard</button></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>© {new Date().getFullYear()} TrustLink Technologies. Tous droits réservés.</p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1"><i className="fas fa-circle text-[6px] text-emerald-500"></i> Nigeria</span>
            <span className="flex items-center gap-1"><i className="fas fa-circle text-[6px] text-emerald-500"></i> Bénin</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
