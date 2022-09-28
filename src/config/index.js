// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  GoogleAuthProvider,
  getRedirectResult,
  onAuthStateChanged,
} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOueCoB8-RQ_uyrIrGqCU7aNiddqSTPNc",
  authDomain: "emmanuel-my-app.firebaseapp.com",
  projectId: "emmanuel-my-app",
  storageBucket: "emmanuel-my-app.appspot.com",
  messagingSenderId: "454674279388",
  appId: "1:454674279388:web:9d6d2c527e14c004eebd19",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Setup auth provider
const provider = new GoogleAuthProvider();
const auth = getAuth();

export {
  app,
  provider,
  auth,
  signInWithRedirect,
  getRedirectResult,
  onAuthStateChanged,
};
