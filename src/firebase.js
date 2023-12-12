// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyChmnfgsqHnVbkjycT0s7RNgHoKrKpBlMc",
  authDomain: "photographer-web-1.firebaseapp.com",
  projectId: "photographer-web-1",
  storageBucket: "photographer-web-1.appspot.com",
  messagingSenderId: "136651704273",
  appId: "1:136651704273:web:5fbaa07176144da36802f0",
  measurementId: "G-PM0WH07VE9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const analytics = getAnalytics(app);
export const storage = getStorage();

