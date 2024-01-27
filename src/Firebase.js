// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhsw7eAXTD9IrJsHVzOh1hBGnaoV8SZKA",
  authDomain: "ticket-resale-a0f52.firebaseapp.com",
  projectId: "ticket-resale-a0f52",
  storageBucket: "ticket-resale-a0f52.appspot.com",
  messagingSenderId: "9383708288",
  appId: "1:9383708288:web:3f634f4dbfc1be9c518865",
  measurementId: "G-7X5EEEWLD0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);