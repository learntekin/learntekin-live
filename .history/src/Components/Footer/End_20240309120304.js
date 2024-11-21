import React, { Component } from "react";
 
export default class End extends Component {
  render() {
 
    return (
      <div class="container-fluid d-md-flex py-4">
        <div class="me-md-auto text-center text-md-start">
          <div class="copyright">
             ©2023 Learn TEK In,
             Headquarters: 18416 Clavemorr Castle Ct, Charlotte, NC 28277
         
          </div>
          <div class="credits">
           <h3> Designed by </h3><a className="contact-link" href="https://www.linkedin.com/company/learntekin"><strong> Learn TEK In</strong></a>
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
