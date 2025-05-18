import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCKuNNGe1P97Y9ln_xMdXsUIqd5fNUFHWA",
  authDomain: "resto-app-5b873.firebaseapp.com",
  projectId: "resto-app-5b873",
  storageBucket: "resto-app-5b873.appspot.com",
  messagingSenderId: "635131727826",
  appId: "1:635131727826:web:1567e58102e1982b8e020b",
  measurementId: "G-VGHM4LKTZT"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
export default db;