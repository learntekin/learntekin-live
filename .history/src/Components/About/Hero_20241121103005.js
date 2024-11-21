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
            <div class="col-xl-12 " align="center" style={{al}}>
              <div id="container"></div>
              <h4  style={{ color: "white" }}>"Welcome to Learn TEK In! Your ultimate hub for discovering, learning, and mastering technology. Dive in, explore, and let's innovate together!"</h4>
              <h1   className="typewriter">We <u>construct</u> your path to <u>the digital world!</u></h1>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
