import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import "firebase/compat/database";
import "firebase/compat/storage";
import {initializeApp} from "firebase/app"
import { getAuth } from 'firebase/auth';
import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyDlHS_UZ5zGZATHtS1OonoCrX1m9kFnZ6Y",
    authDomain: "selvfi.firebaseapp.com",
    databaseURL: "https://selvfi-default-rtdb.firebaseio.com",
    projectId: "selvfi",
    storageBucket: "selvfi.appspot.com",
    messagingSenderId: "80947274395",
    appId: "1:80947274395:web:ffb698fb40da8908abdc3e",
    measurementId: "G-SFRCRRDZM1"
};

const app=firebase.initializeApp(firebaseConfig);
export const  auth = getAuth(app);
 
console.log('Firebase initialized');

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Reference to the Firebase Realtime Database
const database = firebase.database();

export default firebase;