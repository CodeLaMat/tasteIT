// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: "AIzaSyCQo83gZvEAcb3aTRZkNJmgV3PEt7fkfvc",
  authDomain: "tasteit-9c866.firebaseapp.com",
  projectId: "tasteit-9c866",
  storageBucket: "tasteit-9c866.appspot.com",
  messagingSenderId: "530820278455",
  appId: "1:530820278455:web:4d2f9ac88af563f0068532",
  measurementId: "G-GMPT25JVTK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
