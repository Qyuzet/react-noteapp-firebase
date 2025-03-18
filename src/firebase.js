// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCUQpmd9trViRb7NQidDctFOjc7UkKRlEQ",
  authDomain: "noteapp-58f35.firebaseapp.com",
  projectId: "noteapp-58f35",
  storageBucket: "noteapp-58f35.firebasestorage.app",
  messagingSenderId: "31459837184",
  appId: "1:31459837184:web:c5fee61c03ae164103dfe5",
  measurementId: "G-JF154SD0JG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
