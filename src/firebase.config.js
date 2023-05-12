// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyD15mP9nuZvw_0TPg3YkySLjZ_k6Sild7c",
  authDomain: "darmexpress.firebaseapp.com",
  projectId: "darmexpress",
  storageBucket: "darmexpress.appspot.com",
  messagingSenderId: "490139154667",
  appId: "1:490139154667:web:6a1bde65dbf9d5265de6ae",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
