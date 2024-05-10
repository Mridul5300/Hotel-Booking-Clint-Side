// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: "AIzaSyBDEsXYOLf-ZMR6OA6ArNCkkXNE39Q_tiU",
  // authDomain: "booking-website-76469.firebaseapp.com",
  // projectId: "booking-website-76469",
  // storageBucket: "booking-website-76469.appspot.com",
  // messagingSenderId: "959668824870",
  // appId: "1:959668824870:web:843147c0ef0f24645dafe7"
apiKey: import.meta.env.VITE_apiKey,
authDomain: import.meta.env.VITE_authDomain,
projectId: import.meta.env.VITE_projectId,
storageBucket: import.meta.env.VITE_storageBucket,
messagingSenderId: import.meta.env.VITEessagingSenderId,
appId: import.meta.env.VITE_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth