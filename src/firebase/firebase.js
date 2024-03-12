import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";



const firebaseConfig = {
  apiKey: "AIzaSyD2ZkvhQ-mUKyBHM0Z-PsEGlp3ilmXZnk0",
  authDomain: "waltdejesus-f592e.firebaseapp.com",
  projectId: "waltdejesus-f592e",
  storageBucket: "waltdejesus-f592e.appspot.com",
  messagingSenderId: "525327159998",
  appId: "1:525327159998:web:e6150cf117e962a8be04ef",
  measurementId: "G-E0DKLX4DHD"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);