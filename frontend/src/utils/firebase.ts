import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsibHw3ga2sh65MAMZSHybShbQ08qSjew",
  authDomain: "cookpilot-121da.firebaseapp.com",
  projectId: "cookpilot-121da",
  storageBucket: "cookpilot-121da.firebasestorage.app",
  messagingSenderId: "780105646457",
  appId: "1:780105646457:web:d8dcde5f94f5d7acebefa8",
  measurementId: "G-NP3X0EYWHE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
