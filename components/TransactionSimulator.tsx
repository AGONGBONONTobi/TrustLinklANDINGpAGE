
import React, { useState } from 'react';

const steps = [
  { id: 1, label: "Vendeur", icon: "fa-user-tag", text: "Créez votre lien TrustLink" },
  { id: 2, label: "Acheteur", icon: "fa-credit-card", text: "Paiement sécurisé via Paystack" },
  { id: 3, label: "Logistique", icon: "fa-truck-loading", text: "Génération du Code QR de livraison" },
  { id: 4, label: "Succès", icon: "fa-check-circle", text: "Scan & Déblocage des fonds" }
];

const TransactionSimulator: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => setCurrentStep(prev => prev < 4 ? prev + 1 : 1);

  return (
    <section id="simulator" className="py-24 bg-slate-900 text-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
              Testez l'expérience <span className="text-emerald-400">TrustLink</span>
            </h2>
            <p className="text-slate-400 text-lg mb-10">
              Découvrez comment nous sécurisons chaque étape de la transaction entre Lagos et Cotonou. Cliquez sur le simulateur pour avancer.
            </p>

            <div className="space-y-4">
              {steps.map((step) => (
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
            <div className="relative w-full max-w-sm aspect-[9/16] bg-slate-800 rounded-[3rem] border-[8px] border-slate-700 shadow-2xl p-6 overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-6 bg-slate-700 rounded-b-2xl"></div>
              
              <div className="h-full flex flex-col pt-8">
                <div className="flex justify-between items-center mb-8 px-2">
                  <span className="text-xs font-bold text-slate-500">TRUSTLINK APP</span>
                  <div className="flex gap-1">
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                    <div className="w-1.5 h-1.5 bg-slate-600 rounded-full"></div>
                  </div>
                </div>

                <div className="flex-grow flex flex-col justify-center text-center px-4 animate-in">
                  // Dans TransactionSimulator.tsx
                  {currentStep === 1 && (
                    <div className="space-y-6">
                      <h3 className="text-xl font-bold">Sélection du Stock</h3>
                      <p className="text-sm text-slate-400">Grossiste : Balogun Market, Lagos</p>
                      <div className="bg-slate-700 p-4 rounded-xl text-left">
                        <p className="text-xs text-emerald-400 font-mono">Item: 50x Chemises Urban</p>
                        <p className="text-lg font-bold">Prix: 145,000 CFA</p>
                      </div>
                      <button onClick={nextStep} className="w-full bg-emerald-600 py-3 rounded-xl font-bold">Commander via MoMo</button>
                    </div>
                  )}
                  // Étape 3 (Logistique)
                  {currentStep === 3 && (
                    <div className="space-y-6">
                      <div className="w-20 h-20 bg-orange-500/20 text-orange-500 rounded-full flex items-center justify-center mx-auto text-3xl">
                        <i className="fas fa-truck-ramp-box"></i>
                      </div>
                      <h3 className="text-xl font-bold">Transit Sèmè-Kraké</h3>
                      <p className="text-sm text-slate-400">Votre colis a passé la frontière. En route vers Cotonou.</p>
                      <div className="w-full bg-slate-700 h-2 rounded-full overflow-hidden">
                        <div className="bg-emerald-500 h-full w-3/4 animate-pulse"></div>
                      </div>
                      <button onClick={nextStep} className="w-full bg-slate-700 py-3 rounded-xl font-bold">Suivre le colis</button>
                    </div>
                  )}

                  {currentStep === 2 && (
                    <div className="space-y-6">
                      <div className="w-20 h-20 bg-blue-500/20 text-blue-500 rounded-2xl flex items-center justify-center mx-auto text-3xl">
                        <i className="fas fa-lock"></i>
                      </div>
                      <h3 className="text-xl font-bold">Paiement Reçu</h3>
                      <p className="text-sm text-slate-400">Fonds sécurisés sur le compte TrustLink Nigeria.</p>
                      <div className="py-2 px-4 border border-blue-500/30 rounded-full inline-block text-xs text-blue-400 mx-auto">
                        Transaction ID: #TL9921
                      </div>
                      <button onClick={nextStep} className="w-full bg-blue-600 py-3 rounded-xl font-bold hover:bg-blue-700 transition-all">Générer QR Code</button>
                    </div>
                  )}
                  {currentStep === 4 && (
                    <div className="space-y-6">
                      <div className="w-24 h-24 bg-emerald-500 rounded-full flex items-center justify-center mx-auto text-white text-4xl shadow-lg shadow-emerald-500/40">
                        <i className="fas fa-check"></i>
                      </div>
                      <h3 className="text-2xl font-bold">Transaction Réussie !</h3>
                      <p className="text-sm text-slate-400">Le vendeur a reçu son code de retrait. L'acheteur a ses articles.</p>
                      <button onClick={nextStep} className="w-full border border-emerald-500 text-emerald-500 py-3 rounded-xl font-bold hover:bg-emerald-500/10 transition-all">Nouveau test</button>
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
