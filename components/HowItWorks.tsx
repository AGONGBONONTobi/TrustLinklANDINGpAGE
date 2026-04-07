import React from 'react';

interface HowItWorksProps {
  lang: 'fr' | 'en';
}

const HowItWorks: React.FC<HowItWorksProps> = ({ lang }) => {
  const t = {
    fr: {
      sectionTitle: "Un Processus de Confiance",
      sectionSubtitle: "Plus d'arnaques, plus de doute. TrustLink assure la sécurité de chaque étape du Nigeria au Bénin.",
      steps: [
        {
          title: "Création du lien",
          description: "Le vendeur génère un lien de vente TrustLink unique en quelques clics.",
          icon: "fa-link",
          color: "bg-blue-500"
        },
        {
          title: "Paiement Sécurisé",
          description: "L'acheteur paie via Paystack. Les fonds sont bloqués en toute sécurité sur notre compte séquestre.",
          icon: "fa-credit-card",
          color: "bg-emerald-500"
        },
        {
          title: "Code QR Unique",
          description: "Un code QR infalsifiable est généré pour l'acheteur une fois le paiement validé.",
          icon: "fa-qrcode",
          color: "bg-purple-500"
        },
        {
          title: "Scan & Déblocage",
          description: "Le livreur scanne le code à la livraison. Le vendeur reçoit son code de transaction et ses fonds.",
          icon: "fa-check-double",
          color: "bg-orange-500"
        }
      ]
    },
    en: {
      sectionTitle: "A Process You Can Trust",
      sectionSubtitle: "No more scams, no more doubt. TrustLink ensures security at every step from Nigeria to Benin.",
      steps: [
        {
          title: "Link Creation",
          description: "The seller generates a unique TrustLink sales link in just a few clicks.",
          icon: "fa-link",
          color: "bg-blue-500"
        },
        {
          title: "Secure Payment",
          description: "The buyer pays via Paystack. Funds are securely held in our escrow account.",
          icon: "fa-credit-card",
          color: "bg-emerald-500"
        },
        {
          title: "Unique QR Code",
          description: "A tamper-proof QR code is generated for the buyer once payment is validated.",
          icon: "fa-qrcode",
          color: "bg-purple-500"
        },
        {
          title: "Scan & Release",
          description: "The delivery agent scans the code upon delivery. The seller receives their transaction code and funds.",
          icon: "fa-check-double",
          color: "bg-orange-500"
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
              <p className="text-slate-500 leading-relaxed">{step.description}</p>
              
              {/* Flèche pour mobile uniquement */}
              {index < t.steps.length - 1 && (
                <div className="mt-4 md:hidden">
                  <i className="fas fa-chevron-down text-slate-300"></i>
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