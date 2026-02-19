// services/leads.ts - API TrustLink Waitlist
// Utilise les variables d'environnement pour la sécurité

interface LeadData {
  name: string;
  email: string;
  phone: string;
  actor_type: string;
}

// URL de l'API depuis les variables d'environnement
const API_URL = import.meta.env.VITE_API_URL

/**
 * Enregistre un nouveau prospect dans l'API TrustLink
 */
export const saveLead = async (data: LeadData): Promise<boolean> => {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        phone: data.phone,
        actor_type: data.actor_type,
      }),
    });

    if (response.ok) {
      const result = await response.json();
      console.log('✅ Lead saved:', result);
      return true;
    } else {
      const error = await response.json();
      console.error('❌ Error saving lead:', error);
      
      // Gérer le cas de l'email en double
      if (response.status === 409) {
        alert('Cet email est déjà inscrit sur notre liste d\'attente !');
      }
      
      return false;
    }
  } catch (error) {
    console.error('❌ Network error:', error);
    return false;
  }
};

// Interface pour compatibilité avec l'ancien code (si nécessaire)
export interface Lead {
  email: string;
  date: string;
  status: 'pending' | 'verified';
}

// Fonction vide pour compatibilité (non utilisée avec notre API)
export const subscribeToLeads = (callback: (leads: Lead[]) => void) => {
  console.warn('subscribeToLeads: Non implémenté avec l\'API TrustLink');
  return () => {}; // Fonction unsubscribe vide
};

export const clearLeads = () => {
  console.warn('clearLeads: Utiliser le dashboard admin à la place');
};
