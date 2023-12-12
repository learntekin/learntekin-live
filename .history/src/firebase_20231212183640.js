import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import "firebase/compat/database";
import "firebase/compat/storage";
import {initializeApp} from "firebase/app"
import { getAuth } from 'firebase/auth';
 
import "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyC6dbehEp7W1xLcy_mKajeAxwEMAJkCR1Y",
  authDomain: "learntekin-965be.firebaseapp.com",
  projectId: "learntekin-965be",
  storageBucket: "learntekin-965be.appspot.com",
  messagingSenderId: "224295322327",
  appId: "1:224295322327:web:d3d5dd6db8b312afeae692",
  measurementId: "G-MR9PL1C7ST"
};

const app=firebase.initializeApp(firebaseConfig);
export const  auth = getAuth(app);
 
console.log('Firebase initialized');

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Reference to the Firebase Realtime Database
const database = firebase.database();

export default firebase;