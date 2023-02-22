import React, { Component } from "react";
 
export default class Footer extends Component {
 
  render() {
    
    return (
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-5 col-md-6 footer-newsletter">
            <h4>Join Our Newsletter</h4>
 
            <form action="" method="post">
              <input type="email" name="email" />
              <input type="submit" value="Subscribe" required />
            </form>
          </div>
        </div>
      </div>
    );
  }
}
