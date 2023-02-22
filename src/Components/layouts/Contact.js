import React, { Component } from "react";
export default class Contact extends Component {
  render() {
    return (
      <section id="contact" class="contact">
        <div class="container-fluid mt-5" data-aos="fade-up">
          <div class="section-title">
            <h2>Contact</h2>
          </div>
          <div class="row" data-aos="fade-up" data-aos-delay="100">
            <div class="col-lg-6">
              <div class="row">
                <div class="col-md-12">
                  <div class="info-box">
                    <i class="bx bx-map"></i>
                    <h3>Our Address</h3>
                    <p>18416 Clavemorr Castle Ct, Charlotte, NC 28277</p>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="info-box mt-4">
                    <i class="bx bx-envelope"></i>
                    <h3>Email Us</h3>
                    <p>
                      <a
                        className="contact-link"
                        href="mailto:learntekin@gmail.com"
                      >
                        Email: learntekin@gmail.com
                      </a>
                    </p>{" "}
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="info-box mt-4">
                    <i class="bx bx-phone-call"></i>
                    <h3>Call Us</h3>
                    <p>
                    <a className="contact-link" href="tel: +91-638-242-2474 "> Phone:+91-638-242-2474 </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-6">
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSedGyzTjXRBMurXMnb7vAquvLfgVjS7TuWo0lfKp-yiHl-zSA/viewform?embedded=true"
                width="500"
                height="1707"
                frameborder="0"
                marginheight="0"
                marginwidth="0"
              >
                Loading…
              </iframe>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
