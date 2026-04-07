
import React from 'react';

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm">
              <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                <i className="fas fa-ship text-slate-400"></i> Importation Chine
              </h4>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-center gap-2"><i className="fas fa-times-circle text-red-400"></i> Délai : 30 à 60 jours</li>
                <li className="flex items-center gap-2"><i className="fas fa-times-circle text-red-400"></i> MOQ : 100+ pièces minimum</li>
                <li className="flex items-center gap-2"><i className="fas fa-times-circle text-red-400"></i> Paiement : USD / SWIFT complexe</li>
              </ul>
            </div>
            
            <div className="p-8 bg-emerald-50 rounded-3xl border border-emerald-100 shadow-sm">
              <h4 className="text-xl font-bold mb-4 flex items-center gap-2 text-emerald-900">
                <i className="fas fa-bolt text-emerald-500"></i> TrustLink Nigeria
              </h4>
              <ul className="space-y-3 text-emerald-900/80">
                <li className="flex items-center gap-2 font-bold"><i className="fas fa-check-circle text-emerald-500"></i> Délai : 2 à 7 jours</li>
                <li className="flex items-center gap-2 font-bold"><i className="fas fa-check-circle text-emerald-500"></i> MOQ : À partir de 1 pièce</li>
                <li className="flex items-center gap-2 font-bold"><i className="fas fa-check-circle text-emerald-500"></i> Paiement : MoMo (CFA) local</li>
              </ul>
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="grid grid-cols-2 gap-4">
               <div className="space-y-4 pt-8">
                  <div className="bg-emerald-600 h-48 rounded-3xl flex flex-col justify-end p-6 text-white shadow-lg">
                    <p className="text-3xl font-extrabold">0%</p>
                    <p className="text-sm opacity-80">Risque d'arnaque</p>
                  </div>
                  <img src="https://picsum.photos/seed/market/400/400" className="w-full h-64 object-cover rounded-3xl" alt="Market" />
               </div>
               <div className="space-y-4">
                  <img src="https://picsum.photos/seed/delivery/400/400" className="w-full h-64 object-cover rounded-3xl" alt="Delivery" />
                  <div className="bg-slate-900 h-48 rounded-3xl flex flex-col justify-end p-6 text-white shadow-lg">
                    <p className="text-3xl font-extrabold">100%</p>
                    <p className="text-sm opacity-80">Confiance Mutuelle</p>
                  </div>
               </div>
            </div>
            {/* Absolute element */}
            <div className="absolute -top-4 -right-4 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 animate-bounce">
              <div className="flex items-center gap-3">
                 <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center text-white">
                   <i className="fas fa-check text-xs"></i>
                 </div>
                 <span className="font-bold text-sm">Livraison Confirmée</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
