
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

/**
 * CONFIGURATION FIREBASE
 * 
 * Les variables sont récupérées depuis le fichier .env.local
 * Assurez-vous que les noms correspondent exactement (préfixe VITE_).
 */

const firebaseConfig = {
  apiKey: process.env.VITE_FIREBASE_API_KEY,
  authDomain: process.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VITE_FIREBASE_SENDER_ID,
  appId: process.env.VITE_FIREBASE_APP_ID
};

// Initialisation de Firebase
const app = initializeApp(firebaseConfig);

// Exportation de la base de données Firestore
export const db = getFirestore(app);
