
import React, { useState } from 'react';
import { saveLead } from '../services/leads';

const LeadSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsLoading(true);
    setError('');

    try {
      const success = await saveLead(email);
      if (success) {
        setIsSubmitted(true);
        setEmail('');
      } else {
        setError('Une erreur est survenue. Veuillez réessayer.');
      }
    } catch (err) {
      setError('Impossible de se connecter au service.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="waitlist" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-trust"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto bg-white rounded-[2rem] p-8 md:p-16 shadow-2xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">
              Soyez les premiers à sécuriser vos échanges.
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Nous lançons TrustLink prochainement pour les commerçants visionnaires du Nigeria et du Bénin. Inscrivez-vous pour un accès anticipé.
            </p>
          </div>

          {!isSubmitted ? (
            <div className="max-w-lg mx-auto">
              <form onSubmit={handleSubmit} className="relative">
                <div className="flex flex-col sm:flex-row gap-3">
                  <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Votre adresse email" 
                    required
                    className="flex-grow px-6 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all text-lg"
                  />
                  <button 
                    type="submit" 
                    disabled={isLoading}
                    className="bg-emerald-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-emerald-700 transition-all flex items-center justify-center gap-2 disabled:opacity-50 min-w-[160px]"
                  >
                    {isLoading ? (
                      <i className="fas fa-spinner animate-spin"></i>
                    ) : (
                      <>
                        Rejoindre
                        <i className="fas fa-paper-plane"></i>
                      </>
                    )}
                  </button>
                </div>
                {error && <p className="text-red-500 text-sm mt-2 text-center font-medium">{error}</p>}
              </form>
              <p className="text-slate-400 text-sm mt-4 text-center">
                <i className="fas fa-info-circle mr-1"></i>
                Pas de spam. Vos données sont protégées.
              </p>
            </div>
          ) : (
            <div className="text-center animate-fade-in">
              <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-check text-3xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Inscription Validée !</h3>
              <p className="text-slate-600">Vous recevrez bientôt une invitation exclusive pour tester TrustLink.</p>
              <button 
                onClick={() => setIsSubmitted(false)}
                className="mt-6 text-emerald-600 font-bold hover:underline"
              >
                Inscrire un autre email
              </button>
            </div>
          )}
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fade-in 0.5s ease-out forwards; }
      `}</style>
    </section>
  );
};

export default LeadSection;
