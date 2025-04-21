import { initializeApp ,getApp ,getApps } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyDEpyJoITbvA4tudKHQIDDoxsOVv8Qxluk",
  authDomain: "intervbit.firebaseapp.com",
  projectId: "intervbit",
  storageBucket: "intervbit.firebasestorage.app",
  messagingSenderId: "697119190299",
  appId: "1:697119190299:web:247b23f5418dd7c56437be",
  measurementId: "G-62SJJMLS9C"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig): getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);