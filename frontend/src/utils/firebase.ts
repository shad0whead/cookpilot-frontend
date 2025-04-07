import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY || "AIzaSyDQzB88GIZUmQs-a67eMDP9KvZX_Em_UVk",
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN || "cookpilot-121da.firebaseapp.com",
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID || "cookpilot-121da",
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET || "cookpilot-121da.appspot.com",
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID || "468372532798",
  appId: process.env.REACT_APP_FIREBASE_APP_ID || "1:468372532798:web:3a9c5d4e7823f7b5a8c3e9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
