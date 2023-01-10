// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyC5twlhxc2GTIgyeAqcaINjq5w2hb7ntqU",
  authDomain: "fb-tasteit.firebaseapp.com",
  projectId: "fb-tasteit",
  storageBucket: "fb-tasteit.appspot.com",
  messagingSenderId: "861768772946",
  appId: "1:861768772946:web:493567e901895cb44dde8b",
  measurementId: "G-E30PXYZJXY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
