import React, { Component } from "react";
import { Icon } from "@iconify/react";
import firebase from "../../firebase";
import "firebase/firestore";

// Reference to the Firestore database
const firestore = firebase.firestore();

export default class Careers extends Component {
  state = {
    message: "", // To store success or failure message
    error: "",   // To store error message
  };

  handleSubmit = (event) => {
    event.preventDefault();

    // Collect form data
    const formData = {
      title: document.querySelector('input[name="options"]:checked').value,
      firstName: event.target.elements.firstname.value,
      lastName: event.target.elements.lastname.value,
      email: event.target.elements.email.value,
      phoneNumber: event.target.elements.phoneNumber.value,
      role: event.target.elements.role.value,
      referral: event.target.elements.refer.value,
      morning: event.target.elements.morning.checked,
      afternoon: event.target.elements.afternoon.checked,
      evening: event.target.elements.evening.checked,
    };

    // Save data to Firestore in the "careers" collection
    firestore
      .collection("careers")
      .add(formData)
      .then(() => {
        this.setState({ message: "Your application has been submitted successfully!", error: "" });
      })
      .catch((error) => {
        this.setState({ error: "Error submitting your application. Please try again later.", message: "" });
        console.error("Error sending data to Firestore:", error);
      });
  };

  componentDidMount() {
    document.title = "Careers";
  }

  render() {
    const { message, error } = this.state;

    return (
      <section id="careers" className="contact">
        <div className="container-fluid mt-5" data-aos="fade-up">
          <div className="section-title">
            <h2>Careers</h2>
          </div>

          <div className="row" data-aos="fade-up" data-aos-delay="100">
            <div className="col-lg-6">
              {/* Add your information boxes as they were */}
            </div>

            <div className="col-lg-6">
              <div className="info-box1">
                <div className="col-lg-12 mt-6">
                  <form
                    onSubmit={this.handleSubmit}
                    role="form"
                    className="php-email-form"
                  >
                    <div className="row">
                      <div className="col-md-12 form-group m-2">
                        <label>
                          <input type="radio" name="options" value="Ms. " />
                          &nbsp; Ms. &nbsp;
                        </label>
                        <label>
                          <input type="radio" name="options" value="Mr." />
                          &nbsp; Mr. &nbsp;
                        </label>
                        <label>
                          <input type="radio" name="options" value="Mrs." />
                          &nbsp; Mrs. &nbsp;
                        </label>
                      </div>
                      <div className="col-md-6 form-group">
                        <input
                          type="text"
                          name="firstname"
                          className="form-control"
                          placeholder="First Name"
                          required
                        />
                      </div>
                      <div className="col-md-6 form-group">
                        <input
                          type="text"
                          name="lastname"
                          className="form-control"
                          placeholder="Last Name"
                          required
                        />
                      </div>
                      <div className="col-md-6 form-group mt-3 mt-md-0">
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          placeholder="Your Email"
                          required
                        />
                      </div>
                      <div className="col-md-6 form-group mt-3 mt-md-0">
                        <input
                          type="text"
                          className="form-control"
                          name="phoneNumber"
                          placeholder="Your Phone Number"
                          required
                        />
                      </div>
                      <div className="col-md-6 form-group mt-3 mt-md-0">
                        <input
                          type="text"
                          className="form-control"
                          name="role"
                          placeholder="Role apply for"
                          required
                        />
                      </div>
                      <div className="col-md-6 form-group mt-3 mt-md-0">
                        <input
                          type="text"
                          className="form-control"
                          name="refer"
                          placeholder="Your Referral"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-12 form-group m-2">
                      <h6>Preferred time to call?</h6>
                      <label>
                        <input type="checkbox" name="morning" value="morning" />
                        &nbsp; Morning &nbsp;
                      </label>
                      <label>
                        <input type="checkbox" name="afternoon" value="afternoon" />
                        &nbsp; Afternoon &nbsp;
                      </label>
                      <label>
                        <input type="checkbox" name="evening" value="evening" />
                        &nbsp; Evening &nbsp;
                      </label>
                    </div>

                    <div className="my-3">
                      {message && <div className="sent-message">{message}</div>}
                      {error && <div className="error-message">{error}</div>}
                    </div>
                    <div className="text-center">
                      <button type="submit">Send Message</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
