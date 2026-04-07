
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 bg-gradient-to-br from-emerald-50 via-white to-blue-50"></div>
      <div className="absolute top-[-10%] right-[-10%] w-[400px] h-[400px] bg-emerald-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-blue-200/30 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-sm font-bold mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              NIGERIA - BENIN : COMMERCE SÉCURISÉ
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
              Approvisionnez votre Boutique depuis le <span className="gradient-text">Nigeria en 48h</span>.
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl">
              L'alternative agile à l'importation chinoise. Accédez aux grossistes de Lagos, payez en CFA et recevez vos marchandises à Cotonou sous 2 à 7 jours. 
              <strong> Pas de minimum de commande (MOQ), pas de stress.</strong>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a href="#waitlist" className="px-8 py-4 bg-emerald-600 text-white rounded-xl font-bold text-lg hover:bg-emerald-700 transition-all shadow-xl shadow-emerald-200 flex items-center justify-center gap-2">
                M'inscrire sur la liste d'attente
                <i className="fas fa-arrow-right"></i>
              </a>
              <div className="flex items-center justify-center gap-4 text-slate-500 font-medium">
                <div className="flex -space-x-2">
                  {[1,2,3,4].map(i => (
                    <img key={i} src={`https://picsum.photos/seed/${i+10}/40/40`} className="w-10 h-10 rounded-full border-2 border-white" alt="user" />
                  ))}
                </div>
                <span>+500 pré-inscrits</span>
              </div>
            </div>

            <div className="mt-12 flex items-center gap-6 grayscale opacity-60 overflow-x-auto pb-4 no-scrollbar justify-center md:justify-start">
              <span className="font-bold text-slate-400">Powered by</span>
              <img src="https://paystack.com/assets/img/v3/logo/paystack-logo-vector.svg" alt="Paystack" className="h-6" />
              <div className="h-6 w-[1px] bg-slate-200"></div>
              <span className="flex items-center gap-2 text-slate-600 font-semibold italic text-lg">
                <i className="fas fa-shield-alt text-emerald-600"></i> SecureEscrow™
              </span>
            </div>
          </div>

          <div className="flex-1 relative">
            <div className="relative z-10 bg-white p-4 rounded-3xl shadow-2xl border border-slate-100 max-w-sm mx-auto animate-float">
               <div className="bg-slate-50 rounded-2xl p-6">
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">Transaction Sécurisée</span>
                    <i className="fas fa-lock text-emerald-500"></i>
                  </div>
                  <div className="text-center mb-8">
                    <div className="w-48 h-48 bg-white mx-auto rounded-2xl flex items-center justify-center shadow-inner mb-4 relative overflow-hidden p-4">
                       <i className="fas fa-qrcode text-8xl text-slate-800"></i>
                       <div className="absolute inset-0 border-2 border-emerald-500 animate-pulse rounded-2xl"></div>
                    </div>
                    <p className="text-slate-400 text-sm">Prêt pour scan à la livraison</p>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-500">Montant</span>
                      <span className="font-bold">45,000 NGN</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-500">Statut</span>
                      <span className="text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded">Fonds Bloqués</span>
                    </div>
                  </div>
               </div>
            </div>
            {/* Decorative dots/shapes */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-emerald-100 rounded-full -z-10 animate-spin-slow"></div>
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-spin-slow { animation: spin 20s linear infinite; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
      `}</style>
    </section>
  );
};

export default Hero;
