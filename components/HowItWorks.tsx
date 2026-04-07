import React from 'react';

interface HowItWorksProps {
  lang: 'fr' | 'en';
}

const HowItWorks: React.FC<HowItWorksProps> = ({ lang }) => {
  const t = {
    fr: {
      sectionTitle: "Un Corridor Sécurisé",
      sectionSubtitle: "Plus d'arnaques, plus de doute. TrustLink assure la sécurité de chaque étape du Nigeria au Bénin.",
      steps: [
        {
          title: "Sourcing & Catalogue",
          description: "Choisissez parmi nos fournisseurs nigérians vérifiés ou envoyez-nous votre demande spécifique via WhatsApp.",
          icon: "fa-search-plus",
          color: "bg-blue-500"
        },
        {
          title: "Paiement en CFA (MoMo)",
          description: "Payez vos articles en Francs CFA via Mobile Money. Nous gérons la conversion en Naira pour le fournisseur.",
          icon: "fa-wallet",
          color: "bg-emerald-500"
        },
        {
          title: "Logistique Express",
          description: "Nos agents à Lagos collectent, vérifient la qualité et expédient via notre corridor sécurisé vers Cotonou.",
          icon: "fa-truck-fast",
          color: "bg-orange-500"
        },
        {
          title: "Réception & Succès",
          description: "Récupérez votre marchandise à nos points relais ou soyez livré à domicile en moins d'une semaine.",
          icon: "fa-boxes-packing",
          color: "bg-purple-500"
        }
      ]
    },
    en: {
      sectionTitle: "A Secure Corridor",
      sectionSubtitle: "No more scams, no more doubt. TrustLink ensures security at every stage from Nigeria to Benin.",
      steps: [
        {
          title: "Sourcing & Catalog",
          description: "Choose from our verified Nigerian suppliers or send us your specific request via WhatsApp.",
          icon: "fa-search-plus",
          color: "bg-blue-500"
        },
        {
          title: "CFA Payment (MoMo)",
          description: "Pay for your items in CFA Francs via Mobile Money. We handle the Naira conversion for the supplier.",
          icon: "fa-wallet",
          color: "bg-emerald-500"
        },
        {
          title: "Express Logistics",
          description: "Our agents in Lagos collect, verify quality, and ship via our secure corridor to Cotonou.",
          icon: "fa-truck-fast",
          color: "bg-orange-500"
        },
        {
          title: "Reception & Success",
          description: "Pick up your goods at our relay points or get home delivery in less than a week.",
          icon: "fa-boxes-packing",
          color: "bg-purple-500"
        }
      ]
    }
  }[lang];

  return (
    <section id="how-it-works" className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
            {t.sectionTitle}
          </h2>
          <p className="text-slate-600 text-lg">
            {t.sectionSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {/* Ligne de connexion pour desktop */}
          <div className="hidden md:block absolute top-12 left-[12%] right-[12%] h-[2px] bg-slate-100 z-0"></div>
          
          {t.steps.map((step, index) => (
            <div key={index} className="relative z-10 flex flex-col items-center text-center group">
              <div className={`w-20 h-20 ${step.color} rounded-2xl flex items-center justify-center text-white text-2xl mb-6 shadow-xl transform transition-transform group-hover:scale-110 group-hover:rotate-3`}>
                <i className={`fas ${step.icon}`}></i>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
              <p className="text-slate-500 leading-relaxed text-sm md:text-base">
                {step.description}
              </p>
              
              {/* Indicateur visuel pour mobile (sauf le dernier) */}
              {index < t.steps.length - 1 && (
                <div className="mt-4 md:hidden text-slate-300">
                  <i className="fas fa-chevron-down text-xl"></i>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;