import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = initializeApp(
    {
        apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
        authDomain: import.meta.env.VITE_APP_FIREBASE_AUTH_DOMAIN,
        projectId: import.meta.env.VITE_APP_FIREBASE_PROJECT_ID
    }
);

const db = getFirestore(firebaseConfig);

export default db;