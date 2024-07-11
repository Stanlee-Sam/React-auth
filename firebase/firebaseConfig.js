// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAyEjnN_UUvKv7W8sv79DLpSBTrET0EfrY",
  authDomain: "react-auth-f674e.firebaseapp.com",
  projectId: "react-auth-f674e",
  storageBucket: "react-auth-f674e.appspot.com",
  messagingSenderId: "249073247507",
  appId: "1:249073247507:web:22f68d63775ceb6f0ea6e6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export default app