
import { db } from './firebase';
import { collection, addDoc, query, orderBy, Timestamp, onSnapshot } from 'firebase/firestore';

export interface Lead {
  email: string;
  date: string;
  status: 'pending' | 'verified';
}

/**
 * Enregistre un nouveau prospect dans Firestore.
 * La collection "leads" sera créée automatiquement au premier appel.
 */
export const saveLead = async (email: string): Promise<boolean> => {
  try {
    await addDoc(collection(db, "leads"), {
      email,
      date: Timestamp.now(),
      status: 'pending'
    });
    return true;
  } catch (error) {
    console.error("Erreur lors de l'enregistrement Firebase:", error);
    return false;
  }
};

/**
 * Écoute les changements de la collection leads en temps réel.
 * @param callback Fonction appelée à chaque mise à jour de la base de données.
 * @returns Une fonction de désinscription (unsubscribe) pour nettoyer le listener.
 */
export const subscribeToLeads = (callback: (leads: Lead[]) => void) => {
  const q = query(collection(db, "leads"), orderBy("date", "desc"));
  
  return onSnapshot(q, (querySnapshot) => {
    const leads = querySnapshot.docs.map(doc => {
      const data = doc.data();
      return {
        email: data.email,
        date: data.date?.toDate ? data.date.toDate().toISOString() : new Date().toISOString(),
        status: data.status
      } as Lead;
    });
    callback(leads);
  }, (error) => {
    console.error("Erreur temps réel Firestore:", error);
  });
};

export const clearLeads = () => {
  console.warn("La suppression groupée n'est pas recommandée via le client Firestore pour des raisons de sécurité.");
};
