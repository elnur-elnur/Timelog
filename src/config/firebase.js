import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDUYcynU9Lid9jToQUxt-qDGDC05J7EM3c",
  authDomain: "time-logg-app.firebaseapp.com",
  projectId: "time-logg-app",
  storageBucket: "time-logg-app.appspot.com",
  messagingSenderId: "1004929905027",
  appId: "1:1004929905027:web:4c23387a1bce391dfec6b6",
  measurementId: "G-KT1SVYTWGL",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
