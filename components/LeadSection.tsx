import React from 'react';

const LeadSection: React.FC<{ lang: 'fr' | 'en' }> = ({ lang }) => {
  const t = {
    fr: {
      title: "Prêt à booster votre business ?",
      sub: "Join the Secure Gateway to Nigeria’s Markets: Shop in Lagos, Pay in CFA, and Receive in Cotonou – No Private Network Required.",
      btn: "Rejoindre la liste d'attente",
    },
    en: {
      title: "Ready to boost your business?",
      sub: "Join the Secure Gateway to Nigeria’s Markets: Shop in Lagos, Pay in CFA, and Receive in Cotonou – No Private Network Required.",
      btn: "Join the Waitlist",
    }
  }[lang];

  const googleFormUrl = "https://forms.gle/keL9vjh4LEPiLUX68";

  return (
    <section id="waitlist" className="py-24 bg-slate-900 text-white overflow-hidden relative">
      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <div className="bg-white text-slate-900 p-10 md:p-20 rounded-[3rem] shadow-2xl text-center">
          <div className="mb-10">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
              {t.title}
            </h2>
            <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto">
              {t.sub}
            </p>
          </div>

          <a 
            href={googleFormUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full md:w-auto min-w-[300px] bg-emerald-600 text-white px-8 py-5 rounded-2xl font-bold text-xl hover:bg-emerald-700 hover:scale-105 transition-all shadow-lg shadow-emerald-200"
          >
            {t.btn} <i className="fas fa-arrow-right ml-2"></i>
          </a>
          
          <p className="mt-6 text-sm text-slate-400">
            {lang === 'fr' ? "Lien sécurisé vers Google Forms" : "Secure link to Google Forms"}
          </p>
        </div>
      </div>
    </section>
  );
};

export default LeadSection;