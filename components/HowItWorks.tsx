
import React from 'react';

const steps = [
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
];

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Un Processus de Confiance</h2>
          <p className="text-slate-600 text-lg">Plus d'arnaques, plus de doute. TrustLink assure la sécurité de chaque étape du Nigeria au Bénin.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {/* Connector line for desktop */}
          <div className="hidden md:block absolute top-12 left-[12%] right-[12%] h-[2px] bg-slate-100 z-0"></div>
          
          {steps.map((step, index) => (
            <div key={index} className="relative z-10 flex flex-col items-center text-center group">
              <div className={`w-20 h-20 ${step.color} rounded-2xl flex items-center justify-center text-white text-2xl mb-6 shadow-xl transform transition-transform group-hover:scale-110 group-hover:rotate-3`}>
                <i className={`fas ${step.icon}`}></i>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
              <p className="text-slate-500 leading-relaxed">{step.description}</p>
              
              <div className="mt-4 md:hidden">
                <i className="fas fa-chevron-down text-slate-300"></i>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
