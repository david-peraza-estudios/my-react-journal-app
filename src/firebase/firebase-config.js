import 'firebase/firestore';
import 'firebase/auth';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { GoogleAuthProvider } from 'firebase/auth';

 
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-G3hP-rbC_OwYWyYYXnKBnTn48j31o-8",
  authDomain: "curso-react-fh-50afa.firebaseapp.com",
  projectId: "curso-react-fh-50afa",
  storageBucket: "curso-react-fh-50afa.appspot.com",
  messagingSenderId: "1037797384180",
  appId: "1:1037797384180:web:fade7a2eb8ab1fea1ea3a1"
};

 
// Initialize Firebase
const app = initializeApp(firebaseConfig);
 
const db = getFirestore();
 
const googleAuthProvider = new GoogleAuthProvider();
 
export{
    db,
    googleAuthProvider
}