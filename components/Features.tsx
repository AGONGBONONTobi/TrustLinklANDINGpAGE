
import React from 'react';

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">Pourquoi choisir <span className="text-emerald-600">TrustLink</span> ?</h2>
            <div className="space-y-8">
              <div className="flex gap-4 p-4 rounded-2xl bg-white shadow-sm border border-slate-100">
                <div className="flex-shrink-0 w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center text-emerald-600">
                  <i className="fas fa-undo text-xl"></i>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-1">Remboursement Automatique (48h)</h4>
                  <p className="text-slate-600">Si le code QR n'est pas scanné dans les 48h, les fonds sont automatiquement restitués à l'acheteur. Vous gardez le contrôle.</p>
                </div>
              </div>
              
              <div className="flex gap-4 p-4 rounded-2xl bg-white shadow-sm border border-slate-100">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                  <i className="fas fa-globe-africa text-xl"></i>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-1">Nigeria ⇄ Bénin sans frictions</h4>
                  <p className="text-slate-600">Spécialement conçu pour les échanges transfrontaliers. Conversion de devises et sécurité incluses.</p>
                </div>
              </div>

              <div className="flex gap-4 p-4 rounded-2xl bg-white shadow-sm border border-slate-100">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600">
                  <i className="fas fa-shield-virus text-xl"></i>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-1">Partenariat Paystack</h4>
                  <p className="text-slate-600">Nous utilisons l'infrastructure de paiement la plus fiable d'Afrique pour garantir la sécurité de vos fonds.</p>
                </div>
              </div>
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
