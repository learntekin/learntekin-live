import React, { Component } from "react";
 
export default class Footer extends Component {
 
  render() {
    
    return (
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-5 col-md-6 footer-newsletter mt-4">
            <h4 style={{ color:'black'}}>Join Our Newsletter</h4>
 
            <form action="" method="post" style={{color:'black'}}>
              <input type="email" name="email" />
              <input type="submit" value="Subscribe" required />
            </form>
          </div>

          <div class="col-lg-3 col-md-6 footer-links mt-4">
            <h4 style={{color:'black'}}>Our Services</h4>
            <ul>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Website Development</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">UI/UX Development&</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Android App Development</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Data Analytics and Data Science</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">ML and DL Models</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Networking | Testing </a></li>
            </ul>
          </div>

          <div class="col-lg-3 col-md-6 footer-links">
            <h4 style={{color:'black'}}>Our Products</h4>
            <ul>
              <li><i class="bx bx-chevron-right"></i> <a href="https://financefrenzy-biz.web.app/">financeFrenzy</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="https://play.google.com/store/apps/details?id=com.learntekin.srisasta.srisastaapp&hl=en">SriSasta</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="https://play.google.com/store/apps/details?id=com.learntekin.healthpredicct&hl=en">CareGuard</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="https://docs.google.com/forms/d/e/1FAIpQLSfMqjb4VTQcsqq7W5UblK3B9q1l5vw4wYP7TJr0jF9lThLgtA/viewform">mummyDaddyCars</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="https://whatsapp.com/channel/0029VatfXYQG3R3k6xYOC63w">Bee-Kart</a></li>



            </ul>
          </div>

        </div>
      </div>
    );
  }
}
