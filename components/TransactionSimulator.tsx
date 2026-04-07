import React, { useState } from 'react';

interface SimulatorProps {
  lang: 'fr' | 'en';
}

const TransactionSimulator: React.FC<SimulatorProps> = ({ lang }) => {
  const [currentStep, setCurrentStep] = useState(1);

  const t = {
    fr: {
      title: "Testez l'expérience",
      span: "TrustLink",
      sub: "Découvrez comment nous sécurisons chaque étape de l'importation entre Lagos et Cotonou.",
      steps: [
        { id: 1, label: "Sourcing", text: "Sélection des articles à Lagos" },
        { id: 2, label: "Paiement", text: "Paiement sécurisé via MoMo (CFA)" },
        { id: 3, label: "Transit", text: "Passage frontière Sèmè-Kraké" },
        { id: 4, label: "Succès", text: "Livraison effectuée à Cotonou" }
      ],
      phone: {
        app: "TRUSTLINK APP",
        step1: { h: "Sélection du Stock", p: "Grossiste : Balogun Market, Lagos", item: "Item: 50x Chemises Urban", price: "Prix: 145,000 CFA", btn: "Commander via MoMo" },
        step2: { h: "Paiement Reçu", p: "Fonds convertis et bloqués en sécurité.", id: "Transaction ID: #TL9921", btn: "Expédier le colis" },
        step3: { h: "Transit Sèmè-Kraké", p: "Votre colis a passé la frontière. En route vers Cotonou.", btn: "Suivre le colis" },
        step4: { h: "Transaction Réussie !", p: "Le vendeur est payé. L'acheteur a ses articles.", btn: "Nouveau test" }
      }
    },
    en: {
      title: "Test the",
      span: "TrustLink Experience",
      sub: "Discover how we secure every step of importing between Lagos and Cotonou.",
      steps: [
        { id: 1, label: "Sourcing", text: "Item selection in Lagos" },
        { id: 2, label: "Payment", text: "Secure payment via MoMo (CFA)" },
        { id: 3, label: "Transit", text: "Sèmè-Kraké border crossing" },
        { id: 4, label: "Success", text: "Delivery completed in Cotonou" }
      ],
      phone: {
        app: "TRUSTLINK APP",
        step1: { h: "Stock Selection", p: "Wholesaler: Balogun Market, Lagos", item: "Item: 50x Urban Shirts", price: "Price: 145,000 CFA", btn: "Order via MoMo" },
        step2: { h: "Payment Received", p: "Funds converted and securely escrowed.", id: "Transaction ID: #TL9921", btn: "Ship Parcel" },
        step3: { h: "Sèmè-Kraké Transit", p: "Your parcel crossed the border. Heading to Cotonou.", btn: "Track Parcel" },
        step4: { h: "Successful Trade!", p: "Vendor is paid. Buyer has their goods.", btn: "Test Again" }
      }
    }
  }[lang];

  const nextStep = () => setCurrentStep(prev => prev < 4 ? prev + 1 : 1);

  return (
    <section id="simulator" className="py-24 bg-slate-900 text-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
              {t.title} <span className="text-emerald-400">{t.span}</span>
            </h2>
            <p className="text-slate-400 text-lg mb-10">{t.sub}</p>

            <div className="space-y-4">
              {t.steps.map((step) => (
                <div 
                  key={step.id}
                  className={`flex items-center gap-4 p-4 rounded-xl transition-all ${
                    currentStep === step.id ? 'bg-emerald-600/20 border border-emerald-500/50 translate-x-2' : 'opacity-40'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                    currentStep === step.id ? 'bg-emerald-500 text-white' : 'bg-slate-800 text-slate-400'
                  }`}>
                    {step.id}
                  </div>
                  <div>
                    <p className={`font-bold ${currentStep === step.id ? 'text-white' : 'text-slate-400'}`}>{step.label}</p>
                    <p className="text-sm text-slate-500">{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 w-full flex justify-center">
            <div className="relative w-full max-w-sm aspect-[9/18] bg-slate-800 rounded-[3rem] border-[8px] border-slate-700 shadow-2xl p-6 overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-6 bg-slate-700 rounded-b-2xl"></div>
              
              <div className="h-full flex flex-col pt-8">
                <div className="flex justify-between items-center mb-8 px-2">
                  <span className="text-[10px] font-bold text-slate-500">{t.phone.app}</span>
                  <div className="flex gap-1">
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                    <div className="w-1.5 h-1.5 bg-slate-600 rounded-full"></div>
                  </div>
                </div>

                <div className="flex-grow flex flex-col justify-center text-center px-4">
                  {currentStep === 1 && (
                    <div className="space-y-6 animate-in">
                      <div className="w-16 h-16 bg-emerald-500/20 text-emerald-500 rounded-2xl flex items-center justify-center mx-auto text-2xl">
                        <i className="fas fa-search-dollar"></i>
                      </div>
                      <h3 className="text-lg font-bold">{t.phone.step1.h}</h3>
                      <p className="text-xs text-slate-400">{t.phone.step1.p}</p>
                      <div className="bg-slate-700 p-4 rounded-xl text-left border border-slate-600">
                        <p className="text-[10px] text-emerald-400 font-mono mb-1">{t.phone.step1.item}</p>
                        <p className="text-md font-bold">{t.phone.step1.price}</p>
                      </div>
                      <button onClick={nextStep} className="w-full bg-emerald-600 py-3 rounded-xl font-bold text-sm">{t.phone.step1.btn}</button>
                    </div>
                  )}

                  {currentStep === 2 && (
                    <div className="space-y-6 animate-in">
                      <div className="w-16 h-16 bg-blue-500/20 text-blue-500 rounded-2xl flex items-center justify-center mx-auto text-2xl">
                        <i className="fas fa-shield-check"></i>
                      </div>
                      <h3 className="text-lg font-bold">{t.phone.step2.h}</h3>
                      <p className="text-xs text-slate-400">{t.phone.step2.p}</p>
                      <div className="py-2 px-4 border border-blue-500/30 rounded-full inline-block text-[10px] text-blue-400 mx-auto">
                        {t.phone.step2.id}
                      </div>
                      <button onClick={nextStep} className="w-full bg-blue-600 py-3 rounded-xl font-bold text-sm">{t.phone.step2.btn}</button>
                    </div>
                  )}

                  {currentStep === 3 && (
                    <div className="space-y-6 animate-in">
                      <div className="w-20 h-20 bg-orange-500/20 text-orange-500 rounded-full flex items-center justify-center mx-auto text-3xl">
                        <i className="fas fa-truck-fast"></i>
                      </div>
                      <h3 className="text-lg font-bold">{t.phone.step3.h}</h3>
                      <p className="text-xs text-slate-400">{t.phone.step3.p}</p>
                      <div className="w-full bg-slate-700 h-1.5 rounded-full overflow-hidden">
                        <div className="bg-emerald-500 h-full w-3/4 animate-pulse"></div>
                      </div>
                      <button onClick={nextStep} className="w-full bg-slate-600 py-3 rounded-xl font-bold text-sm">{t.phone.step3.btn}</button>
                    </div>
                  )}

                  {currentStep === 4 && (
                    <div className="space-y-6 animate-in">
                      <div className="w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center mx-auto text-white text-3xl shadow-lg shadow-emerald-500/40">
                        <i className="fas fa-check"></i>
                      </div>
                      <h3 className="text-xl font-bold">{t.phone.step4.h}</h3>
                      <p className="text-xs text-slate-400">{t.phone.step4.p}</p>
                      <button onClick={nextStep} className="w-full border border-emerald-500 text-emerald-500 py-3 rounded-xl font-bold text-sm hover:bg-emerald-500/10 transition-all">
                        {t.phone.step4.btn}
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        .animate-in {
          animation: slideUp 0.4s ease-out forwards;
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default TransactionSimulator;