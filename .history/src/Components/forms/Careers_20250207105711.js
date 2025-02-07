import React, { Component } from "react";
import { Icon } from "@iconify/react";
import Swal from "sweetalert2";
import firebase from "../../firebase"; // Import Firebase config
import { database } from "../../firebase"; // Import database reference

export default class Careers extends Component {
  handleSubmit = (event) => {
    event.preventDefault();

    // Collect form data
    const formData = {
      title: document.querySelector('input[name="options"]:checked')?.value || "",
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
      timestamp: new Date().toISOString(), // ✅ Add timestamp
    };

    // Push data to Firebase Realtime Database
    database.ref("careers").push(formData)
      .then(() => {
        Swal.fire({
          title: "Success!",
          text: "Your data has been submitted successfully.",
          icon: "success",
          confirmButtonText: "OK",
        });
      })
      .catch((error) => {
        console.error("Error sending data to Firebase:", error);
        Swal.fire({
          title: "Error!",
          text: "An error occurred while submitting your data. Please try again.",
          icon: "error",
          confirmButtonText: "Retry",
        });
      });
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
                      "Welcome to the Careers page of Learntekin! We are a technology organization specializing in training and development in website development, Android application development, data analytics, and data science.",
                  },
                  {
                    title: "Let us explore!",
                    content:
                      "At Learntekin, we value creativity, innovation, and collaboration. We provide an environment that fosters growth and personal development.",
                  },
                  {
                    title: "Our Mantra on hiring",
                    content:
                      "We are constantly looking for talented individuals willing to take on new challenges and contribute to our mission.",
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
                      "We provide automation testing services to save time and reduce errors.",
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
