// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCIIXlRqqafcC61r4VGsogDT-lTepmbWtg",
  authDomain: "bracket-night.firebaseapp.com",
  projectId: "bracket-night",
  storageBucket: "bracket-night.appspot.com",
  messagingSenderId: "703767315160",
  appId: "1:703767315160:web:5a49891731bb816e3d8dad",
  measurementId: "G-9E473PW57C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getDatabase(app);