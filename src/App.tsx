import React, { useState } from 'react';
import {
  CheckCircle2, Truck, ShieldCheck, BarChart3, Globe,
  MessageSquare, ArrowRight, PackageCheck, Languages,
  Search, Wallet, ClipboardCheck, X, AlertTriangle,
  MapPin, Mail, ChevronRight, Users, Store
} from 'lucide-react';
import logo from './trustlink_logo.png'

const TrustLinkLanding = () => {
  const [lang, setLang] = useState<'en' | 'fr'>('en');
  const [activeTab, setActiveTab] = useState<'seller' | 'buyer'>('seller');
  const [showPolicy, setShowPolicy] = useState(false);

  // Liens des formulaires Google Forms
  const sellerFormLink = "https://forms.gle/EGKZFiwXWyXFY7zp9";
  const buyerFormLink = "https://tally.so/r/RGJYVp";

  // Lien communautaire WhatsApp pour le chat bar et footer
  const whatsappCommunityLink = "https://chat.whatsapp.com/HSI5gcoVRAiLJSLSU9QXn6?mode=gi_t";

  const handleSellerClick = () => {
    window.open(sellerFormLink, '_blank');
  };

  const handleBuyerClick = () => {
    window.open(buyerFormLink, '_blank');
  };

  const handleWhatsAppClick = () => {
    window.open(whatsappCommunityLink, '_blank');
  };

  const t = {
    en: {
      nav_how: "How it Works",
      nav_why: "Why TrustLink",
      nav_blog: "Blog",
      nav_join: "Join Now",
      hero_badge: "NIGERIA → BENIN REPUBLIC",
      hero_h1: "Buy and sell across borders.",
      hero_h1_span: " Without the hassle.",
      hero_p: "TrustLink is the trusted infrastructure connecting Nigerian sellers to Beninese buyers — no private network needed, no currency risk, no logistics headache. Whether you sell or buy, we handle everything in between.",
      tab_seller: "I'm a Seller",
      tab_buyer: "I'm a Buyer",
      seller_h: "Reach buyers you couldn't find alone",
      seller_p: "The Beninese market is locked behind private networks. TrustLink connects you directly to buyers in Cotonou and Porto-Novo who are looking for your products.",
      seller_b1_t: "Escrow-based payment",
      seller_b1_d: "Funds are secured from the order. You get paid once the buyer confirms receipt and satisfaction.",
      seller_b2_t: "Cross-border logistics",
      seller_b2_d: "Customs, transport and delivery coordinated by TrustLink. You focus on your stock.",
      seller_b3_t: "Vendor verification",
      seller_b3_d: "Sellers are verified through our platform's digital trust system before they can list products.",
      buyer_h: "Buy from Nigeria with confidence",
      buyer_p: "Access Nigerian products without a private network. TrustLink handles sourcing, customs, and delivery — you just confirm your order.",
      buyer_b1_t: "Secure escrow",
      buyer_b1_d: "You pay in CFA. Funds are held until you confirm the product matches your order.",
      buyer_b2_t: "Verified sellers",
      buyer_b2_d: "Sellers are verified through our platform's digital trust system before they can list products.",
      buyer_b3_t: "Full delivery to Benin",
      buyer_b3_d: "From Nigerian markets to your doorstep in Benin — we manage the whole route.",
      how_title: "How it works",
      how_sub: "A simple, transparent process from order to delivery.",
      steps_seller: [
        { t: "Register", d: "Sign up on the platform and start listing your products." },
        { t: "Receive Orders", d: "Get purchase requests from Beninese customers." },
        { t: "Product Verification", d: "As a seller, you verify the products yourself before shipping." },
        { t: "Get Paid", d: "Payment released once buyer confirms satisfaction via escrow." },
      ],
      steps_buyer: [
        { t: "Browse & Order", d: "Find products and place your order on the platform." },
        { t: "Secure Payment", d: "Pay in CFA — funds held safely in escrow, automatically converted to Naira." },
        { t: "We Source & Ship", d: "TrustLink handles customs, transport, and delivery." },
        { t: "Confirm & Done", d: "Confirm receipt, funds released to the seller." },
      ],
      why_title: "Why TrustLink?",
      why_sub: "We built the infrastructure so you can focus on what matters.",
      cards: [
        { t: "Escrow Protection", d: "Funds are never released before both parties are satisfied. No fraud, no loss.", icon: "shield" },
        { t: "Order Traceability", d: "Every order is tracked from placement to delivery. Both parties have full visibility on the status of the transaction at every step.", icon: "package" },
        { t: "Cross-Border Logistics", d: "Customs, transport and last-mile delivery between Nigeria and Benin — fully coordinated.", icon: "truck" },
        { t: "No Private Network Needed", d: "You no longer need a friend in Lagos or Cotonou. TrustLink is your trusted intermediary.", icon: "globe" },
        { t: "Transparent Dispute System", d: "48h claim window, in-app unboxing video proof, and a clear resolution matrix.", icon: "chart" },
        { t: "Verified Community", d: "Every seller goes through a verification process on our platform before transacting.", icon: "users" },
      ],
      how_it_works: "How it works",
      form_title: "Join TrustLink",
      form_sub: "Seller or buyer — fill in your details to get started.",
      btn_seller: "I'm a Seller — Register",
      btn_buyer: "I'm a Buyer — Register",
      disclaimer: "TrustLink verifies every seller through our digital trust system. Buyers are protected by our escrow system.",
      policy_link: "Refund & Return Policy",
      policy_title: "Unified Refund & Return Policy",
      policy_version: "Version 2.5 — Benin-Nigeria Operational Governance",
      policy_intro: "TrustLink leverages the continental proximity between Nigeria and Benin to offer purchase security that surpasses Asian platforms. By holding vendors accountable and guaranteeing refunds through an escrow system, we turn cross-border trade into a secure, local-like experience.",
      escrow_title: "The Trust Pillar: Escrow",
      escrow_body: "All payments are held in a secure escrow account. Funds are only released to the vendor if the customer confirms receipt via the app, or if the 48-hour claim window expires after delivery without an open dispute.",
      currency_title: "Automatic Currency Conversion",
      currency_body: "Once the Beninese buyer pays in FCFA, the funds are automatically converted to Naira to avoid exchange rate errors during the transaction.",
      currency_risk: "⚠️ Important - Exchange rate risk in case of refund: In the event of a refund due to a justified dispute, the reverse conversion (Naira → FCFA) will be made at the exchange rate in effect at the time of the refund. The buyer acknowledges and accepts that the refunded amount may be lower than the originally paid amount due to exchange rate fluctuations. For example: an initial payment of 5,000 FCFA converted to Naira, then reconverted to FCFA at the time of refund, could result in 4,500 FCFA. The buyer agrees to accept the refunded amount as it becomes.",
      phase1_title: "Vendor Responsibility",
      phase1_body: "Compliance is the vendor's exclusive responsibility. They must upload a detailed photo or video of the product ready for shipment before it leaves the shop. In case of major non-conformity, the vendor bears the cost of cancellation and return shipping.",
      phase2_title: "Evidence Collection (48h)",
      phase2_body: "To open a dispute, the customer must submit a continuous unboxing video within 48 hours of delivery, through the app only. Evidence outside the app (e.g. WhatsApp) is not admissible.",
      matrix_title: "Dispute Resolution Matrix",
      scenarios: [
        { s: "Accident / Loss", a: "100% refund (Price + Shipping) via Insurance" },
        { s: "Non-Conformity", a: "100% refund (Price + Shipping) via Escrow + Return to Nigeria" },
        { s: "Minor Damage", a: "Partial credit by agreement — customer keeps product" },
        { s: "Change of Mind", a: "Price refunded minus restocking fee — return at customer's cost within 48h" },
      ],
      exclusions_title: "Exclusions",
      exclusions_body: "Refunds are denied if the unboxing video is missing, the 48h window has passed, or the damage was caused by customer mishandling. Returns are consolidated at TrustLink Cotonou hub then shipped back to Nigeria.",
      payout_title: "Refund Processing",
      payout_body: "Evidence reviewed within 48–72 business hours. Refund issued directly to the Mobile Money account linked to the user's profile.",
      close: "Close",
      footer_desc: "The trusted export infrastructure connecting Nigerian sellers to the Beninese market.",
      footer_links: "Quick Links",
      footer_contact: "Contact",
      rights: "All rights reserved.",
      chat_bar: "Need help? Chat with our team on WhatsApp",
      whatsapp_support: "WhatsApp Support",
      join_community: "Join the community",
      form_redirect: "You will be redirected to our registration form.",
    },
    fr: {
      nav_how: "Fonctionnement",
      nav_why: "Pourquoi TrustLink",
      nav_blog: "Blog",
      nav_join: "Rejoindre",
      hero_badge: "NIGERIA → BÉNIN",
      hero_h1: "Achetez et vendez sans frontières.",
      hero_h1_span: " Sans les tracas.",
      hero_p: "TrustLink est l'infrastructure de confiance qui connecte les vendeurs nigérians aux acheteurs béninois — sans réseau privé, sans risque de change, sans stress logistique. Que vous vendiez ou achetiez, nous gérons tout.",
      tab_seller: "Je suis vendeur",
      tab_buyer: "Je suis acheteur",
      seller_h: "Atteignez des acheteurs inaccessibles seul",
      seller_p: "Le marché béninois est verrouillé derrière des réseaux privés. TrustLink vous connecte directement aux acheteurs de Cotonou et Porto-Novo.",
      seller_b1_t: "Paiement via séquestre",
      seller_b1_d: "Les fonds sont sécurisés dès la commande. Vous êtes payé quand l'acheteur confirme sa satisfaction.",
      seller_b2_t: "Logistique transfrontalière",
      seller_b2_d: "Douane, transport et livraison coordonnés par TrustLink. Vous vous concentrez sur votre stock.",
      seller_b3_t: "Vérification vendeur",
      seller_b3_d: "Les vendeurs sont vérifiés via le système de confiance numérique de notre plateforme avant de pouvoir lister leurs produits.",
      buyer_h: "Achetez depuis le Nigeria en toute confiance",
      buyer_p: "Accédez aux produits nigérians sans réseau privé. TrustLink gère la recherche, la douane et la livraison.",
      buyer_b1_t: "Séquestre sécurisé",
      buyer_b1_d: "Vous payez en CFA. Les fonds sont bloqués jusqu'à ce que vous confirmiez la conformité du produit.",
      buyer_b2_t: "Vendeurs vérifiés",
      buyer_b2_d: "Les vendeurs sont vérifiés via le système de confiance numérique de notre plateforme avant de pouvoir lister leurs produits.",
      buyer_b3_t: "Livraison complète au Bénin",
      buyer_b3_d: "Des marchés du Nigeria jusqu'à votre porte au Bénin — nous gérons tout le parcours.",
      how_title: "Comment ça marche",
      how_sub: "Un processus simple et transparent, de la commande à la livraison.",
      steps_seller: [
        { t: "Inscription", d: "Inscrivez-vous sur la plateforme et commencez à lister vos produits." },
        { t: "Réception des Commandes", d: "Recevez des demandes d'achat de clients béninois." },
        { t: "Vérification Produit", d: "En tant que vendeur, vous vérifiez vous-même les produits avant expédition." },
        { t: "Encaissement", d: "Paiement libéré dès confirmation de satisfaction de l'acheteur via séquestre." },
      ],
      steps_buyer: [
        { t: "Parcourir & Commander", d: "Trouvez des produits et passez votre commande." },
        { t: "Paiement Sécurisé", d: "Payez en CFA — fonds bloqués en séquestre, automatiquement convertis en Naira." },
        { t: "On s'occupe du reste", d: "TrustLink gère douane, transport et livraison." },
        { t: "Confirmer & C'est bon", d: "Confirmez la réception, les fonds sont libérés au vendeur." },
      ],
      why_title: "Pourquoi TrustLink ?",
      why_sub: "Nous avons bâti l'infrastructure pour que vous vous concentriez sur l'essentiel.",
      cards: [
        { t: "Protection par Séquestre", d: "Les fonds ne sont jamais libérés avant satisfaction des deux parties. Ni fraude, ni perte.", icon: "shield" },
        { t: "Traçabilité des Commandes", d: "Chaque commande est suivie de la passation à la livraison. Les deux parties ont une visibilité complète sur le statut de la transaction à chaque étape.", icon: "package" },
        { t: "Logistique Transfrontalière", d: "Douane, transport et livraison finale entre Nigeria et Bénin — entièrement coordonnés.", icon: "truck" },
        { t: "Sans Réseau Privé", d: "Vous n'avez plus besoin d'un contact à Lagos ou Cotonou. TrustLink est votre intermédiaire de confiance.", icon: "globe" },
        { t: "Système de Litige Transparent", d: "Délai de 48h, vidéo d'unboxing in-app, matrice de résolution claire.", icon: "chart" },
        { t: "Communauté Vérifiée", d: "Chaque vendeur passe par un processus de vérification sur notre plateforme avant toute transaction.", icon: "users" },
      ],
      how_it_works: "Comment ça marche",
      form_title: "Rejoindre TrustLink",
      form_sub: "Vendeur ou acheteur — remplissez vos informations pour commencer.",
      btn_seller: "Je suis vendeur — M'inscrire",
      btn_buyer: "Je suis acheteur — M'inscrire",
      disclaimer: "TrustLink vérifie chaque vendeur via notre système de confiance numérique. Les acheteurs sont protégés par notre système de séquestre.",
      policy_link: "Politique de Retour & Remboursement",
      policy_title: "Politique Unifiée de Retour et de Remboursement",
      policy_version: "Version 2.5 — Gouvernance Opérationnelle Bénin-Nigeria",
      policy_intro: "TrustLink exploite la proximité continentale entre le Nigeria et le Bénin pour offrir une sécurité d'achat supérieure aux plateformes asiatiques. En responsabilisant le vendeur et en garantissant le remboursement via un système de séquestre, nous transformons le commerce transfrontalier en une expérience locale sécurisée.",
      escrow_title: "Le Pilier de Confiance : Le Séquestre (Escrow)",
      escrow_body: "Tous les paiements sont conservés sur un compte de séquestre sécurisé. Les fonds ne sont libérés au vendeur que si le client confirme la réception conforme via l'application, ou si le délai de réclamation de 48 heures après livraison est expiré sans litige ouvert.",
      currency_title: "Conversion Automatique en Naira",
      currency_body: "Une fois le paiement effectué par l'acheteur béninois en FCFA, les fonds sont automatiquement convertis en Naira pour éviter toute erreur de taux de change lors de la transaction.",
      currency_risk: "⚠️ Important - Risque de change en cas de remboursement : En cas de remboursement pour litige justifié, la conversion inverse (Naira → FCFA) se fera au taux de change en vigueur au moment du remboursement. L'acheteur reconnaît et accepte que le montant remboursé puisse être inférieur au montant initialement payé en raison des fluctuations du taux de change. Par exemple : un paiement initial de 5 000 FCFA converti en Naira, puis reconverti en FCFA au moment du remboursement, pourrait donner 4 500 FCFA. L'acheteur s'engage à accepter le montant remboursé tel qu'il est devenu.",
      phase1_title: "Responsabilité du Vendeur",
      phase1_body: "La conformité est la responsabilité exclusive du vendeur. Il doit uploader une vidéo ou photo détaillée du produit prêt à l'expédition avant son départ. En cas de non-conformité majeure, le vendeur assume l'annulation de la vente et les frais de retour.",
      phase2_title: "Collecte des Preuves (48h)",
      phase2_body: "Pour ouvrir un litige, le client doit soumettre une vidéo d'unboxing continue dans les 48h suivant la livraison, via l'application uniquement. Les preuves partagées hors-application (WhatsApp) sont irrecevables.",
      matrix_title: "Matrice de Résolution des Litiges",
      scenarios: [
        { s: "Accident / Perte", a: "100% remboursé (Prix + Port) via Assurance" },
        { s: "Non-Conformité", a: "100% remboursé (Prix + Port) via Séquestre + Retour au Nigeria" },
        { s: "Dommage Mineur", a: "Avoir partiel selon accord — produit conservé" },
        { s: "Changement d'Avis", a: "Prix remboursé moins frais de restockage — retour à charge du client sous 48h" },
      ],
      exclusions_title: "Exclusions",
      exclusions_body: "Le remboursement est refusé si la vidéo d'unboxing est absente, si le délai de 48h est dépassé, ou en cas de dommage causé par une mauvaise manipulation du client. Les retours sont consolidés au centre TrustLink de Cotonou puis renvoyés vers le Nigeria.",
      payout_title: "Modalités de Versement",
      payout_body: "Analyse des preuves sous 48h à 72h ouvrables. Remboursement direct sur le compte Mobile Money lié au profil de l'utilisateur.",
      close: "Fermer",
      footer_desc: "L'infrastructure d'exportation de confiance reliant les vendeurs nigérians au marché béninois.",
      footer_links: "Liens Rapides",
      footer_contact: "Contact",
      rights: "Tous droits réservés.",
      chat_bar: "Besoin d'aide ? Discutez avec notre équipe sur WhatsApp",
      whatsapp_support: "WhatsApp Support",
      join_community: "Rejoindre la communauté",
      form_redirect: "Vous serez redirigé vers notre formulaire d'inscription.",
    }
  }[lang];

  const iconMap: Record<string, React.ReactNode> = {
    shield: <ShieldCheck size={28} className="text-blue-600" />,
    package: <PackageCheck size={28} className="text-blue-600" />,
    truck: <Truck size={28} className="text-blue-600" />,
    globe: <Globe size={28} className="text-blue-600" />,
    chart: <BarChart3 size={28} className="text-blue-600" />,
    users: <Users size={28} className="text-blue-600" />,
  };

  const steps = activeTab === 'seller' ? t.steps_seller : t.steps_buyer;
  const stepIcons = [
    <Search size={22} className="text-blue-600" />,
    <Wallet size={22} className="text-blue-600" />,
    <ClipboardCheck size={22} className="text-blue-600" />,
    <CheckCircle2 size={22} className="text-blue-600" />,
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">

      {/* Policy Modal */}
      {showPolicy && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4" onClick={() => setShowPolicy(false)}>
          <div className="bg-white rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
            <div className="sticky top-0 bg-white border-b border-slate-100 px-8 py-5 flex items-start justify-between rounded-t-3xl z-10">
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-blue-600 mb-1">TrustLink</p>
                <h2 className="text-xl font-black text-slate-900">{t.policy_title}</h2>
                <p className="text-xs text-slate-400 mt-1">{t.policy_version}</p>
              </div>
              <button onClick={() => setShowPolicy(false)} className="text-slate-400 hover:text-slate-900 transition-colors mt-1"><X size={20} /></button>
            </div>
            <div className="px-8 py-6 space-y-8 text-sm text-slate-600 leading-relaxed">
              <div className="bg-blue-50 rounded-2xl p-5 text-blue-900">{t.policy_intro}</div>
              <div>
                <h3 className="font-black text-slate-900 mb-2 flex items-center gap-2"><ShieldCheck size={16} className="text-blue-600" />{t.escrow_title}</h3>
                <p>{t.escrow_body}</p>
              </div>
              <div className="border border-slate-200 rounded-xl p-4">
                <h3 className="font-black text-slate-900 mb-2 flex items-center gap-2"><span className="text-yellow-600">💰</span> {t.currency_title}</h3>
                <p className="text-slate-600">{t.currency_body}</p>
                <div className="mt-3 bg-amber-50 p-3 rounded-lg border border-amber-200">
                  <p className="text-sm text-amber-800">{t.currency_risk}</p>
                </div>
              </div>
              <div>
                <h3 className="font-black text-slate-900 mb-2">{t.phase1_title}</h3>
                <p>{t.phase1_body}</p>
              </div>
              <div>
                <h3 className="font-black text-slate-900 mb-2">{t.phase2_title}</h3>
                <p>{t.phase2_body}</p>
              </div>
              <div>
                <h3 className="font-black text-slate-900 mb-4">{t.matrix_title}</h3>
                <div className="rounded-2xl border border-slate-100 overflow-hidden">
                  <div className="grid grid-cols-2 bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest px-4 py-3">
                    <span>{lang === 'fr' ? 'Scénario' : 'Scenario'}</span>
                    <span>{lang === 'fr' ? 'Remboursement' : 'Refund'}</span>
                  </div>
                  {t.scenarios.map((row, i) => (
                    <div key={i} className={`grid grid-cols-2 px-4 py-3 text-xs gap-4 ${i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}>
                      <span className="font-bold text-slate-900">{row.s}</span>
                      <span className="text-slate-600">{row.a}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-black text-slate-900 mb-2">{t.payout_title}</h3>
                <p>{t.payout_body}</p>
              </div>
              <div className="bg-amber-50 border border-amber-100 rounded-2xl p-5">
                <h3 className="font-black text-amber-900 mb-2 flex items-center gap-2"><AlertTriangle size={15} className="text-amber-600" />{t.exclusions_title}</h3>
                <p className="text-amber-800">{t.exclusions_body}</p>
              </div>
            </div>
            <div className="px-8 py-5 border-t border-slate-100 sticky bottom-0 bg-white rounded-b-3xl">
              <button onClick={() => setShowPolicy(false)} className="w-full bg-slate-900 text-white font-black py-3 rounded-2xl hover:bg-blue-600 transition-colors text-sm">{t.close}</button>
            </div>
          </div>
        </div>
      )}

      {/* NAV */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-40 border-b border-slate-100">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img 
              src={logo} 
              alt="TrustLink Logo" 
              className="h-20 w-auto"
            />
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#how" className="text-sm font-bold text-slate-600 hover:text-blue-600 transition-colors">{t.nav_how}</a>
            <a href="#why" className="text-sm font-bold text-slate-600 hover:text-blue-600 transition-colors">{t.nav_why}</a>
            <a href="#join" className="bg-blue-600 text-white px-6 py-2.5 rounded-full font-bold text-sm hover:bg-blue-700 transition-all">{t.nav_join}</a>
          </div>
          <button onClick={() => setLang(lang === 'en' ? 'fr' : 'en')} className="flex items-center gap-2 bg-blue-50 text-blue-700 px-3 py-1.5 rounded-lg border border-blue-100 text-[11px] font-black uppercase tracking-widest">
            <Languages size={14} /> {lang === 'en' ? 'FR' : 'EN'}
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section className="pt-36 pb-24 bg-blue-50/40">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-[10px] font-black mb-8 tracking-widest">
                <ChevronRight size={12} /> {t.hero_badge}
              </div>
              <h1 className="text-5xl lg:text-6xl font-black text-slate-900 leading-[1.05] mb-6">
                {t.hero_h1}<span className="text-blue-600">{t.hero_h1_span}</span>
              </h1>
              <p className="text-xl text-slate-600 mb-10 leading-relaxed">{t.hero_p}</p>

              <div className="flex gap-3 mb-8">
                <button onClick={() => setActiveTab('seller')} className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-sm transition-all ${activeTab === 'seller' ? 'bg-blue-600 text-white shadow-lg shadow-blue-100' : 'bg-white border border-slate-200 text-slate-600 hover:border-blue-300'}`}>
                  <Store size={16} /> {t.tab_seller}
                </button>
                <button onClick={() => setActiveTab('buyer')} className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-sm transition-all ${activeTab === 'buyer' ? 'bg-blue-600 text-white shadow-lg shadow-blue-100' : 'bg-white border border-slate-200 text-slate-600 hover:border-blue-300'}`}>
                  <Users size={16} /> {t.tab_buyer}
                </button>
              </div>

              <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-8 space-y-6">
                <div>
                  <h3 className="text-xl font-black text-slate-900 mb-2">{activeTab === 'seller' ? t.seller_h : t.buyer_h}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{activeTab === 'seller' ? t.seller_p : t.buyer_p}</p>
                </div>
                {(activeTab === 'seller'
                  ? [{ t: t.seller_b1_t, d: t.seller_b1_d }, { t: t.seller_b2_t, d: t.seller_b2_d }, { t: t.seller_b3_t, d: t.seller_b3_d }]
                  : [{ t: t.buyer_b1_t, d: t.buyer_b1_d }, { t: t.buyer_b2_t, d: t.buyer_b2_d }, { t: t.buyer_b3_t, d: t.buyer_b3_d }]
                ).map((b, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 size={12} className="text-blue-600" />
                    </div>
                    <div>
                      <span className="font-bold text-slate-900 text-sm">{b.t} — </span>
                      <span className="text-slate-500 text-sm">{b.d}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Form - Redirection vers les formulaires Google Forms */}
            <div className="lg:w-1/2 w-full" id="join">
              <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-2xl border border-slate-100">
                <h2 className="text-2xl font-black text-slate-900 mb-2">{t.form_title}</h2>
                <p className="text-slate-500 mb-6 text-sm">{t.form_sub}</p>

                <div className="flex gap-3 mb-8">
                  <button
                    onClick={() => setActiveTab('seller')}
                    className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl font-bold text-sm transition-all ${activeTab === 'seller' ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
                  >
                    <Store size={16} /> {t.tab_seller}
                  </button>
                  <button
                    onClick={() => setActiveTab('buyer')}
                    className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl font-bold text-sm transition-all ${activeTab === 'buyer' ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
                  >
                    <Users size={16} /> {t.tab_buyer}
                  </button>
                </div>

                {/* Bouton qui change selon l'onglet actif */}
                {activeTab === 'seller' ? (
                  <button 
                    onClick={handleSellerClick}
                    className="w-full bg-blue-600 text-white font-black py-4 rounded-2xl shadow-lg shadow-blue-100 hover:bg-blue-700 transition-all flex items-center justify-center gap-3"
                  >
                    <Store size={20} />
                    {t.btn_seller}
                    <ArrowRight size={18} />
                  </button>
                ) : (
                  <button 
                    onClick={handleBuyerClick}
                    className="w-full bg-blue-600 text-white font-black py-4 rounded-2xl shadow-lg shadow-blue-100 hover:bg-blue-700 transition-all flex items-center justify-center gap-3"
                  >
                    <Users size={20} />
                    {t.btn_buyer}
                    <ArrowRight size={18} />
                  </button>
                )}

                <p className="text-[10px] text-center text-slate-400 mt-6 italic">{t.disclaimer}</p>
                <p className="text-[10px] text-center text-blue-500 mt-3">{t.form_redirect}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 mb-4">{t.how_title}</h2>
            <p className="text-slate-500 text-lg">{t.how_sub}</p>
          </div>
          <div className="flex gap-4 justify-center mb-12">
            {(['seller', 'buyer'] as const).map(tab => (
              <button key={tab} onClick={() => setActiveTab(tab)} className={`flex items-center gap-2 px-6 py-2.5 rounded-full font-bold text-sm transition-all ${activeTab === tab ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}>
                {tab === 'seller' ? <Store size={16} /> : <Users size={16} />}
                {tab === 'seller' ? t.tab_seller : t.tab_buyer}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            <div className="hidden lg:block absolute top-8 left-0 right-0 h-0.5 bg-slate-100 -z-10" />
            {steps.map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center group">
                <div className="w-16 h-16 bg-white border-2 border-slate-100 rounded-2xl shadow-md flex items-center justify-center mb-5 group-hover:border-blue-500 transition-all duration-300">
                  {stepIcons[i]}
                </div>
                <h3 className="font-bold text-slate-900 mb-2 text-base">{step.t}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{step.d}</p>
                <div className="mt-5 w-7 h-7 rounded-full bg-slate-900 text-white text-xs font-black flex items-center justify-center">0{i + 1}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY TRUSTLINK */}
      <section id="why" className="py-24 bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-white mb-4">{t.why_title}</h2>
            <p className="text-slate-400">{t.why_sub}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.cards.map((card, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-all">
                <div className="mb-5 w-12 h-12 bg-blue-600/20 rounded-2xl flex items-center justify-center">
                  {iconMap[card.icon]}
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{card.t}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{card.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CHAT BAR */}
      <div className="bg-blue-600 py-5">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-6">
          <span className="text-white font-bold flex items-center gap-3"><MessageSquare size={18} /> {t.chat_bar}</span>
          <button onClick={handleWhatsAppClick} className="bg-white text-blue-700 px-8 py-2 rounded-full text-sm font-black hover:bg-blue-50 transition-colors">
            {t.whatsapp_support}
          </button>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="bg-slate-900 text-slate-400 py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div className="space-y-4">
              <img 
                src={logo} 
                alt="TrustLink Logo" 
                className="h-20 w-auto brightness-0 invert"
              />
              <p className="text-sm leading-relaxed max-w-xs">{t.footer_desc}</p>
            </div>
            <div>
              <h4 className="text-white font-black uppercase tracking-widest text-xs mb-6">{t.footer_links}</h4>
              <ul className="space-y-3 text-sm font-bold">
                <li><a href="#how" className="hover:text-blue-400 transition-colors">{t.nav_how}</a></li>
                <li><a href="#why" className="hover:text-blue-400 transition-colors">{t.nav_why}</a></li>
                <li><a href="#join" className="hover:text-blue-400 transition-colors">{t.nav_join}</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-black uppercase tracking-widest text-xs mb-6">{t.footer_contact}</h4>
              <ul className="space-y-3 text-sm font-bold">
                <li className="flex items-center gap-3"><Mail size={15} className="text-blue-500" /> trustlink.avat@gmail.com</li>
                <li className="flex items-center gap-3">
                  <MessageSquare size={15} className="text-blue-500 cursor-pointer" />
                  <button onClick={handleWhatsAppClick} className="hover:text-blue-400 transition-colors cursor-pointer">
                    {t.whatsapp_support}
                  </button>
                </li>
                <li className="flex items-start gap-3"><MapPin size={15} className="text-blue-500 shrink-0 mt-0.5" /> Lagos — Cotonou</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs font-bold uppercase tracking-widest">© {new Date().getFullYear()} TrustLink Technologies. {t.rights}</p>
            <div className="flex gap-6">
              <button onClick={() => setShowPolicy(true)} className="text-[10px] font-black uppercase tracking-widest hover:text-white transition-colors">
                {t.policy_link}
              </button>
              <button onClick={handleWhatsAppClick} className="text-[10px] font-black uppercase tracking-widest hover:text-white transition-colors bg-blue-600/20 px-3 py-1 rounded-full">
                {t.join_community}
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default function App() {
  return <TrustLinkLanding />;
}