// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFuupHhrOUrtoY94opkN99_TsgHiDhGgY",
  authDomain: "jp-goals-tracker.firebaseapp.com",
  projectId: "jp-goals-tracker",
  storageBucket: "jp-goals-tracker.appspot.com",  // fix: should be "appspot.com" not "firebasestorage.app"
  messagingSenderId: "80109112143",
  appId: "1:80109112143:web:23b51c7c8393fd0a89133a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Export db to use it in other files
export { db };
