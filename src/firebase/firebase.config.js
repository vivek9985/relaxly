// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANodMTiEMn7xwoji5kH_WBLjdPfLIucyk",
  authDomain: "relaxly-auth.firebaseapp.com",
  projectId: "relaxly-auth",
  storageBucket: "relaxly-auth.appspot.com",
  messagingSenderId: "939921128974",
  appId: "1:939921128974:web:847ba7c2580937a09b065f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;