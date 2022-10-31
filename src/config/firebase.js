import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDn2OINKQ0j10Wvu8mViO96NWMrBbQ-eUE",
  authDomain: "todo-list-6f1db.firebaseapp.com",
  projectId: "todo-list-6f1db",
  storageBucket: "todo-list-6f1db.appspot.com",
  messagingSenderId: "1032505624829",
  appId: "1:1032505624829:web:fd796b4ff86d570a75d694",
  measurementId: "G-KTS90VHLCX"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
