import React, { Component } from "react";
import firebase from "firebase/app";
import "firebase/firestore";

// Your Firebase configuration (replace these with your own values)
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
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

    // Initialize Firebase
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }

    // Fetch FAQ data from Firestore
    const db = firebase.firestore();
    db.collection("faqs") // Assuming your Firestore collection is named "faqs"
      .get()
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
