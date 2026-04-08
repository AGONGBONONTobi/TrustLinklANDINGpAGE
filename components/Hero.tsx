import React from 'react';

const Hero: React.FC<{ lang: 'fr' | 'en' }> = ({ lang }) => {
  // Replace the Hero content in your Hero.tsx
const t = {
  fr: {
    badge: "INFRASTRUCTURE LOGISTIQUE TRANSFRONTALIÈRE : NIGERIA - BÉNIN",
    h1: "Maîtrisez votre Sourcing ",
    h1Span: "au Nigeria.",
    p: "Le hub transactionnel institutionnel reliant les réseaux de distribution béninois aux pôles grossistes de Lagos. Mitigez le risque de change, sécurisez vos règlements et passez à un modèle d'approvisionnement en flux tendu (48h-72h).",
    ctaBuyer: "Scaler mes Opérations",
    ctaSeller: "Ouvrir un Canal d'Export",
    users: "+500 acteurs économiques et distributeurs certifiés"
  },
  en: {
    badge: "BORDERLESS LOGISTICS INFRASTRUCTURE: NIGERIA - BENIN",
    h1: "Optimize Your Nigerian ",
    h1Span: "Sourcing Chain.",
    p: "The institutional bridge connecting professional retail networks to Nigeria’s wholesale hubs. Mitigate currency volatility, automate cross-border settlements, and transition to a just-in-time supply model.",
    ctaBuyer: "Scale My Operations",
    ctaSeller: "Open Export Channel",
    users: "+500 certified economic actors and professional distributors"
  }
}[lang];
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full -z-10 bg-gradient-to-br from-emerald-50 via-white to-blue-50"></div>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold mb-6">
              {t.badge}
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
              {t.h1} <span className="text-emerald-600">{t.h1Span}</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl">
              {t.p}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a href="#waitlist" className="px-8 py-4 bg-emerald-600 text-white rounded-xl font-bold text-lg hover:bg-emerald-700 transition-all shadow-xl shadow-emerald-200">
                {t.cta}
              </a>
              <div className="flex items-center justify-center gap-4 text-slate-500 font-medium">
                <span className="text-sm">{t.users}</span>
              </div>
            </div>
          </div>
          <div className="flex-1 hidden md:block">
             <div className="relative bg-white p-6 rounded-[2.5rem] shadow-2xl border border-slate-100 animate-float max-w-sm ml-auto">
                <div className="flex justify-between items-center mb-6">
                   <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">TrustLink Hub</div>
                   <i className="fas fa-bolt text-yellow-400"></i>
                </div>
                <div className="space-y-4">
                   <div className="bg-slate-50 p-4 rounded-2xl border-l-4 border-emerald-500">
                      <p className="text-xs text-slate-500">Lagos Gateway</p>
                      <p className="font-bold text-slate-900">Articles chargés (Lagos)</p>
                   </div>
                   <div className="bg-slate-50 p-4 rounded-2xl border-l-4 border-blue-500">
                      <p className="text-xs text-slate-500">Express Delivery</p>
                      <p className="font-bold text-slate-900">Arrivée Cotonou (T-48h)</p>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-20px); } }
        .animate-float { animation: float 6s ease-in-out infinite; }
      `}</style>
    </section>
  );
};

export default Hero;