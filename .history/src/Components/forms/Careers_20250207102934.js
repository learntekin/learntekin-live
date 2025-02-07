import React, { Component } from "react";
import { Icon } from "@iconify/react";
import firebase from "../../firebase"; // Make sure Firestore is configured
import "firebase/firestore";

// Firestore reference
const firestore = firebase.firestore();

export default class Careers extends Component {
  state = {
    successMessage: "",
    errorMessage: "",
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Collect form data
      const formData = {
        title: document.querySelector('input[name="options"]:checked').value,
        firstName: event.target.elements.firstname.value,
        lastName: event.target.elements.lastname.value,
        email: event.target.elements.email.value,
        phoneNumber: event.target.elements.phoneNumber.value,
        role: event.target.elements.role.value,
        referral: event.target.elements.refer.value,
        preferredTime: {
          morning: event.target.elements.morning.checked,
          afternoon: event.target.elements.afternoon.checked,
          evening: event.target.elements.evening.checked,
        },
      };

      // Push data to Firestore under "careers" collection
      await firestore.collection("careers").add(formData);

      // Show success message
      this.setState({
        successMessage: "Your application has been successfully submitted!",
        errorMessage: "",
      });

      // Reset form (optional)
      event.target.reset();
    } catch (error) {
      console.error("Error submitting data to Firestore:", error);
      this.setState({
        successMessage: "",
        errorMessage: "There was an error submitting your application. Please try again.",
      });
    }
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
              {/* Existing content here (info boxes, descriptions) */}
            </div>
            <div className="col-lg-6">
              <div className="info-box1">
                <div className="col-lg-12 mt-6">
                  <form
                    onSubmit={this.handleSubmit} // Handle form submission
                    role="form"
                    className="php-email-form"
                  >
                    <div className="row">
                      <div className="col-md-12 form-group m-2">
                        <label>
                          <input type="radio" name="options" value="Ms." required />
                          &nbsp; Ms. &nbsp;
                        </label>
                        <label>
                          <input type="radio" name="options" value="Mr." required />
                          &nbsp; Mr. &nbsp;
                        </label>
                        <label>
                          <input type="radio" name="options" value="Mrs." required />
                          &nbsp; Mrs. &nbsp;
                        </label>
                      </div>
                      <div className="col-md-6 form-group">
                        <input
                          type="text"
                          name="firstname"
                          className="form-control"
                          id="firstname"
                          placeholder="First Name"
                          required
                        />
                      </div>
                      <div className="col-md-6 form-group">
                        <input
                          type="text"
                          name="lastname"
                          className="form-control"
                          id="lastname"
                          placeholder="Last Name"
                          required
                        />
                      </div>
                      <div className="col-md-6 form-group mt-3 mt-md-0">
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          id="email"
                          placeholder="Your Email"
                          required
                        />
                      </div>
                      <div className="col-md-6 form-group mt-3 mt-md-0">
                        <input
                          type="text"
                          className="form-control"
                          name="phoneNumber"
                          id="phoneNumber"
                          placeholder="Your Phone Number"
                          required
                        />
                      </div>
                      <div className="col-md-6 form-group mt-3 mt-md-0">
                        <input
                          type="text"
                          className="form-control"
                          name="role"
                          id="role"
                          placeholder="Role apply for"
                          required
                        />
                      </div>
                      <div className="col-md-6 form-group mt-3 mt-md-0">
                        <input
                          type="text"
                          className="form-control"
                          name="refer"
                          id="refer"
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
                      {this.state.successMessage && (
                        <div className="sent-message">{this.state.successMessage}</div>
                      )}
                      {this.state.errorMessage && (
                        <div className="error-message">{this.state.errorMessage}</div>
                      )}
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
