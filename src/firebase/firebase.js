import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";



const firebaseConfig = {
  apiKey: "AIzaSyC8DuZcwGmmwjcFsUOoRZEkUB3E9bf9f8E",
  authDomain: "waltdejesus-backend.firebaseapp.com",
  projectId: "waltdejesus-backend",
  storageBucket: "waltdejesus-backend.appspot.com",
  messagingSenderId: "819525159829",
  appId: "1:819525159829:web:d535d303620a1d5967449c",
  measurementId: "G-Q9HGLHFB8K"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);