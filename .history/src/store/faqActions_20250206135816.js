import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { FETCH_FAQS_REQUEST, FETCH_FAQS_SUCCESS, FETCH_FAQS_FAILURE } from './actionTypes';

// Your Firebase config (replace this with your actual config)
const firebaseConfig = {
  apiKey: "AIzaSyC6dbehEp7W1xLcy_mKajeAxwEMAJkCR1Y",
  authDomain: "learntekin-965be.firebaseapp.com",
  databaseURL: "https://learntekin-965be-default-rtdb.firebaseio.com",
  projectId: "learntekin-965be",
  storageBucket: "learntekin-965be.firebasestorage.app",
  messagingSenderId: "224295322327",
  appId: "1:224295322327:web:eaec4938993a8a75eae692",
  measurementId: "G-VSFXH72WK5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const fetchFaqs = () => {
  return async (dispatch) => {
    dispatch({ type: FETCH_FAQS_REQUEST });

    try {
      // Reference the faqs collection
      const faqsCollection = collection(db, "faqs");

      // Fetch documents from the collection
      const querySnapshot = await getDocs(faqsCollection);

      // Store the fetched FAQs
      const faqs = [];
      querySnapshot.forEach((doc) => {
        faqs.push(doc.data());
      });

      dispatch({ type: FETCH_FAQS_SUCCESS, payload: faqs });
    } catch (error) {
      console.error("Error fetching FAQs: ", error); // Log error for debugging
      dispatch({ type: FETCH_FAQS_FAILURE, error: error.message });
    }
  };
};
