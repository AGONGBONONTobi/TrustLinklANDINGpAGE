import React from 'react';

interface FooterProps {
  onAdminClick: () => void;
  lang: 'fr' | 'en';
}

const Footer: React.FC<FooterProps> = ({ onAdminClick, lang }) => {
  const t = {
    fr: {
      desc: "Bâtir le pont de la confiance entre le Nigeria et le Bénin. Une transaction à la fois.",
      company: "Société",
      about: "À Propos",
      support: "Support",
      rights: "Tous droits réservés."
    },
    en: {
      desc: "Building the bridge of trust between Nigeria and Benin. One transaction at a time.",
      company: "Company",
      about: "About Us",
      support: "Support",
      rights: "All rights reserved."
    }
  }[lang];

  return (
    <footer className="bg-slate-950 text-slate-400 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6 text-white font-extrabold text-xl">
              <div className="w-8 h-8 bg-emerald-600 rounded flex items-center justify-center">
                <i className="fas fa-link"></i>
              </div>
              TrustLink
            </div>
            <p className="max-w-xs">{t.desc}</p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6">{t.company}</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-emerald-500">{t.about}</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6">{t.support}</h4>
            <ul className="space-y-4 text-sm">
              <li><button onClick={onAdminClick} className="opacity-10 hover:opacity-100">Dashboard</button></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-slate-900 text-center text-xs">
          <p>© {new Date().getFullYear()} TrustLink Technologies. {t.rights}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;