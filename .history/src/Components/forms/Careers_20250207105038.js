import React, { Component } from "react";
import { Icon } from "@iconify/react";
import firebase from "../../firebase";
import Swal from "sweetalert2";
import "firebase/database";

// Reference to Firebase Realtime Database
const database = firebase.database();

export default class Careers extends Component {
  handleSubmit = async (event) => {
    event.preventDefault();
  
    // Collect form data
    const formData = {
      title: document.querySelector('input[name="options"]:checked')?.value || "",
      firstName: event.target.elements.firstname.value.trim(),
      lastName: event.target.elements.lastname.value.trim(),
      email: event.target.elements.email.value.trim(),
      phoneNumber: event.target.elements.phoneNumber.value.trim(),
      role: event.target.elements.role.value.trim(),
      referral: event.target.elements.refer.value.trim(),
      preferredTimes: {
        morning: event.target.elements.morning.checked,
        afternoon: event.target.elements.afternoon.checked,
        evening: event.target.elements.evening.checked,
      },
      timestamp: firebase.database.ServerValue.TIMESTAMP, // Adds a timestamp
    };
  
    console.log("Submitting Data:", formData); // Debugging log
  
    try {
      // Push data to Firebase Realtime Database
      await database.ref("careers").push(formData);
  
      Swal.fire({
        title: "Success!",
        text: "Your application has been submitted successfully.",
        icon: "success",
        confirmButtonText: "OK",
      });
  
      // Reset form after successful submission
      event.target.reset();
    } catch (error) {
      console.error("Error submitting data to Firebase:", error);
  
      Swal.fire({
        title: "Error!",
        text: error.message.includes("Quota exceeded")
          ? "Quota exceeded! Try again later."
          : "An error occurred. Please try again.",
        icon: "error",
        confirmButtonText: "Retry",
      });
    }
  };
  

  componentDidMount() {
    document.title = "Careers";

    // Scroll to #careers section if hash is present
    if (window.location.hash === "#careers") {
      const careersSection = document.getElementById("careers");
      if (careersSection) {
        careersSection.scrollIntoView({ behavior: "smooth" });
      }
    }
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
                {[
                  {
                    title: "Get Started Today",
                    content:
                      "Welcome to the Careers page of Learntekin! We are a technology organization specializing in training and development in website development, Android application development, data analytics, and data science. Our goal is to empower individuals with the skills and knowledge required to succeed in the ever-changing landscape of the technology industry.",
                  },
                  {
                    title: "Let us explore!",
                    content:
                      "At Learntekin, we value creativity, innovation, and collaboration. We provide an environment that fosters growth and personal development.",
                  },
                  {
                    title: "Our Mantra on hiring",
                    content:
                      "We are constantly looking for talented individuals willing to take on new challenges and contribute to our mission. Whether you are a seasoned professional or just starting out, we offer opportunities to grow and achieve your career goals.",
                  },
                ].map((box, index) => (
                  <div className="col-md-12" key={index}>
                    <div className="info-box1">
                      <h3>{box.title}</h3>
                      <p align="justify">{box.content}</p>
                    </div>
                  </div>
                ))}

                {[
                  {
                    icon: "mdi:web",
                    title: "Website Developer",
                    content:
                      "We provide top-notch website development services to our clients using the latest technologies and frameworks.",
                  },
                  {
                    icon: "mdi:ab-testing",
                    title: "Automation Tester",
                    content:
                      "We provide automation testing services to save time and reduce errors. Our experts use the latest tools to deliver accurate testing.",
                  },
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
              <div className="info-box1">
                <form onSubmit={this.handleSubmit} className="php-email-form">
                  <div className="row">
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
