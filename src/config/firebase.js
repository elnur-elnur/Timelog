import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDVuvdXP-Cry-cAQpduf21bLelisB2eUlg",
  authDomain: "my-time-logg.firebaseapp.com",
  projectId: "my-time-logg",
  storageBucket: "my-time-logg.appspot.com",
  messagingSenderId: "745491902831",
  appId: "1:745491902831:web:d5c4f9de84a17128d6789a",
  measurementId: "G-E7R9BN9529",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

