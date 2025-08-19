// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
 //excluido o apiKey
  authDomain: "api-progint.firebaseapp.com",
  projectId: "api-progint",
  storageBucket: "api-progint.firebasestorage.app",
  messagingSenderId: "484096209546",
  appId: "1:484096209546:web:6c8134f27cb42093c7f373"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
