import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Truck, 
  ShieldCheck, 
  BarChart3, 
  Globe, 
  MessageSquare, 
  ArrowRight,
  PackageCheck,
  Zap,
  Building2,
  Languages
} from 'lucide-react';

const VendorLandingBilingual = () => {
  const [lang, setLang] = useState<'en' | 'fr'>('en');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const translations = {
    en: {
      nav_benefits: "Benefits",
      nav_how: "How it Works",
      nav_support: "Support",
      hero_badge: "NOW OPEN FOR LAGOS & ONITSHA VENDORS",
      hero_title: "The most reliable way to export to ",
      hero_title_accent: "Benin Republic.",
      hero_desc: "Stop worrying about cross-border logistics and currency exchange. We buy your stock in Naira and handle the delivery to thousands of customers in Cotonou.",
      benefit1_title: "Guaranteed Payouts",
      benefit1_desc: "Get paid in Naira directly to your bank account.",
      benefit2_title: "New Markets",
      benefit2_desc: "Access 13+ million potential buyers in Benin.",
      form_title: "Partner with TrustLink",
      form_subtitle: "Fill in your details and start exporting in 48 hours.",
      label_biz_name: "Business Name",
      label_contact: "Contact Person",
      label_whatsapp: "WhatsApp Number (For Orders)",
      label_location: "Market / Warehouse Location",
      label_category: "Product Category",
      btn_register: "REGISTER AS VENDOR",
      success_title: "Application Sent!",
      success_desc: "Our onboarding team will contact you via WhatsApp to verify your warehouse location.",
      why_title: "Why trade with us?",
      why_subtitle: "We've built the infrastructure so you can focus on your inventory.",
      card1_t: "Instant Naira Settlement",
      card1_d: "No waiting for international wire transfers. We pay you in local currency immediately.",
      card2_t: "Doorstep Collection",
      card2_d: "Our dispatch riders and trucks come to your shop in Lagos or Onitsha. No shipping stress.",
      card3_t: "Quality Assurance",
      card3_d: "We verify products with the buyer, reducing returns and disputes to zero.",
      chat_bar: "Need help? Chat with our Lagos Hub",
      footer_lagos: "Lagos Office: Ikeja",
      footer_cotonou: "Cotonou Office: Ganhi"
    },
    fr: {
      nav_benefits: "Avantages",
      nav_how: "Fonctionnement",
      nav_support: "Support",
      hero_badge: "OUVERT AUX VENDEURS DE LAGOS ET ONITSHA",
      hero_title: "Le moyen le plus fiable d'exporter vers le ",
      hero_title_accent: "Bénin.",
      hero_desc: "Oubliez les soucis de logistique et de change. Nous achetons votre stock en Naira et gérons la livraison vers des milliers de clients à Cotonou.",
      benefit1_title: "Paiements Garantis",
      benefit1_desc: "Recevez vos fonds en Naira directement sur votre compte bancaire.",
      benefit2_title: "Nouveaux Marchés",
      benefit2_desc: "Accédez à plus de 13 millions d'acheteurs au Bénin.",
      form_title: "Devenez partenaire TrustLink",
      form_subtitle: "Remplissez vos informations et commencez à exporter sous 48h.",
      label_biz_name: "Nom de l'entreprise",
      label_contact: "Personne à contacter",
      label_whatsapp: "Numéro WhatsApp (Pour les commandes)",
      label_location: "Marché / Emplacement de l'entrepôt",
      label_category: "Catégorie de produits",
      btn_register: "S'INSCRIRE COMME VENDEUR",
      success_title: "Demande envoyée !",
      success_desc: "Notre équipe vous contactera sur WhatsApp pour vérifier l'emplacement de votre boutique.",
      why_title: "Pourquoi choisir TrustLink ?",
      why_subtitle: "Nous avons bâti l'infrastructure pour que vous puissiez vous concentrer sur votre stock.",
      card1_t: "Règlement Instantané en Naira",
      card1_d: "Pas d'attente de virements internationaux. Nous vous payons en monnaie locale immédiatement.",
      card2_t: "Collecte en Boutique",
      card2_d: "Nos coursiers et camions passent dans votre boutique à Lagos ou Onitsha. Zéro stress.",
      card3_t: "Assurance Qualité",
      card3_d: "Nous vérifions les produits avec l'acheteur, réduisant les retours et litiges à zéro.",
      chat_bar: "Besoin d'aide ? Discutez avec notre Hub de Lagos",
      footer_lagos: "Bureau Lagos : Ikeja",
      footer_cotonou: "Bureau Cotonou : Ganhi"
    }
  };

  const t = translations[lang];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-emerald-100 selection:text-emerald-900">
      
      {/* --- NAVIGATION --- */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-100">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center text-white shadow-lg">
              <Building2 size={24} />
            </div>
            <span className="text-2xl font-black tracking-tighter">
              TRUSTLINK <span className="text-emerald-600 underline decoration-2 underline-offset-4">VENDORS</span>
            </span>
          </div>
          
          <div className="flex items-center gap-4 md:gap-8">
            <div className="hidden md:flex items-center gap-6">
              <a href="#benefits" className="text-sm font-bold text-slate-600 hover:text-emerald-600 transition-colors">{t.nav_benefits}</a>
              <button className="bg-slate-900 text-white px-5 py-2 rounded-full text-xs font-bold hover:bg-slate-800 transition-all">
                {t.nav_support}
              </button>
            </div>
            
            {/* Language Toggle */}
            <button 
              onClick={() => setLang(lang === 'en' ? 'fr' : 'en')}
              className="flex items-center gap-2 bg-emerald-50 text-emerald-700 px-3 py-1.5 rounded-lg border border-emerald-100 text-[11px] font-black uppercase tracking-widest"
            >
              <Languages size={14} /> {lang === 'en' ? 'FR' : 'EN'}
            </button>
          </div>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 bg-gradient-to-br from-emerald-50 via-white to-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            
            <div className="lg:w-7/12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-black mb-8 animate-pulse">
                <Zap size={14} /> {t.hero_badge}
              </div>
              <h1 className="text-5xl lg:text-7xl font-black text-slate-900 leading-[1.05] mb-8">
                {t.hero_title} <span className="text-emerald-600">{t.hero_title_accent}</span>
              </h1>
              <p className="text-xl text-slate-600 mb-12 max-w-2xl leading-relaxed">
                {t.hero_desc}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex gap-4">
                  <div className="shrink-0 text-emerald-600"><ShieldCheck /></div>
                  <div>
                    <h4 className="font-bold">{t.benefit1_title}</h4>
                    <p className="text-sm text-slate-500">{t.benefit1_desc}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="shrink-0 text-emerald-600"><Globe /></div>
                  <div>
                    <h4 className="font-bold">{t.benefit2_title}</h4>
                    <p className="text-sm text-slate-500">{t.benefit2_desc}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: The High-Conversion Form */}
            <div className="lg:w-5/12 w-full" id="register">
              <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-2xl border border-slate-50 relative">
                {isSuccess ? (
                  <div className="py-20 text-center animate-in zoom-in duration-300">
                    <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 size={40} />
                    </div>
                    <h2 className="text-2xl font-bold mb-2">{t.success_title}</h2>
                    <p className="text-slate-500">{t.success_desc}</p>
                  </div>
                ) : (
                  <>
                    <h2 className="text-2xl font-black text-slate-900 mb-2">{t.form_title}</h2>
                    <p className="text-slate-500 mb-8 text-sm">{t.form_subtitle}</p>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{t.label_biz_name}</label>
                          <input required type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-emerald-500" />
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{t.label_contact}</label>
                          <input required type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-emerald-500" />
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{t.label_whatsapp}</label>
                        <div className="relative">
                          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm font-bold text-slate-400">+234</span>
                          <input required type="tel" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-14 py-3 text-sm outline-none focus:border-emerald-500" />
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{t.label_location}</label>
                        <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm outline-none cursor-pointer">
                          <option>Balogun Market, Lagos</option>
                          <option>Alaba International, Lagos</option>
                          <option>Trade Fair, Lagos</option>
                          <option>Onitsha Main Market</option>
                          <option>Other / Autre</option>
                        </select>
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{t.label_category}</label>
                        <div className="grid grid-cols-2 gap-2 text-[11px] font-bold">
                          {['Fashion', 'Electronics', 'Beauty', 'Parts'].map(cat => (
                            <button key={cat} type="button" className="py-2 border border-slate-100 rounded-lg hover:border-emerald-500 hover:text-emerald-600 transition-all">
                              {cat}
                            </button>
                          ))}
                        </div>
                      </div>

                      <button 
                        disabled={isSubmitting}
                        type="submit" 
                        className="w-full bg-emerald-600 text-white font-black py-4 rounded-2xl shadow-xl shadow-emerald-200 hover:bg-emerald-700 hover:-translate-y-1 transition-all flex items-center justify-center gap-2 mt-6"
                      >
                        {isSubmitting ? "..." : t.btn_register} <ArrowRight size={18} />
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- BENEFITS --- */}
      <section id="benefits" className="py-24 bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">{t.why_title}</h2>
            <p className="text-slate-400">{t.why_subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { t: t.card1_t, d: t.card1_d, icon: <BarChart3 className="text-emerald-400" size={32} /> },
              { t: t.card2_t, d: t.card2_d, icon: <Truck className="text-blue-400" size={32} /> },
              { t: t.card3_t, d: t.card3_d, icon: <PackageCheck className="text-purple-400" size={32} /> }
            ].map((card, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-10 rounded-[2rem] hover:bg-white/10 transition-all">
                <div className="mb-6">{card.icon}</div>
                <h3 className="text-xl font-bold text-white mb-4">{card.t}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{card.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CHAT BAR --- */}
      <div className="bg-emerald-600 py-6 text-white font-black text-center">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-8">
          <span className="flex items-center gap-3"><MessageSquare size={20} /> {t.chat_bar}</span>
          <a href="https://wa.me/234" className="bg-white text-emerald-600 px-8 py-2 rounded-full text-sm">WhatsApp Hub</a>
        </div>
      </div>

      {/* --- FOOTER --- */}
      <footer className="py-12 border-t border-slate-100 text-center">
        <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-4">© TrustLink Technologies International</p>
        <div className="flex justify-center gap-10 text-[10px] font-black text-slate-300 uppercase tracking-widest">
          <span>{t.footer_lagos}</span>
          <span>{t.footer_cotonou}</span>
        </div>
      </footer>

    </div>
  );
};

export default VendorLandingBilingual;