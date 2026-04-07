import React, { useState } from 'react';
import { saveLead } from '../services/leads';

const LeadSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    actor_type: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.email || !formData.name || !formData.phone || !formData.actor_type) {
      setError('Veuillez remplir tous les champs');
      return;
    }
    
    setIsLoading(true);
    setError('');

    try {
      const success = await saveLead(formData);
      if (success) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', phone: '', actor_type: '' });
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
            <div className="max-w-2xl mx-auto">
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Actor Type Selection */}
                <div>
                  <label className="block text-slate-700 font-semibold mb-2 text-left">
                    Je suis un(e) *
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, actor_type: 'vendor' })}
                      className={`p-4 rounded-xl border-2 transition-all ${
                        formData.actor_type === 'vendor'
                          ? 'border-emerald-600 bg-emerald-50 text-emerald-700'
                          : 'border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <i className="fas fa-store text-2xl mb-2"></i>
                      <div className="font-bold">Vendeur</div>
                    </button>
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, actor_type: 'buyer' })}
                      className={`p-4 rounded-xl border-2 transition-all ${
                        formData.actor_type === 'buyer'
                          ? 'border-emerald-600 bg-emerald-50 text-emerald-700'
                          : 'border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <i className="fas fa-shopping-bag text-2xl mb-2"></i>
                      <div className="font-bold">Acheteur</div>
                    </button>
                  </div>
                </div>

                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-slate-700 font-semibold mb-2 text-left">
                    Nom complet *
                  </label>
                  <input 
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Ex: John Doe"
                    required
                    className="w-full px-6 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all text-lg"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-slate-700 font-semibold mb-2 text-left">
                    Adresse email *
                  </label>
                  <input 
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="exemple@email.com"
                    required
                    className="w-full px-6 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all text-lg"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-slate-700 font-semibold mb-2 text-left">
                    Numéro WhatsApp *
                  </label>
                  <input 
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+234 801 234 5678"
                    required
                    className="w-full px-6 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all text-lg"
                  />
                </div>

                {/* Submit Button */}
                <button 
                  type="submit" 
                  disabled={isLoading}
                  className="w-full bg-emerald-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-emerald-700 transition-all flex items-center justify-center gap-2 disabled:opacity-50 mt-6"
                >
                  {isLoading ? (
                    <i className="fas fa-spinner animate-spin"></i>
                  ) : (
                    <>
                      Rejoindre la liste d'attente
                      <i className="fas fa-paper-plane"></i>
                    </>
                  )}
                </button>

                {error && (
                  <p className="text-red-500 text-sm mt-2 text-center font-medium bg-red-50 p-3 rounded-lg">
                    <i className="fas fa-exclamation-circle mr-1"></i>
                    {error}
                  </p>
                )}
              </form>

              <p className="text-slate-400 text-sm mt-4 text-center">
                <i className="fas fa-lock mr-1"></i>
                Pas de spam. Vos données sont protégées et sécurisées.
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
                Inscrire une autre personne
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