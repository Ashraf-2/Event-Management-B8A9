// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCY9n81pzGPyZupjVPennJEkrFtPmYqxrE",
  authDomain: "as-9-event-management-auth.firebaseapp.com",
  projectId: "as-9-event-management-auth",
  storageBucket: "as-9-event-management-auth.appspot.com",
  messagingSenderId: "559370030852",
  appId: "1:559370030852:web:1d8743751dcb28cf064a51"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;