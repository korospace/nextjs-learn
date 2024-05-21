// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAs78qfMYdaYeYuNSCOgqKwpnzyDdOT45M",
  authDomain: "nextjs-learn-135be.firebaseapp.com",
  projectId: "nextjs-learn-135be",
  storageBucket: "nextjs-learn-135be.appspot.com",
  messagingSenderId: "813318948603",
  appId: "1:813318948603:web:385e5868f501241f7e925e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app