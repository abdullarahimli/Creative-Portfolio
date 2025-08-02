// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBu4l2038JqphH84B_96Or1ZyC-TeSvtPA",
//   authDomain: "portfolio-comments-f5bcb.firebaseapp.com",
//   projectId: "portfolio-comments-f5bcb",
//   storageBucket: "portfolio-comments-f5bcb.firebasestorage.app",
//   messagingSenderId: "692983158238",
//   appId: "1:692983158238:web:6b7f0b5207cccecd56b94f",
//   measurementId: "G-JBTC8FQLNK"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

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
