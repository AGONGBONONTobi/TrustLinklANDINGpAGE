import React from 'react';
import { ArrowRight, Calendar, Clock, User, ChevronRight } from 'lucide-react';

interface BlogProps {
  lang: 'fr' | 'en';
}

const Blog: React.FC<BlogProps> = ({ lang }) => {
  const t = {
    fr: {
      badge: "MARKET INTELLIGENCE",
      title: "Analyses & Insights ",
      span: "du Corridor",
      subtitle: "Décryptage des dynamiques commerciales, monétaires et logistiques entre le Nigeria et le Bénin.",
      featured: "À LA UNE",
      readMore: "Lire l'analyse complète",
      categories: ["Tout", "Économie", "Logistique", "Sourcing"],
      posts: [
        {
          id: 1,
          category: "Économie",
          date: "18 Mai 2024",
          author: "Admin TrustLink",
          readTime: "6 min",
          title: "Dévaluation du Naira : Quel impact sur le pouvoir d'achat des importateurs béninois ?",
          excerpt: "Analyse approfondie des fluctuations de la monnaie nigériane et des stratégies de couverture pour maintenir vos marges bénéficiaires.",
          image: "https://images.unsplash.com/photo-1611974714028-21f480004ba6?auto=format&fit=crop&q=80&w=800"
        },
        {
          id: 2,
          category: "Logistique",
          date: "12 Mai 2024",
          author: "Ops Team",
          readTime: "4 min",
          title: "Optimisation Sèmè-Kraké : Comment nous avons réduit les délais de transit de 40%.",
          excerpt: "Le passage frontalier est le goulet d'étranglement du commerce bilatéral. Découvrez notre nouveau protocole de dédouanement accéléré.",
          image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800"
        },
        {
          id: 3,
          category: "Sourcing",
          date: "05 Mai 2024",
          author: "Market Agent",
          readTime: "5 min",
          title: "Le guide du grossiste à Lagos : Balogun vs Alaba International.",
          excerpt: "Où sourcer vos produits selon votre secteur ? Une comparaison stratégique des centres d'approvisionnement majeurs du Nigeria.",
          image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=800"
        }
      ]
    },
    en: {
      badge: "MARKET INTELLIGENCE",
      title: "Insights & Market ",
      span: "Analysis",
      subtitle: "Decoding trade, monetary, and logistical dynamics between Nigeria and Benin.",
      featured: "FEATURED",
      readMore: "Read full analysis",
      categories: ["All", "Economics", "Logistics", "Sourcing"],
      posts: [
        {
          id: 1,
          category: "Economics",
          date: "May 18, 2024",
          author: "TrustLink Admin",
          readTime: "6 min",
          title: "Naira Devaluation: Impact on Beninese Importers' Purchasing Power.",
          excerpt: "In-depth analysis of Nigerian currency fluctuations and hedging strategies to maintain your profit margins.",
          image: "https://images.unsplash.com/photo-1611974714028-21f480004ba6?auto=format&fit=crop&q=80&w=800"
        },
        {
          id: 2,
          category: "Logistics",
          date: "May 12, 2024",
          author: "Ops Team",
          readTime: "4 min",
          title: "Seme-Krake Optimization: How we reduced transit times by 40%.",
          excerpt: "The border crossing is the bottleneck of bilateral trade. Discover our new expedited clearance protocol.",
          image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800"
        },
        {
          id: 3,
          category: "Sourcing",
          date: "May 05, 2024",
          author: "Market Agent",
          readTime: "5 min",
          title: "Lagos Wholesaler Guide: Balogun vs Alaba International.",
          excerpt: "Where to source based on your industry? A strategic comparison of Nigeria's major supply hubs.",
          image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=800"
        }
      ]
    }
  }[lang];

  return (
    <section id="blog" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        
        {/* Header du Blog */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-black tracking-widest mb-6">
              <ChevronRight size={12} /> {t.badge}
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-[1.1] mb-6">
              {t.title} <span className="text-emerald-600">{t.span}</span>
            </h2>
            <p className="text-xl text-slate-500 leading-relaxed">
              {t.subtitle}
            </p>
          </div>
          
          {/* Filtres de catégories (esthétique) */}
          <div className="flex gap-3 overflow-x-auto pb-2 w-full md:w-auto">
            {t.categories.map((cat, i) => (
              <button key={i} className={`px-5 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all ${i === 0 ? 'bg-slate-900 text-white shadow-lg' : 'bg-slate-50 text-slate-500 hover:bg-slate-100'}`}>
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grille d'articles */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {t.posts.map((post) => (
            <article key={post.id} className="group flex flex-col h-full border-b border-slate-100 pb-12 lg:border-none lg:pb-0">
              {/* Image avec Overlay Catégorie */}
              <div className="relative aspect-[16/10] overflow-hidden rounded-3xl mb-8 bg-slate-100">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-md text-slate-900 text-[10px] font-black px-3 py-1.5 rounded-lg shadow-sm uppercase tracking-tighter">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Méta-données */}
              <div className="flex items-center gap-6 text-[11px] font-bold text-slate-400 mb-4 uppercase tracking-widest">
                <span className="flex items-center gap-1.5"><Calendar size={14} className="text-emerald-500" /> {post.date}</span>
                <span className="flex items-center gap-1.5"><Clock size={14} className="text-emerald-500" /> {post.readTime}</span>
              </div>

              {/* Contenu */}
              <h3 className="text-2xl font-bold text-slate-900 mb-4 leading-snug group-hover:text-emerald-600 transition-colors">
                {post.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-grow">
                {post.excerpt}
              </p>

              {/* Footer de l'article */}
              <div className="flex items-center justify-between pt-6 border-t border-slate-50">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center text-white text-[10px] font-bold uppercase">
                    TL
                  </div>
                  <span className="text-xs font-bold text-slate-700">{post.author}</span>
                </div>
                <button className="flex items-center gap-2 text-sm font-black text-slate-900 hover:gap-4 transition-all group-hover:text-emerald-600">
                  {t.readMore} <ArrowRight size={18} />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* CTA Section Intégrée */}
        <div className="mt-24 bg-slate-900 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-600/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-black text-white mb-6">
              {lang === 'fr' ? "Prêt à sécuriser votre approvisionnement ?" : "Ready to secure your supply chain?"}
            </h3>
            <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
              {lang === 'fr' 
                ? "Rejoignez les leaders du marché qui utilisent TrustLink pour optimiser leur sourcing nigérian." 
                : "Join market leaders using TrustLink to optimize their Nigerian sourcing."}
            </p>
            <a href="#waitlist" className="inline-flex items-center gap-3 bg-emerald-600 text-white px-10 py-4 rounded-2xl font-black hover:bg-emerald-700 transition-all hover:scale-105">
              {lang === 'fr' ? "ACCÉDER À LA PLATEFORME" : "ACCESS THE PLATFORM"} <ArrowRight size={20} />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Blog;