import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import "firebase/compat/database";
import "firebase/compat/storage";
import { getAuth } from 'firebase/auth';
 
import "firebase/database";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC6dbehEp7W1xLcy_mKajeAxwEMAJkCR1Y",
    authDomain: "learntekin-965be.firebaseapp.com",
    databaseURL: "https://learntekin-965be-default-rtdb.firebaseio.com",
    projectId: "learntekin-965be",
    storageBucket: "learntekin-965be.firebasestorage.app",
    messagingSenderId: "224295322327",
    appId: "1:224295322327:web:f6c1bde3f6494a17eae692",
    measurementId: "G-M4C0ZWRMS0"
  };

const app=firebase.initializeApp(firebaseConfig);
export const  auth = getAuth(app);
 
console.log('Firebase initialized');

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Reference to the Firebase Realtime Database
const database = firebase.database();

export default firebase;