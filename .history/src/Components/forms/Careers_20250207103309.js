import React, { Component } from "react";
import { Icon } from "@iconify/react";
import firebase from "../../firebase";
import "firebase/database";

// Reference to the Firebase Realtime Database
const database = firebase.database();

export default class Careers extends Component {
  handleSubmit = (event) => {
    event.preventDefault();

    // Collect form data
    const formData = {
      title: document.querySelector('input[name="options"]:checked')?.value || "", // Safeguard against no selection
      firstName: event.target.elements.firstname.value,
      lastName: event.target.elements.lastname.value,
      email: event.target.elements.email.value,
      phoneNumber: event.target.elements.phoneNumber.value,
      role: event.target.elements.role.value,
      referral: event.target.elements.refer.value,
      preferredTimes: {
        morning: event.target.elements.morning.checked,
        afternoon: event.target.elements.afternoon.checked,
        evening: event.target.elements.evening.checked,
      },
    };

    // Push data to the "careers" node in the Firebase Realtime Database
    database
      .ref("careers")
      .push(formData)
      .then(() => {
        alert("Data successfully sent to Firebase!");
      })
      .catch((error) => {
        console.error("Error sending data to Firebase:", error);
        alert("An error occurred while sending your data. Please try again.");
      });
  };

  componentDidMount() {
    document.title = "Careers";
  }

  render() {
    return (
      <section id="careers" className="contact">
        <div className="container-fluid mt-5" data-aos="fade-up">
          <div className="section-title">
            <h2>Careers</h2>
          </div>

          <div className="row" data-aos="fade-up" data-aos-delay="100">
            <div className="col-lg-6">
              <div className="row">
                {/* Information Boxes */}
                {[
                  {
                    title: "Get Started Today",
                    content:
                      "Welcome to the Careers page of Learntekin! We are a technology organization specializing in training and development in website development, Android application development, data analytics, and data science. Our goal is to empower individuals with the skills and knowledge required to succeed in the ever-changing landscape of the technology industry. Learntek IN, LLC today!",
                  },
                  {
                    title: "Let us explore!",
                    content:
                      "At Learntekin, we value creativity, innovation, and collaboration. We believe in providing an environment that fosters growth and personal development. Our team is made up of individuals who are passionate about technology and share a common goal of making a positive impact in the industry.",
                  },
                  {
                    title: "Our Mantra on hiring",
                    content:
                      "We are constantly looking for talented individuals who are willing to take on new challenges and contribute to our mission. Whether you are a seasoned professional or just starting out in your career, we offer a variety of opportunities to help you grow and achieve your career goals.",
                  },
                ].map((box, index) => (
                  <div className="col-md-12" key={index}>
                    <div className="info-box1">
                      <h3>{box.title}</h3>
                      <p align="justify">{box.content}</p>
                    </div>
                  </div>
                ))}

                {/* Job Positions */}
                {[
                  {
                    icon: "mdi:web",
                    title: "Website Developer",
                    content:
                      "We provide top-notch website development services to our clients. Our team of experienced developers uses the latest technologies and frameworks to develop websites that are responsive, fast, and secure.",
                  },
                  {
                    icon: "mdi:ab-testing",
                    title: "Automation Tester",
                    content:
                      "At LearnTek, we provide automation testing services to help our clients save time and reduce errors. Our team of experts uses the latest testing tools and technologies to automate the testing process, resulting in faster and more accurate testing.",
                  },
                  // Add more positions as needed
                ].map((position, index) => (
                  <div className="col-md-12" key={index}>
                    <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
                      <i className="bi">
                        <Icon icon={position.icon} />
                      </i>
                      <h2>{position.title}</h2>
                      <p align="justify">{position.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-lg-6">
              {/* Form Section */}
              <div className="info-box1">
                <form onSubmit={this.handleSubmit} className="php-email-form">
                  <div className="row">
                    {/* Title Options */}
                    <div className="col-md-12 form-group m-2">
                      <label>
                        <input type="radio" name="options" value="Ms." /> Ms.
                      </label>
                      <label>
                        <input type="radio" name="options" value="Mr." /> Mr.
                      </label>
                      <label>
                        <input type="radio" name="options" value="Mrs." /> Mrs.
                      </label>
                    </div>

                    {/* Form Inputs */}
                    {[
                      { id: "firstname", name: "firstname", placeholder: "First Name" },
                      { id: "lastname", name: "lastname", placeholder: "Last Name" },
                      { id: "email", name: "email", placeholder: "Your Email", type: "email" },
                      { id: "phoneNumber", name: "phoneNumber", placeholder: "Your Phone Number", type: "tel" },
                      { id: "role", name: "role", placeholder: "Role apply for" },
                      { id: "refer", name: "refer", placeholder: "Your Referral" },
                    ].map((input, index) => (
                      <div className="col-md-6 form-group" key={index}>
                        <input
                          type={input.type || "text"}
                          className="form-control"
                          name={input.name}
                          id={input.id}
                          placeholder={input.placeholder}
                          required
                        />
                      </div>
                    ))}
                  </div>

                  {/* Preferred Call Time */}
                  <div className="col-md-12 form-group m-2">
                    <h6>Preferred time to call?</h6>
                    {[
                      { value: "morning", label: "Morning" },
                      { value: "afternoon", label: "Afternoon" },
                      { value: "evening", label: "Evening" },
                    ].map((time, index) => (
                      <label key={index}>
                        <input type="checkbox" name={time.value} value={time.value} /> {time.label}
                      </label>
                    ))}
                  </div>

                  <div className="text-center">
                    <button type="submit">Send Message</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
