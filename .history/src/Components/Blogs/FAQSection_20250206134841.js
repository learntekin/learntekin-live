import React, { Component } from "react";
// Import necessary functions from Firebase modular SDK
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

// Your Firebase configuration (replace these with your own values)
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

class FAQSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      faqs: [], // Store FAQ data from Firestore
    };
  }

  componentDidMount() {
    document.title = "Faq";

    // Initialize Firebase (modular version)
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

    // Fetch FAQ data from Firestore
    const faqsCollection = collection(db, "faqs");
    getDocs(faqsCollection)
      .then((querySnapshot) => {
        const faqs = [];
        querySnapshot.forEach((doc) => {
          faqs.push(doc.data());
        });
        this.setState({ faqs });
      })
      .catch((error) => {
        console.error("Error getting FAQs: ", error);
      });
  }

  render() {
    return (
      <section id="faq" className="faq" style={{ marginTop: "4rem" }}>
        <div className="container-fluid" data-aos="fade-up">
          <div className="section-title">
            <h2>Frequently Asked Questions</h2>
          </div>

          <ul className="faq-list accordion" data-aos="fade-up">
            {this.state.faqs.map((faq, index) => (
              <li key={index}>
                <a
                  data-bs-toggle="collapse"
                  className="collapsed"
                  data-bs-target={`#faq${index}`}
                >
                  {faq.question}
                  <i className="bx bx-chevron-down icon-show"></i>
                  <i className="bx bx-x icon-close"></i>
                </a>
                <div
                  id={`faq${index}`}
                  className="collapse"
                  data-bs-parent=".faq-list"
                >
                  <p>{faq.answer}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    );
  }
}

export default FAQSection;
