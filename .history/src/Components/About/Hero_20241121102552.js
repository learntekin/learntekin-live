import React, { Component } from "react";

export default class Hero extends Component {
  componentDidMount(){
    document.title="Welcome to LearnTEK In"
  }
  render() {

    return (
      <section id="hero" class="d-flex align-items-center">
        <div class="container-fluid" data-aos="zoom-out" data-aos-delay="100">
          <div class="row">
            <div class="col-xl-12 " align="center">
              <div id="container"></div>
              <h4  style={{ color: "white" }}>Welcome to Learn TEK In!</h4>
              <h1 className="typewriter">We <u>construct</u> your path to </h1>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
