import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQzB88GIZUmQs-a67eMDP9KvZX_Em_UVk",
  authDomain: "cookpilot-121da.firebaseapp.com",
  projectId: "cookpilot-121da",
  storageBucket: "cookpilot-121da.appspot.com",
  messagingSenderId: "468372532798",
  appId: "1:468372532798:web:3a9c5d4e7823f7b5a8c3e9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
