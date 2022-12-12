import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyBqhGc8n9oRS4HjNydear-WmjlKsNbRais",

  authDomain: "cupcakeking-db.firebaseapp.com",

  projectId: "cupcakeking-db",

  storageBucket: "cupcakeking-db.appspot.com",

  messagingSenderId: "912045967985",

  appId: "1:912045967985:web:cb826e747b894258cf29d0",
};

// Initialize Firebase

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
