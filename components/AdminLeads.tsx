import React, { useState, useEffect } from 'react';

// Interface pour les leads depuis l'API
interface ApiLead {
  id: number;
  name: string;
  email: string;
  phone: string;
  actor_type: 'vendor' | 'buyer' | 'rider';
  city?: string;
  created_at: string;
  notified: boolean;
}

// Variables d'environnement (depuis .env.local)
const ADMIN_KEY = import.meta.env.VITE_ADMIN_KEY;
const API_BASE_URL = import.meta.env.VITE_API_URL?.replace('/api/waitlist', '');
const API_URL = `${API_BASE_URL}/api/admin/waitlist`;

const AdminLeads: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [leads, setLeads] = useState<ApiLead[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchLeads();
    // Actualiser toutes les 30 secondes
    const interval = setInterval(fetchLeads, 30000);
    return () => clearInterval(interval);
  }, []);

  const fetchLeads = async () => {
    try {
      const response = await fetch(API_URL, {
        headers: {
          'X-Admin-Key': ADMIN_KEY
        }
      });

      if (response.ok) {
        const data = await response.json();
        setLeads(data.data || []);
        setError('');
      } else {
        setError('Erreur d\'authentification admin');
      }
    } catch (err) {
      setError('Impossible de se connecter à l\'API');
      console.error('Fetch error:', err);
    } finally {
      setLoading(false);
    }
  };

  const getActorLabel = (type: string) => {
    const labels: Record<string, string> = {
      vendor: '🏪 Vendeur',
      buyer: '🛍️ Acheteur',
      rider: '🏍️ Livreur'
    };
    return labels[type] || type;
  };

  const getActorColor = (type: string) => {
    const colors: Record<string, string> = {
      vendor: 'bg-blue-50 text-blue-600',
      buyer: 'bg-emerald-50 text-emerald-600',
      rider: 'bg-orange-50 text-orange-600'
    };
    return colors[type] || 'bg-slate-50 text-slate-600';
  };

  return (
    <div className="fixed inset-0 z-[100] bg-slate-900/90 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-4xl rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh] animate-in fade-in zoom-in duration-300">
        <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-emerald-50">
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-bold text-slate-900">Dashboard TrustLink Waitlist</h2>
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
            </div>
            <p className="text-sm text-slate-500">
              {loading ? 'Chargement...' : `${leads.length} inscription(s) • Actualisé automatiquement`}
            </p>
          </div>
          <button 
            onClick={onClose} 
            className="bg-white hover:bg-slate-100 text-slate-400 hover:text-slate-600 p-2 rounded-full transition-all border border-slate-200 shadow-sm"
          >
            <i className="fas fa-times w-5 h-5 flex items-center justify-center"></i>
          </button>
        </div>
        
        <div className="flex-grow overflow-y-auto p-6">
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-600 p-4 rounded-xl mb-4">
              <i className="fas fa-exclamation-triangle mr-2"></i>
              {error}
            </div>
          )}

          {loading ? (
            <div className="flex flex-col items-center justify-center py-20 text-emerald-600">
              <i className="fas fa-circle-notch animate-spin text-4xl mb-4"></i>
              <p className="text-slate-500 font-medium">Connexion à l'API...</p>
            </div>
          ) : leads.length === 0 ? (
            <div className="text-center py-16 text-slate-400">
              <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-dashed border-slate-200">
                <i className="fas fa-inbox text-2xl"></i>
              </div>
              <p className="font-medium">Aucune inscription pour le moment.</p>
              <p className="text-sm">Partagez votre lien pour commencer à collecter des inscriptions !</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="text-slate-400 text-xs uppercase tracking-[0.1em] border-b border-slate-100">
                    <th className="pb-4 font-bold px-2">Nom</th>
                    <th className="pb-4 font-bold px-2">Email</th>
                    <th className="pb-4 font-bold px-2">Téléphone</th>
                    <th className="pb-4 font-bold px-2">Type</th>
                    <th className="pb-4 font-bold px-2">Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {leads.map((lead) => (
                    <tr key={lead.id} className="hover:bg-emerald-50/30 transition-colors group">
                      <td className="py-4 px-2">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-bold">
                            {lead.name[0].toUpperCase()}
                          </div>
                          <span className="font-semibold text-slate-900">{lead.name}</span>
                        </div>
                      </td>
                      <td className="py-4 px-2 text-slate-600 text-sm font-mono">
                        {lead.email}
                      </td>
                      <td className="py-4 px-2 text-slate-600 text-sm font-mono">
                        {lead.phone}
                      </td>
                      <td className="py-4 px-2">
                        <span className={`inline-flex items-center px-2 py-1 rounded text-xs font-bold ${getActorColor(lead.actor_type)}`}>
                          {getActorLabel(lead.actor_type)}
                        </span>
                      </td>
                      <td className="py-4 px-2 text-slate-500 text-sm">
                        {new Date(lead.created_at).toLocaleDateString('fr-FR', {
                          day: 'numeric',
                          month: 'short',
                          hour: '2-digit',
                          minute: '2-digit'
                        })}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
        
        <div className="p-4 bg-slate-50 border-t border-slate-100 flex justify-between items-center">
          <p className="text-[10px] text-slate-400 flex items-center gap-2">
            <i className="fas fa-shield-alt text-emerald-500"></i>
            Données sécurisées via API TrustLink • PostgreSQL
          </p>
          <div className="flex gap-2">
            <button 
              onClick={fetchLeads}
              className="text-xs font-bold text-slate-600 hover:text-emerald-600 transition-colors flex items-center gap-1 px-3 py-1 rounded-lg hover:bg-white"
            >
              <i className="fas fa-sync-alt"></i> ACTUALISER
            </button>
            <a 
              href={`${API_URL}/export?`}
              className="text-xs font-bold text-slate-600 hover:text-emerald-600 transition-colors flex items-center gap-1 px-3 py-1 rounded-lg hover:bg-white"
            >
              <i className="fas fa-download"></i> EXPORTER
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLeads;