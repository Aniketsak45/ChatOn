// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import { Constants } from "expo-constants";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBl0BCy4idcY4Fjw0A5sndMHt6i5U-0XQw",
  authDomain: "hatme-6734c.firebaseapp.com",
  projectId: "chatme-6734c",
  storageBucket: "chatme-6734c.appspot.com",
  messagingSenderId: "140098375963",
  appId:"1:140098375963:web:3089010c25b421636043be",
  databaseURL: "databaseURL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const database = getFirestore();