
import React, { useState, useEffect } from 'react';
import { subscribeToLeads, Lead } from '../services/leads';

const AdminLeads: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // On s'abonne aux flux de données Firestore
    const unsubscribe = subscribeToLeads((updatedLeads) => {
      setLeads(updatedLeads);
      setLoading(false);
    });

    // Nettoyage de l'abonnement quand on ferme le composant
    return () => unsubscribe();
  }, []);

  return (
    <div className="fixed inset-0 z-[100] bg-slate-900/90 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[80vh] animate-in fade-in zoom-in duration-300">
        <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-emerald-50">
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-bold text-slate-900">Base de données TrustLink</h2>
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
            </div>
            <p className="text-sm text-slate-500">
              {loading ? 'Connexion au serveur...' : `${leads.length} prospect(s) connectés en direct`}
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
          {loading ? (
            <div className="flex flex-col items-center justify-center py-20 text-emerald-600">
              <i className="fas fa-circle-notch animate-spin text-4xl mb-4"></i>
              <p className="text-slate-500 font-medium">Synchronisation Firestore...</p>
            </div>
          ) : leads.length === 0 ? (
            <div className="text-center py-16 text-slate-400">
              <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-dashed border-slate-200">
                <i className="fas fa-inbox text-2xl"></i>
              </div>
              <p className="font-medium">Aucune inscription pour le moment.</p>
              <p className="text-sm">Diffusez votre lien pour commencer à collecter des leads !</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="text-slate-400 text-xs uppercase tracking-[0.1em] border-b border-slate-100">
                    <th className="pb-4 font-bold px-2">Email du prospect</th>
                    <th className="pb-4 font-bold px-2">Date & Heure</th>
                    <th className="pb-4 font-bold px-2 text-right">Source</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {leads.map((lead, i) => (
                    <tr key={i} className="hover:bg-emerald-50/30 transition-colors group">
                      <td className="py-4 px-2">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-bold">
                            {lead.email[0].toUpperCase()}
                          </div>
                          <span className="font-semibold text-slate-900">{lead.email}</span>
                        </div>
                      </td>
                      <td className="py-4 px-2 text-slate-500 text-sm">
                        {new Date(lead.date).toLocaleDateString('fr-FR', {
                          day: 'numeric',
                          month: 'short',
                          hour: '2-digit',
                          minute: '2-digit'
                        })}
                      </td>
                      <td className="py-4 px-2 text-right">
                        <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-blue-50 text-blue-600 uppercase tracking-tighter">
                          Landing Page
                        </span>
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
            Données chiffrées de bout en bout via Google Cloud Firestore
          </p>
          <button 
            onClick={() => window.print()}
            className="text-[10px] font-bold text-slate-600 hover:text-emerald-600 transition-colors flex items-center gap-1"
          >
            <i className="fas fa-download"></i> EXPORTER
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminLeads;
