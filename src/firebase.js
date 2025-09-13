// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC426zi9tWDQTLChtODfzzrQR8Ag-Cx6Ww",
  authDomain: "safarni-820b0.firebaseapp.com",
  projectId: "safarni-820b0",
  storageBucket: "safarni-820b0.firebasestorage.app",
  messagingSenderId: "350921891766",
  appId: "1:350921891766:web:9860916c0775de4fbf6b17",
  measurementId: "G-EWNE5C03HP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export auth
export const auth = getAuth(app);
