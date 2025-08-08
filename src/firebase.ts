// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyBu4l2038JqphH84B_96Or1ZyC-TeSvtPA",
//   authDomain: "portfolio-comments-f5bcb.firebaseapp.com",
//   projectId: "portfolio-comments-f5bcb",
//   storageBucket: "portfolio-comments-f5bcb.firebasestorage.app",
//   messagingSenderId: "692983158238",
//   appId: "1:692983158238:web:6b7f0b5207cccecd56b94f",
//   measurementId: "G-JBTC8FQLNK",
// };

// const app = initializeApp(firebaseConfig);

// const db = getFirestore(app);

// export { db };

// firebase.ts

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";

// Firebase konfiqurasiya məlumatların
const firebaseConfig = {
  apiKey: "AIzaSyBu4l2038JqphH84B_96Or1ZyC-TeSvtPA",
  authDomain: "portfolio-comments-f5bcb.firebaseapp.com",
  databaseURL: "https://portfolio-comments-f5bcb-default-rtdb.firebaseio.com", // Realtime DB üçün ƏLAVƏDİR
  projectId: "portfolio-comments-f5bcb",
  storageBucket: "portfolio-comments-f5bcb.appspot.com",
  messagingSenderId: "692983158238",
  appId: "1:692983158238:web:6b7f0b5207cccecd56b94f",
  measurementId: "G-JBTC8FQLNK",
};

// Firebase app-i başladırıq
const app = initializeApp(firebaseConfig);

// Firestore (Kommentlər üçün)
const db = getFirestore(app);

// Realtime Database (Sayğac üçün)
const database = getDatabase(app);

// Hər ikisini export edirik
export { db, database };
