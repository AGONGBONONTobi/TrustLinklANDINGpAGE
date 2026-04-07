import React from 'react';

const Features: React.FC<{ lang: 'fr' | 'en' }> = ({ lang }) => {
  const t = {
    fr: {
      title: "Pourquoi choisir ",
      span: "TrustLink ?",
      chinaTitle: "Importation Chine",
      chinaList: ["Délai : 30 à 60 jours", "MOQ : 100+ pièces minimum", "Paiement : USD / SWIFT complexe"],
      trustTitle: "TrustLink Nigeria",
      trustList: ["Délai : 2 à 7 jours", "MOQ : À partir de 1 pièce", "Paiement : MoMo (CFA) local"],
      card1Title: "Nigeria ⇄ Bénin sans frictions",
      card1Desc: "Conversion de devises (CFA/Naira) et sécurité logistique incluses.",
      card2Title: "Zéro Risque d'Arnaque",
      card2Desc: "Vos fonds sont bloqués jusqu'à ce que la marchandise arrive à Cotonou."
    },
    en: {
      title: "Why choose ",
      span: "TrustLink?",
      chinaTitle: "China Import",
      chinaList: ["Lead time: 30 to 60 days", "MOQ: 100+ pieces minimum", "Payment: Complex USD / SWIFT"],
      trustTitle: "TrustLink Nigeria",
      trustList: ["Lead time: 2 to 7 days", "MOQ: Starting from 1 piece", "Payment: Local MoMo (CFA)"],
      card1Title: "Nigeria ⇄ Benin seamless",
      card1Desc: "Currency conversion (CFA/Naira) and logistical security included.",
      card2Title: "Zero Scam Risk",
      card2Desc: "Your funds are held in escrow until the goods arrive in Cotonou."
    }
  }[lang];

  return (
    <section id="features" className="py-24 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-12 text-center">
          {t.title} <span className="text-emerald-600">{t.span}</span>
        </h2>

        {/* Comparaison Chine vs Nigeria */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm">
            <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
              <i className="fas fa-ship text-slate-400"></i> {t.chinaTitle}
            </h4>
            <ul className="space-y-4 text-slate-600">
              {t.chinaList.map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <i className="fas fa-times-circle text-red-400"></i> {item}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="p-8 bg-emerald-50 rounded-3xl border border-emerald-100 shadow-md transform hover:scale-[1.02] transition-transform">
            <h4 className="text-xl font-bold mb-6 flex items-center gap-2 text-emerald-900">
              <i className="fas fa-bolt text-emerald-500"></i> {t.trustTitle}
            </h4>
            <ul className="space-y-4 text-emerald-900/80">
              {t.trustList.map((item, i) => (
                <li key={i} className="flex items-center gap-3 font-bold">
                  <i className="fas fa-check-circle text-emerald-500"></i> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex gap-4 p-6 rounded-2xl bg-white shadow-sm">
             <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 shrink-0">
                <i className="fas fa-globe-africa text-xl"></i>
             </div>
             <div>
                <h4 className="font-bold text-slate-900">{t.card1Title}</h4>
                <p className="text-sm text-slate-600">{t.card1Desc}</p>
             </div>
          </div>
          <div className="flex gap-4 p-6 rounded-2xl bg-white shadow-sm">
             <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center text-emerald-600 shrink-0">
                <i className="fas fa-shield-alt text-xl"></i>
             </div>
             <div>
                <h4 className="font-bold text-slate-900">{t.card2Title}</h4>
                <p className="text-sm text-slate-600">{t.card2Desc}</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;