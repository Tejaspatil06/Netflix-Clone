import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCOjF3o95TEaB98BT5DmLE2GtMoLuOzPd4",
  authDomain: "react-netflix-clone-581cc.firebaseapp.com",
  projectId: "react-netflix-clone-581cc",
  storageBucket: "react-netflix-clone-581cc.appspot.com",
  messagingSenderId: "120179431709",
  appId: "1:120179431709:web:dc2b0e79eaf97da0c169f4",
  measurementId: "G-H8JE31QXHT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);