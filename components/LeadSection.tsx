import React, { useState } from 'react';
import { saveLead } from '../services/leads';

const LeadSection: React.FC<{ lang: 'fr' | 'en' }> = ({ lang }) => {
  const t = {
    fr: {
      title: "Prêt à booster votre business ?",
      sub: "Rejoignez les premiers entrepreneurs à bénéficier du corridor TrustLink.",
      labelIama: "Je suis un(e) *",
      vendor: "Vendeur (Nigeria)",
      buyer: "Acheteur / Revendeur",
      name: "Nom complet *",
      phone: "Numéro WhatsApp *",
      email: "Adresse email *",
      btn: "Rejoindre la liste",
      success: "Inscription validée ! À bientôt."
    },
    en: {
      title: "Ready to boost your business?",
      sub: "Join the first entrepreneurs benefiting from the TrustLink corridor.",
      labelIama: "I am a *",
      vendor: "Vendor (Nigeria)",
      buyer: "Buyer / Retailer",
      name: "Full Name *",
      phone: "WhatsApp Number *",
      email: "Email Address *",
      btn: "Join the List",
      success: "Registration successful! See you soon."
    }
  }[lang];

  const [formData, setFormData] = useState({ name: '', email: '', phone: '', actor_type: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.actor_type) return alert("Select profile");
    setIsLoading(true);
    const success = await saveLead(formData);
    if (success) setIsSubmitted(true);
    setIsLoading(false);
  };

  return (
    <section id="waitlist" className="py-24 bg-slate-900 text-white overflow-hidden relative">
      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <div className="bg-white text-slate-900 p-8 md:p-16 rounded-[3rem] shadow-2xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4">{t.title}</h2>
            <p className="text-slate-500">{t.sub}</p>
          </div>

          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <button type="button" onClick={() => setFormData({...formData, actor_type: 'vendor'})}
                  className={`p-6 rounded-2xl border-2 transition-all flex flex-col items-center ${formData.actor_type === 'vendor' ? 'border-emerald-600 bg-emerald-50' : 'border-slate-100 hover:border-slate-200'}`}>
                  <i className="fas fa-store text-2xl mb-2"></i>
                  <span className="font-bold text-sm">{t.vendor}</span>
                </button>
                <button type="button" onClick={() => setFormData({...formData, actor_type: 'buyer'})}
                  className={`p-6 rounded-2xl border-2 transition-all flex flex-col items-center ${formData.actor_type === 'buyer' ? 'border-emerald-600 bg-emerald-50' : 'border-slate-100 hover:border-slate-200'}`}>
                  <i className="fas fa-shopping-bag text-2xl mb-2"></i>
                  <span className="font-bold text-sm">{t.buyer}</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" placeholder={t.name} required className="p-4 rounded-xl border border-slate-200"
                  onChange={e => setFormData({...formData, name: e.target.value})} />
                <input type="tel" placeholder={t.phone} required className="p-4 rounded-xl border border-slate-200"
                  onChange={e => setFormData({...formData, phone: e.target.value})} />
              </div>
              <input type="email" placeholder={t.email} required className="w-full p-4 rounded-xl border border-slate-200"
                onChange={e => setFormData({...formData, email: e.target.value})} />

              <button type="submit" disabled={isLoading} className="w-full bg-emerald-600 text-white p-5 rounded-2xl font-bold text-xl hover:bg-emerald-700 transition-all">
                {isLoading ? '...' : t.btn}
              </button>
            </form>
          ) : (
            <div className="text-center py-10">
              <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
                <i className="fas fa-check"></i>
              </div>
              <p className="text-2xl font-bold">{t.success}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default LeadSection;