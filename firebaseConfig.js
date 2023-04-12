// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDf0A0nWp6zYAur6Rg1l7706FzWHrHq2aU",
  authDomain: "uragi-7062f.firebaseapp.com",
  projectId: "uragi-7062f",
  storageBucket: "uragi-7062f.appspot.com",
  messagingSenderId: "166372434640",
  appId: "1:166372434640:web:54196c8ba5e2b74a3bf4d5",
  measurementId: "G-PW8SEYJM3P"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
// const analytics = getAnalytics(app);