import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAvi_MR__0wTrYhRLXBUV8_fcFYNxSab7Y",
  authDomain: "fast-homes-a9c85.firebaseapp.com",
  projectId: "fast-homes-a9c85",
  storageBucket: "fast-homes-a9c85.firebasestorage.app",
  messagingSenderId: "856460284462",
  appId: "1:856460284462:web:91092e41b5fe66279385bf"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);