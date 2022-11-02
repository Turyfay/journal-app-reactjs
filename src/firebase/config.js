// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCC3Af8S93NcQ71bI-r1a3RCXoAlHJ9kPE",
  authDomain: "react-cursos-cf72b.firebaseapp.com",
  projectId: "react-cursos-cf72b",
  storageBucket: "react-cursos-cf72b.appspot.com",
  messagingSenderId: "293733565878",
  appId: "1:293733565878:web:61f7c496ce2b68c9a92d17",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(FirebaseApp);

export const FirebaseDB = getFirestore(FirebaseApp);
