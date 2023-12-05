import React, { Component, useState } from "react";
import { Icon } from "@iconify/react";

export default class Careers extends Component {
  // ... (existing code)

  // State variables for form fields and errors
  const [salutation, setSalutation] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [role, setRole] = useState("");
  const [referral, setReferral] = useState("");
  const [morning, setMorning] = useState(false);
  const [afternoon, setAfternoon] = useState(false);
  const [evening, setEvening] = useState(false);

  // State variable for general form error
  const [formError, setFormError] = useState("");

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation checks
    if (
      !salutation ||
      !firstName ||
      !lastName ||
      !email ||
      !phoneNumber ||
      !role ||
      !referral
    ) {
      setFormError("All fields are required");
      return;
    }

    // Additional validation checks
    if (!/^[a-zA-Z\s]*$/.test(firstName)) {
      setFormError("Invalid characters in the First Name field");
      return;
    }

    if (!/^[a-zA-Z\s]*$/.test(lastName)) {
      setFormError("Invalid characters in the Last Name field");
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setFormError("Invalid email address");
      return;
    }

    if (!/^[0-9]+$/.test(phoneNumber)) {
      setFormError("Invalid phone number");
      return;
    }

    // If all validations pass, you can proceed with form submission
    setFormError("");
    // TODO: Handle form submission logic
  };

  return (
    <section id="careers" className="contact">
      <div className="container-fluid mt-5" data-aos="fade-up">
        {/* ... (existing code) */}
        <div className="col-lg-12 mt-6">
          <form
            action="forms/contact.php"
            method="post"
            role="form"
            className="php-email-form"
            onSubmit={handleSubmit}
          >
            {/* ... (existing form fields) */}
            <div className="my-3">
              {/* Display form error message */}
              <div className="error-message">{formError}</div>
            </div>
            <div className="text-center">
              {/* Submit button */}
              <button type="submit">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
