// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "multi-agent-ai-platform-2cafa.firebaseapp.com",
  projectId: "multi-agent-ai-platform-2cafa",
  storageBucket: "multi-agent-ai-platform-2cafa.firebasestorage.app",
  messagingSenderId: "573713015070",
  appId: "1:573713015070:web:0be93d5dfc4fddc8b4a90f",
  measurementId: "G-89GQX0E745"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()