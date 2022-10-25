// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDCwuXPnP2sOaQ9ycA2iWSp5gRRRXAt31M",
  authDomain: "digital-course-bd-client.firebaseapp.com",
  projectId: "digital-course-bd-client",
  storageBucket: "digital-course-bd-client.appspot.com",
  messagingSenderId: "975667682327",
  appId: "1:975667682327:web:47d77080979a4388c51052",
  measurementId: "G-S1RJ6JE53C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export default app