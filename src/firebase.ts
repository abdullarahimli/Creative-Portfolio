import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBu4l2038JqphH84B_96Or1ZyC-TeSvtPA",
  authDomain: "portfolio-comments-f5bcb.firebaseapp.com",
  projectId: "portfolio-comments-f5bcb",
  storageBucket: "portfolio-comments-f5bcb.firebasestorage.app",
  messagingSenderId: "692983158238",
  appId: "1:692983158238:web:6b7f0b5207cccecd56b94f",
  measurementId: "G-JBTC8FQLNK",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
