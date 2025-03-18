import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"; // Importa a autenticação

const firebaseConfig = {
  apiKey: "AIzaSyAvi_MR__0wTrYhRLXBUV8_fcFYNxSab7Y",
  authDomain: "fast-homes-a9c85.firebaseapp.com",
  projectId: "fast-homes-a9c85",
  storageBucket: "fast-homes-a9c85.appspot.com", // Corrigido de "firebasestorage.app" para ".appspot.com"
  messagingSenderId: "856460284462",
  appId: "1:856460284462:web:91092e41b5fe66279385bf"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);

// Inicializa Firestore e Auth
export const db = getFirestore(app);
export const auth = getAuth(app); // Adicionado auth
