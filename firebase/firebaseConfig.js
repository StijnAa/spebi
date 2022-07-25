// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBgZTGEV08f5mQa9gPweLFt6a4RUfbscNo",
  authDomain: "spebi-271a6.firebaseapp.com",
  projectId: "spebi-271a6",
  storageBucket: "spebi-271a6.appspot.com",
  messagingSenderId: "854172114468",
  appId: "1:854172114468:web:03b51f5b002eb097a002b1",
  measurementId: "G-3LK6FR8ZS1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app)