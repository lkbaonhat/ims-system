// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBrsP0wAxXAtqks5PpfWmGPTZa2lJnYUDY",
  authDomain: "ims-system-e4f27.firebaseapp.com",
  projectId: "ims-system-e4f27",
  storageBucket: "ims-system-e4f27.appspot.com",
  messagingSenderId: "207255606224",
  appId: "1:207255606224:web:05f6a7588226008b869fd5",
  measurementId: "G-9R4JG52NS8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const imgDB = getStorage(app);
const pdfDB = getStorage(app);

export { imgDB, pdfDB };