import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default class Hero extends Component {
  render() {
    return (
      <section id="hero" class="d-flex align-items-center">
        <div class="container-fluid" data-aos="zoom-in" data-aos-delay="100">
          <div class="row">
            <div class="col-xl-12 " align="center">
              <div id="container"></div>
              <h4 style={{ color: "white" }}>Welcome to Learn TEK In</h4>
              <h1>We construct your path to digital world!</h1>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
