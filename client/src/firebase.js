// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-22b47.firebaseapp.com",
  projectId: "mern-estate-22b47",
  storageBucket: "mern-estate-22b47.appspot.com",
  messagingSenderId: "28601473433",
  appId: "1:28601473433:web:b9cf3dff85958eb3261b08",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
