import React from 'react';

const Features: React.FC<{ lang: 'fr' | 'en' }> = ({ lang }) => {
  // Add this to your Features component
    const sellerFeatures = {
      fr: {
        title: "Vendez au Bénin sans bouger",
        list: [
          "Paiement Garanti : Recevez vos Naira dès que l'article est vérifié.",
          "Logistique incluse : On récupère le colis dans votre boutique.",
          "Extension de Marché : Touchez des milliers de clients à Cotonou."
        ]
      },
      en: {
        title: "Sell to Benin without leaving Lagos",
        list: [
          "Guaranteed Payment: Get your Naira as soon as the item is verified.",
          "Logistics Included: We pick up the parcel at your shop.",
          "Market Expansion: Reach thousands of customers in Cotonou."
        ]
      }
    }[lang];
  const t = {
  fr: {
    title: "Pourquoi choisir ",
    span: "TrustLink ?",
    card1Title: "Optimisation de la Trésorerie",
    card1Desc: "Réduisez vos cycles d'approvisionnement de 60 à 5 jours. Libérez votre fonds de roulement pour une croissance accélérée.",
    card2Title: "Couverture du Risque de Change",
    card2Desc: "Éliminez l'exposition à la volatilité du Naira. Vos transactions sont sécurisées au taux du jour du règlement.",
    card3Title: "Logistique Intégrée",
    card3Desc: "Un corridor multimodal (Air/Route) sous contrôle total, de la collecte en boutique à Lagos jusqu'à la remise à Cotonou."
  },
  en: {
    title: "Why choose ",
    span: "TrustLink?",
    card1Title: "Cash Flow Optimization",
    card1Desc: "Reduce your supply cycles from 60 to 5 days. Free up your working capital for accelerated growth.",
    card2Title: "Currency Risk Hedging",
    card2Desc: "Eliminate exposure to Naira volatility. Your transactions are secured at the rate of the settlement day.",
    card3Title: "Integrated Logistics",
    card3Desc: "A fully controlled multimodal corridor (Air/Road), from shop collection in Lagos to delivery in Cotonou."
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