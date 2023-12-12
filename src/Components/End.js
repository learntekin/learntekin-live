import React, { Component } from "react";
 
export default class End extends Component {
  render() {
 
    return (
      <div class="container-fluid d-md-flex py-4">
        <div class="me-md-auto text-center text-md-start">
          <div class="copyright">
             ©2023 Learn TEK In,
             Headquarters: 18416 Clavemorr Castle Ct, Charlotte, NC 28277
            <p><a className="contact-link" href="mailto:learntekin@gmail.com">Email: learntekin@gmail.com</a><a className="contact-link" href="tel: +91-638-242-2474 "> | Phone:+91-638-242-2474 </a></p>
         
          </div>
          <div class="credits">
           <h3> Designed by </h3><a className="contact-link" href="https://bootstrapmade.com/"><strong> Learn TEK In</strong></a>
          </div>
        </div>
        <div class="social-links text-center text-md-end pt-3 pt-md-0">
   
          <a href="https://www.instagram.com/learntekin" class="instagram">
            <i class="bx bxl-instagram"></i>
          </a>

          <a href="https://www.linkedin.com/groups/14199617/" class="linkedin">
            <i class="bx bxl-linkedin"></i>
          </a>
        </div>
      </div>
    );
  }
}
